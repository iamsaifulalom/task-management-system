// schemas/loginSchema.ts
import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

// TypeScript type inferred from schema
export type SignInFormValues = z.infer<typeof signInSchema>;

export const signInDefaultValues = {
  email: "test@user.com",
  password: "test123456"
}
