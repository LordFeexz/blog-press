import { z } from "zod";

export const EARLY_BIRD_REGISTER_SCHEMA = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Please enter a valid email",
    })
    .email({ message: "Please enter a valid email" }),
  company: z.preprocess(
    (val) => val || null,
    z
      .string()
      .min(3, { message: "Minimum 3 characters" })
      .max(100, { message: "Maximum 100 characters" })
      .optional()
      .nullable()
  ),
  website: z.preprocess(
    (val) => val || null,
    z
      .string()
      .max(500, { message: "Maximum 500 characters" })
      .optional()
      .nullable()
  ),
  referral: z.preprocess(
    (val) => val || null,
    z.string().optional().nullable()
  ),
  marketing: z.preprocess(Boolean, z.boolean().default(true)),
});

export type EarlyBirdRegisterSchema = z.infer<
  typeof EARLY_BIRD_REGISTER_SCHEMA
>;

export type EarlyBirdRegisterState = EarlyBirdRegisterSchema & {
  errors?: z.ZodError<EarlyBirdRegisterSchema>["formErrors"]["fieldErrors"];
  error?: string;
  success: boolean;
};
