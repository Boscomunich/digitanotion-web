"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "llc-worldtrade.com",
  port: 465,
  secure: true,
  auth: {
    user: "mail@llc-worldtrade.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Base function to send emails
 */
export async function sendEmail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: '"Digitanotion" <mail@llc-worldtrade.com>',
      to,
      subject,
      html,
    });
    console.log(`Email sent to ${to}: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
