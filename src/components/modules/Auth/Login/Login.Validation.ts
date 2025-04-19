import { z } from "zod";
export const loginValidation = z.object({
  identifier: z
    .string()
    .min(1, "Please provide an email address or phone number")
    .refine(
      (val) =>
        /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val) || /^[0-9]{10,15}$/.test(val),
      { message: "Please enter a valid email or phone number." }
    ),
  password: z.string().min(6, "Password should be a minimum of 6 characters."),
});
