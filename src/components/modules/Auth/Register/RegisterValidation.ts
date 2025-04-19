import { z } from "zod";
export const registerValidation = z
  .object({
    name: z.string().min(1, "Full name must be provided"),
    identifier: z
      .string()
      .min(1, "Please provide either an email address or phone number.")
      .refine(
        (val) =>
          /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val) || /^[0-9]{10,15}$/.test(val),
        { message: "Email or phone number is not in a valid format." }
      ),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
