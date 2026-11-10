/**
 * email.ts — Email sending helper for Dogs Wonderland
 * Uses Nodemailer with Gmail SMTP to forward booking enquiries to maifrances@gmail.com
 */

import nodemailer from "nodemailer";

export interface BookingEnquiry {
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  dogName: string;
  dogBreed: string;
  dogAge: string;
  dogSize: "small" | "medium" | "large" | "giant";
  isReactive: boolean;
  checkIn: string;
  checkOut: string;
  message: string;
}

const RECIPIENT_EMAIL = "maifrances@gmail.com";

function createTransporter() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error("Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
}

export async function sendBookingEnquiry(enquiry: BookingEnquiry): Promise<void> {
  const transporter = createTransporter();

  const dogSizeLabels: Record<BookingEnquiry["dogSize"], string> = {
    small: "Small (under 10kg)",
    medium: "Medium (10–25kg)",
    large: "Large (25–45kg)",
    giant: "Giant (45kg+)",
  };

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Georgia, serif; color: #2a2a2a; background: #f9f7f4; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; }
    .header { background: #2D5016; padding: 32px 40px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px; }
    .header p { color: #a8c87a; margin: 6px 0 0; font-size: 14px; }
    .body { padding: 32px 40px; }
    .section { margin-bottom: 28px; }
    .section-title { font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; color: #2D5016; border-bottom: 2px solid #e8f0d8; padding-bottom: 6px; margin-bottom: 14px; }
    .row { display: flex; margin-bottom: 10px; }
    .label { font-size: 13px; color: #666; width: 140px; flex-shrink: 0; }
    .value { font-size: 14px; color: #1a1a1a; font-weight: 500; }
    .message-box { background: #f5f7f0; border-left: 4px solid #2D5016; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.6; color: #333; }
    .reactive-badge { display: inline-block; background: #fff3cd; color: #856404; border: 1px solid #ffc107; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
    .footer { background: #f5f7f0; padding: 20px 40px; text-align: center; font-size: 12px; color: #888; }
    .cta { background: #2D5016; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: bold; display: inline-block; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🐾 New Booking Enquiry</h1>
      <p>Dogs Wonderland — Kyneton Farm & Retreat</p>
    </div>
    <div class="body">

      <div class="section">
        <div class="section-title">Dog Owner Details</div>
        <div class="row"><span class="label">Name</span><span class="value">${enquiry.ownerName}</span></div>
        <div class="row"><span class="label">Email</span><span class="value">${enquiry.ownerEmail}</span></div>
        <div class="row"><span class="label">Phone</span><span class="value">${enquiry.ownerPhone || "Not provided"}</span></div>
      </div>

      <div class="section">
        <div class="section-title">Dog Details</div>
        <div class="row"><span class="label">Dog's Name</span><span class="value">${enquiry.dogName}</span></div>
        <div class="row"><span class="label">Breed</span><span class="value">${enquiry.dogBreed || "Not specified"}</span></div>
        <div class="row"><span class="label">Age</span><span class="value">${enquiry.dogAge || "Not specified"}</span></div>
        <div class="row"><span class="label">Size</span><span class="value">${dogSizeLabels[enquiry.dogSize]}</span></div>
        <div class="row"><span class="label">Reactive Dog</span><span class="value">${enquiry.isReactive ? '<span class="reactive-badge">⚠️ Yes — needs extra care</span>' : "No"}</span></div>
      </div>

      <div class="section">
        <div class="section-title">Requested Dates</div>
        <div class="row"><span class="label">Check-in</span><span class="value">${enquiry.checkIn}</span></div>
        <div class="row"><span class="label">Check-out</span><span class="value">${enquiry.checkOut}</span></div>
      </div>

      ${enquiry.message ? `
      <div class="section">
        <div class="section-title">Additional Message</div>
        <div class="message-box">${enquiry.message.replace(/\n/g, "<br>")}</div>
      </div>
      ` : ""}

      <div style="text-align: center;">
        <a href="mailto:${enquiry.ownerEmail}?subject=Re: Booking Enquiry for ${enquiry.dogName} — Dogs Wonderland" class="cta">
          Reply to ${enquiry.ownerName}
        </a>
      </div>
    </div>
    <div class="footer">
      This enquiry was submitted via the Dogs Wonderland website · 58 Mulfaheys Rd, Kyneton VIC 3444
    </div>
  </div>
</body>
</html>
  `.trim();

  const textBody = `
NEW BOOKING ENQUIRY — Dogs Wonderland
======================================

OWNER DETAILS
Name: ${enquiry.ownerName}
Email: ${enquiry.ownerEmail}
Phone: ${enquiry.ownerPhone || "Not provided"}

DOG DETAILS
Name: ${enquiry.dogName}
Breed: ${enquiry.dogBreed || "Not specified"}
Age: ${enquiry.dogAge || "Not specified"}
Size: ${dogSizeLabels[enquiry.dogSize]}
Reactive: ${enquiry.isReactive ? "Yes — needs extra care" : "No"}

REQUESTED DATES
Check-in: ${enquiry.checkIn}
Check-out: ${enquiry.checkOut}

${enquiry.message ? `MESSAGE\n${enquiry.message}\n` : ""}

Reply to: ${enquiry.ownerEmail}
  `.trim();

  await transporter.sendMail({
    from: `"Dogs Wonderland Website" <${process.env.GMAIL_USER}>`,
    to: RECIPIENT_EMAIL,
    replyTo: enquiry.ownerEmail,
    subject: `🐾 New Booking Enquiry: ${enquiry.dogName} (${enquiry.ownerName})`,
    text: textBody,
    html: htmlBody,
  });

  // Also send a confirmation to the enquirer
  await transporter.sendMail({
    from: `"Dianne at Dogs Wonderland" <${process.env.GMAIL_USER}>`,
    to: enquiry.ownerEmail,
    subject: `We've received your enquiry for ${enquiry.dogName}! 🐾`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: Georgia, serif; color: #2a2a2a; background: #f9f7f4; margin: 0; padding: 0; }
  .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; }
  .header { background: #2D5016; padding: 32px 40px; text-align: center; }
  .header h1 { color: #ffffff; margin: 0; font-size: 22px; }
  .header p { color: #a8c87a; margin: 6px 0 0; font-size: 14px; }
  .body { padding: 32px 40px; line-height: 1.7; font-size: 15px; color: #333; }
  .footer { background: #f5f7f0; padding: 20px 40px; text-align: center; font-size: 12px; color: #888; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Thank you, ${enquiry.ownerName}! 🐾</h1>
      <p>Dogs Wonderland — Kyneton Farm & Retreat</p>
    </div>
    <div class="body">
      <p>Hi ${enquiry.ownerName},</p>
      <p>I've received your booking enquiry for <strong>${enquiry.dogName}</strong> and I'll be in touch very soon to discuss availability and arrange a meet-and-greet!</p>
      <p>In the meantime, feel free to call me directly on <strong>0422 776 858</strong> if you have any questions.</p>
      <p>Looking forward to welcoming ${enquiry.dogName} to the farm!</p>
      <p>Warm regards,<br><strong>Dianne</strong><br>Dogs Wonderland · 58 Mulfaheys Rd, Kyneton VIC 3444</p>
    </div>
    <div class="footer">Dogs Wonderland · Kyneton, Victoria · 0422 776 858 · maifrances@gmail.com</div>
  </div>
</body>
</html>
    `.trim(),
  });
}
