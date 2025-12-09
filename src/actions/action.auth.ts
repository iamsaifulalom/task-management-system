"use server";

import { ValidateResource } from "@/lib/validate-resources";
import { SignUpFormValues, signUpSchema } from "@/schema/sign-up-schema";
import { authService } from "@/services/service.auth";

export async function signUpAction(formData: SignUpFormValues) {

  const validated = ValidateResource(signUpSchema, formData);
  const result = authService.createUser(validated.data)
  return { success: true, result };
  
}
