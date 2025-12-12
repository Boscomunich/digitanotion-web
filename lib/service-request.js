"use server";

import { sendEmail } from "./mail";
import { adminServiceNotificationTemplate } from "./mail/template/admin";
import { userServiceRequestTemplate } from "./mail/template/user";

const ADMIN_EMAIL = "boscomunich@gmail.com";

/**
 * Submit Software Development Service Request
 */
export async function submitSoftwareRequest(formData) {
  try {
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      projectType,
      budget,
      timeline,
      description,
    } = formData;

    // Prepare data for email templates
    const clientData = {
      firstName,
      lastName,
      email,
      company: company || "Not specified",
      phone,
      projectType: projectType || "Not specified",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      description: description || "",
    };

    // Send confirmation email to user
    await sendEmail(
      email,
      "Your Software Development Request - Digitanotion",
      userServiceRequestTemplate(clientData, "software")
    );

    // Send notification to admin
    await sendEmail(
      ADMIN_EMAIL,
      `New Software Request: ${firstName} ${lastName}`,
      adminServiceNotificationTemplate(clientData, "software")
    );

    return { success: true, message: "Request submitted successfully!" };
  } catch (error) {
    console.error("Software request error:", error);
    return {
      success: false,
      message: "Failed to submit request. Please try again.",
    };
  }
}

/**
 * Submit Cybersecurity Service Request
 */
export async function submitCybersecurityRequest(formData) {
  try {
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      urgency,
      serviceType,
      description,
    } = formData;

    // Prepare data for email templates
    const clientData = {
      firstName,
      lastName,
      email,
      company: company || "Not specified",
      phone,
      urgency: urgency || "Not specified",
      serviceType: Array.isArray(serviceType) ? serviceType : [serviceType],
      description: description || "",
    };

    // Set subject based on urgency
    const userSubject =
      urgency === "critical"
        ? "🚨 CRITICAL: Your Security Request Received - CyBouncer"
        : "Your Security Assessment Request - CyBouncer";

    // Send confirmation email to user
    await sendEmail(
      email,
      userSubject,
      userServiceRequestTemplate(clientData, "cybersecurity")
    );

    // Send notification to admin
    await sendEmail(
      ADMIN_EMAIL,
      `New Security Request: ${firstName} ${lastName}`,
      adminServiceNotificationTemplate(clientData, "cybersecurity")
    );

    return {
      success: true,
      message:
        urgency === "critical"
          ? "Critical request submitted! We'll contact you within 1 hour."
          : "Request submitted successfully! We'll contact you within 2 hours.",
    };
  } catch (error) {
    console.error("Cybersecurity request error:", error);
    return {
      success: false,
      message: "Failed to submit request. Please try again.",
    };
  }
}
