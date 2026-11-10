/**
 * BookingSection — Booking Enquiry Form
 * Design: Warm cream background, forest green accents, clean form layout
 * Submits to Netlify Forms (form name "booking"); Netlify emails each enquiry to the owner
 */

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, PawPrint, Calendar, User, Dog } from "lucide-react";

type DogSize = "small" | "medium" | "large" | "giant";

interface FormData {
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  dogName: string;
  dogBreed: string;
  dogAge: string;
  dogSize: DogSize;
  isReactive: boolean;
  checkIn: string;
  checkOut: string;
  message: string;
}

const initialForm: FormData = {
  ownerName: "",
  ownerEmail: "",
  ownerPhone: "",
  dogName: "",
  dogBreed: "",
  dogAge: "",
  dogSize: "medium",
  isReactive: false,
  checkIn: "",
  checkOut: "",
  message: "",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1.5px solid oklch(0.88 0.04 145)",
  backgroundColor: "oklch(0.99 0.005 90)",
  color: "oklch(0.22 0.04 55)",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  marginBottom: "6px",
  color: "oklch(0.32 0.09 145)",
  fontFamily: "'DM Sans', sans-serif",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

export default function BookingSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const mutation = { isPending, isError };

  const submitToNetlify = async (data: FormData) => {
    setIsPending(true);
    setIsError(false);
    try {
      const body = new URLSearchParams({
        "form-name": "booking",
        ...Object.fromEntries(
          Object.entries(data).map(([k, v]) => [k, typeof v === "boolean" ? (v ? "Yes" : "No") : v])
        ),
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.ownerName.trim()) newErrors.ownerName = "Your name is required";
    if (!form.ownerEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.ownerEmail))
      newErrors.ownerEmail = "A valid email address is required";
    if (!form.dogName.trim()) newErrors.dogName = "Your dog's name is required";
    if (!form.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!form.checkOut) newErrors.checkOut = "Check-out date is required";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn)
      newErrors.checkOut = "Check-out must be after check-in";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    void submitToNetlify(form);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="book"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 reveal">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: "oklch(0.92 0.06 145)", color: "oklch(0.28 0.09 145)" }}
            >
              <PawPrint size={15} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Book a Stay
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.04 55)" }}
            >
              Send an{" "}
              <span style={{ color: "oklch(0.32 0.09 145)", fontStyle: "italic" }}>
                Enquiry
              </span>
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto"
              style={{ color: "oklch(0.48 0.04 55)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
            >
              Tell Dianne about your dog and your preferred dates. She'll be in touch to confirm availability and arrange a meet-and-greet.
            </p>
          </div>

          {/* Success State */}
          {submitted ? (
            <div
              className="rounded-2xl p-10 text-center reveal"
              style={{ backgroundColor: "oklch(0.96 0.06 145)", border: "2px solid oklch(0.78 0.12 145)" }}
            >
              <CheckCircle size={52} style={{ color: "oklch(0.42 0.12 145)", margin: "0 auto 16px" }} />
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.04 55)" }}
              >
                Enquiry Sent!
              </h3>
              <p
                className="text-base mb-6"
                style={{ color: "oklch(0.42 0.06 55)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
              >
                Thank you! Dianne will review your enquiry and get back to you soon.
              </p>
              <p style={{ color: "oklch(0.48 0.04 55)", fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
                Need to reach Dianne sooner? Call{" "}
                <a href="tel:0422776858" style={{ color: "oklch(0.32 0.09 145)", fontWeight: 700 }}>
                  0422 776 858
                </a>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm underline"
                style={{ color: "oklch(0.42 0.09 145)", fontFamily: "'DM Sans', sans-serif", background: "none", border: "none", cursor: "pointer" }}
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 md:p-10 reveal"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 40px oklch(0.22 0.09 145 / 0.08)",
                border: "1px solid oklch(0.92 0.03 145)",
              }}
            >
              {/* Error banner */}
              {mutation.isError && (
                <div
                  className="flex items-center gap-3 p-4 rounded-xl mb-6"
                  style={{ backgroundColor: "oklch(0.97 0.04 25)", border: "1px solid oklch(0.85 0.08 25)" }}
                >
                  <AlertCircle size={18} style={{ color: "oklch(0.52 0.18 25)", flexShrink: 0 }} />
                  <p style={{ color: "oklch(0.38 0.12 25)", fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
                    Something went wrong sending your enquiry. Please try again or call Dianne directly on 0422 776 858.
                  </p>
                </div>
              )}

              {/* Section: Owner Details */}
              <div className="mb-8">
                <div
                  className="flex items-center gap-2 mb-5 pb-3"
                  style={{ borderBottom: "2px solid oklch(0.92 0.04 145)" }}
                >
                  <User size={16} style={{ color: "oklch(0.42 0.09 145)" }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 700, color: "oklch(0.32 0.09 145)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Your Details
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle} htmlFor="ownerName">Full Name *</label>
                    <input
                      id="ownerName"
                      name="ownerName"
                      type="text"
                      value={form.ownerName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Johnson"
                      style={{ ...inputStyle, borderColor: errors.ownerName ? "oklch(0.65 0.18 25)" : "oklch(0.88 0.04 145)" }}
                    />
                    {errors.ownerName && <p style={{ color: "oklch(0.52 0.18 25)", fontSize: "12px", marginTop: "4px", fontFamily: "'DM Sans', sans-serif" }}>{errors.ownerName}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="ownerEmail">Email Address *</label>
                    <input
                      id="ownerEmail"
                      name="ownerEmail"
                      type="email"
                      value={form.ownerEmail}
                      onChange={handleChange}
                      placeholder="e.g. sarah@email.com"
                      style={{ ...inputStyle, borderColor: errors.ownerEmail ? "oklch(0.65 0.18 25)" : "oklch(0.88 0.04 145)" }}
                    />
                    {errors.ownerEmail && <p style={{ color: "oklch(0.52 0.18 25)", fontSize: "12px", marginTop: "4px", fontFamily: "'DM Sans', sans-serif" }}>{errors.ownerEmail}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label style={labelStyle} htmlFor="ownerPhone">Phone Number (optional)</label>
                    <input
                      id="ownerPhone"
                      name="ownerPhone"
                      type="tel"
                      value={form.ownerPhone}
                      onChange={handleChange}
                      placeholder="e.g. 0412 345 678"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>

              {/* Section: Dog Details */}
              <div className="mb-8">
                <div
                  className="flex items-center gap-2 mb-5 pb-3"
                  style={{ borderBottom: "2px solid oklch(0.92 0.04 145)" }}
                >
                  <Dog size={16} style={{ color: "oklch(0.42 0.09 145)" }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 700, color: "oklch(0.32 0.09 145)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Your Dog
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle} htmlFor="dogName">Dog's Name *</label>
                    <input
                      id="dogName"
                      name="dogName"
                      type="text"
                      value={form.dogName}
                      onChange={handleChange}
                      placeholder="e.g. Buddy"
                      style={{ ...inputStyle, borderColor: errors.dogName ? "oklch(0.65 0.18 25)" : "oklch(0.88 0.04 145)" }}
                    />
                    {errors.dogName && <p style={{ color: "oklch(0.52 0.18 25)", fontSize: "12px", marginTop: "4px", fontFamily: "'DM Sans', sans-serif" }}>{errors.dogName}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="dogBreed">Breed (optional)</label>
                    <input
                      id="dogBreed"
                      name="dogBreed"
                      type="text"
                      value={form.dogBreed}
                      onChange={handleChange}
                      placeholder="e.g. Golden Retriever"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="dogAge">Age (optional)</label>
                    <input
                      id="dogAge"
                      name="dogAge"
                      type="text"
                      value={form.dogAge}
                      onChange={handleChange}
                      placeholder="e.g. 3 years"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="dogSize">Size *</label>
                    <select
                      id="dogSize"
                      name="dogSize"
                      value={form.dogSize}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="small">Small (under 10kg)</option>
                      <option value="medium">Medium (10–25kg)</option>
                      <option value="large">Large (25–45kg)</option>
                      <option value="giant">Giant (45kg+)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      className="flex items-start gap-3 cursor-pointer"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <input
                        type="checkbox"
                        name="isReactive"
                        checked={form.isReactive}
                        onChange={handleChange}
                        style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "oklch(0.32 0.09 145)", flexShrink: 0 }}
                      />
                      <div>
                        <span style={{ fontSize: "14px", fontWeight: 600, color: "oklch(0.28 0.06 55)" }}>
                          My dog is reactive or needs extra personal space
                        </span>
                        <p style={{ fontSize: "13px", color: "oklch(0.55 0.04 55)", marginTop: "2px", lineHeight: 1.5 }}>
                          Dianne specialises in reactive dogs — the farm's 2.25ha means plenty of room for dogs who prefer their own space.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Section: Dates */}
              <div className="mb-8">
                <div
                  className="flex items-center gap-2 mb-5 pb-3"
                  style={{ borderBottom: "2px solid oklch(0.92 0.04 145)" }}
                >
                  <Calendar size={16} style={{ color: "oklch(0.42 0.09 145)" }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 700, color: "oklch(0.32 0.09 145)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Requested Dates
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle} htmlFor="checkIn">Check-in Date *</label>
                    <input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={form.checkIn}
                      onChange={handleChange}
                      min={today}
                      style={{ ...inputStyle, borderColor: errors.checkIn ? "oklch(0.65 0.18 25)" : "oklch(0.88 0.04 145)" }}
                    />
                    {errors.checkIn && <p style={{ color: "oklch(0.52 0.18 25)", fontSize: "12px", marginTop: "4px", fontFamily: "'DM Sans', sans-serif" }}>{errors.checkIn}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="checkOut">Check-out Date *</label>
                    <input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      value={form.checkOut}
                      onChange={handleChange}
                      min={form.checkIn || today}
                      style={{ ...inputStyle, borderColor: errors.checkOut ? "oklch(0.65 0.18 25)" : "oklch(0.88 0.04 145)" }}
                    />
                    {errors.checkOut && <p style={{ color: "oklch(0.52 0.18 25)", fontSize: "12px", marginTop: "4px", fontFamily: "'DM Sans', sans-serif" }}>{errors.checkOut}</p>}
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div className="mb-8">
                <label style={labelStyle} htmlFor="message">Anything else Dianne should know? (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g. dietary requirements, medical conditions, favourite toys, or anything that will help make your dog's stay perfect..."
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-base transition-all duration-200"
                style={{
                  backgroundColor: mutation.isPending ? "oklch(0.55 0.07 145)" : "oklch(0.32 0.09 145)",
                  color: "#ffffff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "0.02em",
                  border: "none",
                  cursor: mutation.isPending ? "not-allowed" : "pointer",
                  transform: "scale(1)",
                  boxShadow: "0 4px 20px oklch(0.32 0.09 145 / 0.35)",
                }}
                onMouseEnter={(e) => {
                  if (!mutation.isPending) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.26 0.09 145)";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = mutation.isPending ? "oklch(0.55 0.07 145)" : "oklch(0.32 0.09 145)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                }}
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending your enquiry…
                  </>
                ) : (
                  <>
                    <PawPrint size={18} />
                    Send Booking Enquiry
                  </>
                )}
              </button>

              <p
                className="text-center mt-4 text-sm"
                style={{ color: "oklch(0.62 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Or call Dianne directly on{" "}
                <a href="tel:0422776858" style={{ color: "oklch(0.32 0.09 145)", fontWeight: 600 }}>
                  0422 776 858
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
