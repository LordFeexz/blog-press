"use server";

import { Admin, Waitlist } from "@/models";
import {
  EARLY_BIRD_REGISTER_SCHEMA,
  type EarlyBirdRegisterState,
} from "./schema";

export async function earlyBirdRegisterAction(
  prevState: EarlyBirdRegisterState,
  formData: FormData
): Promise<EarlyBirdRegisterState> {
  const { error, success, data } =
    await EARLY_BIRD_REGISTER_SCHEMA.safeParseAsync(
      Object.fromEntries(formData.entries())
    );

  if (!success)
    return {
      ...prevState,
      errors: error?.formErrors?.fieldErrors,
      error: "Bad Request",
    };

  if (data.referral && !(await Admin.findByPk(data.referral, { raw: true })))
    return {
      ...prevState,
      error: "Referral code is invalid",
    };

  if (!(await Waitlist.findOne({ where: { email: data.email } })))
    await Waitlist.create({
      email: data.email,
      company: data.company,
      website: data.website,
      referral: data.referral,
      accept_marketing_email: data.marketing,
      created_at: new Date(),
      updated_at: new Date(),
    });

  return {
    ...prevState,
    ...data,
    error: void 0,
    errors: void 0,
    success: true,
  };
}
