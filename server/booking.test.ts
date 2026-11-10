import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the email module so we don't actually send emails in tests
vi.mock("./email", () => ({
  sendBookingEnquiry: vi.fn().mockResolvedValue(undefined),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

const validEnquiry = {
  ownerName: "Sarah Johnson",
  ownerEmail: "sarah@example.com",
  ownerPhone: "0412 345 678",
  dogName: "Buddy",
  dogBreed: "Golden Retriever",
  dogAge: "3 years",
  dogSize: "medium" as const,
  isReactive: false,
  checkIn: "2026-06-01",
  checkOut: "2026-06-07",
  message: "Buddy loves swimming!",
};

describe("booking.submitEnquiry", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid booking enquiry and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.booking.submitEnquiry(validEnquiry);
    expect(result).toEqual({ success: true });
  });

  it("accepts a reactive dog enquiry", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.booking.submitEnquiry({
      ...validEnquiry,
      isReactive: true,
      dogName: "Rex",
    });
    expect(result).toEqual({ success: true });
  });

  it("accepts enquiry with minimal required fields only", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.booking.submitEnquiry({
      ownerName: "Jane Doe",
      ownerEmail: "jane@example.com",
      ownerPhone: "",
      dogName: "Fluffy",
      dogBreed: "",
      dogAge: "",
      dogSize: "small",
      isReactive: false,
      checkIn: "2026-07-10",
      checkOut: "2026-07-15",
      message: "",
    });
    expect(result).toEqual({ success: true });
  });

  it("rejects enquiry with missing owner name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(
      caller.booking.submitEnquiry({ ...validEnquiry, ownerName: "A" })
    ).rejects.toThrow();
  });

  it("rejects enquiry with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(
      caller.booking.submitEnquiry({ ...validEnquiry, ownerEmail: "not-an-email" })
    ).rejects.toThrow();
  });

  it("rejects enquiry with missing dog name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(
      caller.booking.submitEnquiry({ ...validEnquiry, dogName: "" })
    ).rejects.toThrow();
  });

  it("rejects enquiry with missing check-in date", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(
      caller.booking.submitEnquiry({ ...validEnquiry, checkIn: "" })
    ).rejects.toThrow();
  });

  it("rejects enquiry with missing check-out date", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(
      caller.booking.submitEnquiry({ ...validEnquiry, checkOut: "" })
    ).rejects.toThrow();
  });

  it("falls back to notifyOwner when email sending fails", async () => {
    const { sendBookingEnquiry } = await import("./email");
    const { notifyOwner } = await import("./_core/notification");
    vi.mocked(sendBookingEnquiry).mockRejectedValueOnce(new Error("SMTP error"));

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.booking.submitEnquiry(validEnquiry);

    expect(result).toEqual({ success: true });
    expect(notifyOwner).toHaveBeenCalledOnce();
    expect(vi.mocked(notifyOwner).mock.calls[0][0].title).toContain("Buddy");
  });
});
