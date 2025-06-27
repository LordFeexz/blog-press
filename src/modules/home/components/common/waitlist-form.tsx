"use client";

import EmailForm from "@/components/common/email-form";
import LabelledInput from "@/components/common/labelled-input";
import SubmitBtn from "@/components/common/submit-btn";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { LangProps } from "@/interfaces/component";
import { ArrowRight } from "lucide-react";
import { memo, useActionState, useEffect } from "react";
import { getWaitlistFormDictionary } from "../../i18n";
import { WAITLIST_FORM_ID } from "../../constant";
import useEarlyBirdPageStore from "../../store";
import { earlyBirdRegisterAction } from "../../action";
import type { EarlyBirdRegisterState } from "../../schema";
import { toast } from "sonner";

const initialState: EarlyBirdRegisterState = {
  email: "",
  company: "",
  website: "",
  referral: "",
  marketing: true,
  success: false,
};

function WaitlistForm({ lang }: LangProps) {
  const t = getWaitlistFormDictionary(lang);
  const { referalCode, setReferralCode } = useEarlyBirdPageStore();
  const [
    { error, errors, referral, email, company, website, marketing, success },
    formAction,
    pending,
  ] = useActionState(earlyBirdRegisterAction, initialState);

  useEffect(() => {
    if (referral && referral !== referalCode) setReferralCode(referral);
  }, [referral, referalCode, setReferralCode]);

  useEffect(() => {
    if (success) toast.success(t.successToast);
  }, [success, t.successToast]);

  return (
    <form
      aria-busy={pending}
      action={formAction}
      className="space-y-6"
      id={WAITLIST_FORM_ID}
    >
      <EmailForm
        name="email"
        id="email"
        label="Email"
        required
        className="mt-2"
        defaultValue={email}
        errors={errors?.email}
      />

      <LabelledInput
        name="company"
        id="company"
        label={t.company}
        className="mt-2"
        type="text"
        minLength={3}
        maxLength={100}
        placeholder="Company Name"
        errors={errors?.company}
        defaultValue={company ?? ""}
      />

      <LabelledInput
        id="Website"
        name="website"
        label="Website URL"
        className="mt-2"
        type="url"
        maxLength={500}
        placeholder="https://example.com"
        errors={errors?.website}
        defaultValue={website ?? ""}
      />

      <LabelledInput
        id="referral"
        name="referral"
        label="Referral Code"
        className="mt-2"
        type="text"
        defaultValue={referalCode}
        key={referalCode}
        placeholder="Referral Code"
        errors={errors?.referral}
      />

      <div className="flex items-center space-x-2">
        <Checkbox
          id="marketing"
          name="marketing"
          defaultChecked={marketing}
          className="mt-2"
        />
        <Label htmlFor="marketing" className="text-sm text-muted-foreground">
          {t.marketingLabel}
        </Label>
      </div>

      {error && (
        <div className="flex justify-center items-center">
          <p className="text-red-500 text-sm antialiased animate-pulse duration-1000">
            {error}
          </p>
        </div>
      )}

      <SubmitBtn className="w-full" size="lg" disabled={pending || success}>
        {t.btnText}
        <ArrowRight className="ml-2 h-5 w-5" />
      </SubmitBtn>
    </form>
  );
}

export default memo(WaitlistForm);
