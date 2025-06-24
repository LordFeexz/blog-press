import { LANG } from "@/enums/global";
import { Sparkles } from "lucide-react";
import { FEATURES_EN, FEATURES_ID } from "../../constant";
import FeatureCard from "../common/feature-card";
import type { LangProps } from "@/interfaces/component";
import { getFeatureDictionary } from "../../i18n";

export default function Feature({ lang }: LangProps) {
  const t = getFeatureDictionary(lang);

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hgroup className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </hgroup>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(lang === LANG.ID ? FEATURES_ID : FEATURES_EN).map((val) => (
            <FeatureCard {...val} key={val.title} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-medium">{t.manyOthers}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
