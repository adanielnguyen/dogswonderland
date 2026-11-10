import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { sendBookingEnquiry } from "./email";
import { notifyOwner } from "./_core/notification";

const bookingEnquirySchema = z.object({
  ownerName: z.string().min(2, "Please enter your full name"),
  ownerEmail: z.string().email("Please enter a valid email address"),
  ownerPhone: z.string().optional().default(""),
  dogName: z.string().min(1, "Please enter your dog's name"),
  dogBreed: z.string().optional().default(""),
  dogAge: z.string().optional().default(""),
  dogSize: z.enum(["small", "medium", "large", "giant"]),
  isReactive: z.boolean().default(false),
  checkIn: z.string().min(1, "Please select a check-in date"),
  checkOut: z.string().min(1, "Please select a check-out date"),
  message: z.string().optional().default(""),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  booking: router({
    submitEnquiry: publicProcedure
      .input(bookingEnquirySchema)
      .mutation(async ({ input }) => {
        try {
          await sendBookingEnquiry(input);
        } catch (emailError) {
          // If email fails (e.g. credentials not set), fall back to owner notification
          console.warn("[Booking] Email send failed, falling back to notification:", emailError);
          const summary = `
New booking enquiry from ${input.ownerName} for ${input.dogName} (${input.dogBreed || "unknown breed"}).
Check-in: ${input.checkIn} | Check-out: ${input.checkOut}
Owner email: ${input.ownerEmail} | Phone: ${input.ownerPhone || "not provided"}
Dog size: ${input.dogSize} | Reactive: ${input.isReactive ? "Yes" : "No"}
${input.message ? `Message: ${input.message}` : ""}
          `.trim();
          await notifyOwner({
            title: `🐾 New Booking Enquiry: ${input.dogName} (${input.ownerName})`,
            content: summary,
          });
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
