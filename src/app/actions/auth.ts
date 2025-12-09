"use server";

import { SignUpFormValues, signUpSchema } from "@/schema/sign-up-schema";

export async function signUpAction(formData: SignUpFormValues) {
  // Validate using Zod
  const parsed = signUpSchema.safeParse(formData);

  if (!parsed.success) {
    // Return structured errors for frontend
    return { error: "Invalid data"};
  }

  const data = parsed.data; // Validated data

  console.log("Validated form data:", data);

  // TODO: handle user creation (DB insert, hash password, etc.)

  return { success: true };
}
