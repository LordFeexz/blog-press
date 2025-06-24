"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { REFERAL_CODE_PARAMS, WAITLIST_FORM_ID } from "./constant";
import useEarlyBirdPageStore from "./store";

export default function Init() {
  const searchParams = useSearchParams();
  const referalCode = searchParams.get(REFERAL_CODE_PARAMS);
  const { setReferralCode } = useEarlyBirdPageStore();
  useEffect(() => {
    if (referalCode) {
      document
        .getElementById(WAITLIST_FORM_ID)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      setReferralCode(referalCode);
    }
  }, [referalCode]);

  return null;
}
