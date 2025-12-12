"use server";

import { sendEmail } from "./mail";
import { dilsAdminNotificationTemplate } from "./mail/template/admin";
import { dilsUserConfirmationTemplate } from "./mail/template/user";

const ADMIN_EMAIL = "boscomunich@gmail.com";

/**
 * Submit DILS Partnership Inquiry
 */
export async function submitDILSInquiry(formData) {
  try {
    const {
      firstName,
      lastName,
      email,
      schoolName,
      phone,
      role,
      planInterest,
      studentCount,
      preferredTerm,
      message,
    } = formData;

    // Prepare data for email templates
    const inquiryData = {
      firstName,
      lastName,
      email,
      schoolName,
      phone,
      role,
      planInterest,
      studentCount,
      preferredTerm,
      message: message || "",
    };

    // Send confirmation email to user (school contact)
    await sendEmail(
      email,
      `DILS Partnership Inquiry Received - ${schoolName}`,
      dilsUserConfirmationTemplate(inquiryData)
    );

    // Send notification to admin/team
    await sendEmail(
      ADMIN_EMAIL,
      `New DILS Inquiry - ${schoolName}`,
      dilsAdminNotificationTemplate(inquiryData)
    );

    return {
      success: true,
      message:
        "Inquiry submitted successfully! We'll contact you within 24 hours.",
    };
  } catch (error) {
    console.error("DILS inquiry error:", error);
    return {
      success: false,
      message:
        "Failed to submit inquiry. Please try again or email us directly.",
    };
  }
}
