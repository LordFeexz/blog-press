"use client";

import { Button } from "@/components/ui/button";
import { memo, useCallback, type MouseEventHandler } from "react";
import { WAITLIST_FORM_ID } from "../../constant";
import { ArrowRight } from "lucide-react";
import type { LangProps } from "@/interfaces/component";
import { LANG } from "@/enums/global";

function ToWaitlistBtn({ lang }: LangProps) {
  const onClickHandler: MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    const form = document.getElementById(WAITLIST_FORM_ID);
    if (form) form?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <Button onClick={onClickHandler} size="lg" className="h-12 px-8 flex-1">
      {lang === LANG.ID ? "Daftar Menunggu" : "Join Waitlist"}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
}

export default memo(ToWaitlistBtn);
