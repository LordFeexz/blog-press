"use client";

import EmailForm from "@/components/common/email-form";
import LabelledInput from "@/components/common/labelled-input";
import SubmitBtn from "@/components/common/submit-btn";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { LangProps } from "@/interfaces/component";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import { getWaitlistFormDictionary } from "../../i18n";
import { WAITLIST_FORM_ID } from "../../constant";
import useEarlyBirdPageStore from "../../store";

function WaitlistForm({ lang }: LangProps) {
  const t = getWaitlistFormDictionary(lang);
  const { referalCode } = useEarlyBirdPageStore();

  return (
    <form className="space-y-6" id={WAITLIST_FORM_ID}>
      <EmailForm
        name="email"
        id="email"
        label="Email"
        required
        className="mt-2"
      />

      <LabelledInput
        name="company"
        id="company"
        label={t.company}
        className="mt-2"
        type="text"
        minLength={3}
        maxLength={100}
      />

      <LabelledInput
        id="Website"
        name="website"
        label="Website URL"
        className="mt-2"
        type="url"
        maxLength={500}
        placeholder="https://example.com"
      />

      <LabelledInput
        id="referral"
        name="referral"
        label="Referral Code"
        className="mt-2"
        type="text"
        defaultValue={referalCode}
        key={referalCode}
      />

      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" name="marketing" defaultChecked />
        <Label htmlFor="marketing" className="text-sm text-muted-foreground">
          {t.marketingLabel}
        </Label>
      </div>

      <SubmitBtn className="w-full" size="lg">
        {t.btnText}
        <ArrowRight className="ml-2 h-5 w-5" />
      </SubmitBtn>
    </form>
  );
}

export default memo(WaitlistForm);
