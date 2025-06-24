import { LANG } from "@/enums/global";
import type { LangProps } from "@/interfaces/component";
import { AlertCircle } from "lucide-react";
import { PROBLEM_EN, PROBLEM_ID } from "../../constant";
import ProblemCard from "../common/problem-card";
import { getProblemDictionary } from "../../i18n";

export default function Problem({ lang }: LangProps) {
  const t = getProblemDictionary(lang);
  return (
    <section id="home-problem" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hgroup className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </hgroup>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(lang === LANG.ID ? PROBLEM_ID : PROBLEM_EN).map((val) => (
            <ProblemCard {...val} key={val.title} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">{t.question}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
