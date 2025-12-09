import { SignUpFormValues } from "@/schema/sign-up-schema";
import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // standard is 10
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}

export const authService = {
  createUser: async (data?: SignUpFormValues) => {
    if (!data) throw new Error("No data provided");

    const { name, email, password } = data;
    return data
    // 1. Check if user already exists
    // const existingUser = await prisma.user.findUnique({ where: { email } });
    // if (existingUser) {
    //   throw new Error("Email already exists");
    // }

    // // 2. Hash the password
    // const hashedPassword = await hashPassword(password);

    // // 3. Create the user
    // const newUser = await prisma.user.create({
    //   data: {
    //     name,
    //     email,
    //     password: hashedPassword,
    //   },
    // });

    // // 4. Return user (omit password if needed)
    // const { password: _, ...userWithoutPassword } = newUser;
    // return userWithoutPassword;
  },
};
