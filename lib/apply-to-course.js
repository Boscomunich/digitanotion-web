"use server";

import { PrismaClient } from "@/prisma/generated/prisma/client";
import { revalidatePath } from "next/cache";
import { userConfirmationTemplate } from "./mail/template/user";
import { adminNotificationTemplate } from "./mail/template/admin";
import { sendEmail } from "./mail";

const prisma = new PrismaClient();
const ADMIN_EMAIL = "boscomunich@gmail.com";

export async function createCourseApplicationAndNotify(data) {
  try {
    const application = await prisma.courseApplication.create({ data });

    revalidatePath("/academy/register");

    await sendEmail(
      data.email,
      "Course Registration Confirmed",
      userConfirmationTemplate(
        data.firstName,
        data.courseName,
        data.coursePrice
      )
    );

    await sendEmail(
      ADMIN_EMAIL,
      "New Course Application",
      adminNotificationTemplate({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        courseName: data.courseName,
        coursePrice: data.coursePrice,
      })
    );

    return application;
  } catch (error) {
    console.error("Error processing course application:", error);
    throw new Error("Failed to process course application");
  }
}
