"use server";

import { Admin, Waitlist } from "@/models";
import {
  EARLY_BIRD_REGISTER_SCHEMA,
  type EarlyBirdRegisterState,
} from "./schema";
import { Referral } from "@/models/referral";

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

  let ref: string | null = null;
  if (data.referral) {
    const referral = (await Referral.findOne({
      where: { code: data.referral },
      include: [{ model: Admin }],
      raw: true,
      nest: true,
    })) as (Referral & { admin: Admin }) | null;
    if (!referral)
      return {
        ...prevState,
        ...data,
        error: "Referral code is invalid",
      };

    ref = referral.admin.id;
  }

  if (!(await Waitlist.findOne({ where: { email: data.email } })))
    await Waitlist.create({
      email: data.email,
      company: data.company,
      website: data.website,
      referral: ref,
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
