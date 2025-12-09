"use server";

import { ValidateResource } from "@/lib/validate-resources";
import { SignUpFormValues, signUpSchema } from "@/schema/sign-up-schema";

export async function signUpAction(formData: SignUpFormValues) {

  const { data } = ValidateResource(signUpSchema, formData);
  
  return { success: true };
}
