import { ZodType, ZodError } from "zod";

// Make it generic so it can accept any Zod schema
export const ValidateResource = <T>(schema: ZodType<T>, data: unknown) => {
  try {
    const validatedData = schema.parse(data); // Throws if invalid
    return { success: true, data: validatedData };
  } catch (err) {
    if (err instanceof ZodError) {
      return { success: false, errors: err.flatten() }; // Structured errors
    }
    return { success: false, errors: { message: "Unknown validation error" } };
  }
};
