import { object, string, z } from "zod";

export const ContactUsSchema = object({
  name: string(),
  email: string({ required_error: "Email is required" }).email(
    "Not a valid email"
  ),
  message: string(),
});

export type ContactUsSchemaType = z.infer<typeof ContactUsSchema>;