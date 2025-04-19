import { z } from "zod";

export const addProductValidation = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  condition: z.string().min(1, "Condition is required"),
  category: z.string().min(1, "Category is required"),
  brand: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  negotiable: z.string().min(1, "Negotiable option is required"),
  warranty: z.string().optional(),
  contactNumber: z.string().min(1, "Contact number is required"),
  images: z
    .array(z.object({ value: z.string().min(1, "Image URL is required") }))
    .min(1, "At least one image is required"),
});
