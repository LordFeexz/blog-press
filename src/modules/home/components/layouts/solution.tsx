import { LANG } from "@/enums/global";
import type { LangProps } from "@/interfaces/component";
import { CheckCircle, Target } from "lucide-react";
import {
  BENEFITS_EN,
  BENEFITS_ID,
  SOLUTION_POINTS_EN,
  SOLUTION_POINTS_ID,
} from "../../constant";
import { getSolutionDictionary } from "../../i18n";
import SolutionPointCard from "../common/solution-point-card";

export default function Solution({ lang }: LangProps) {
  const t = getSolutionDictionary(lang);
  return (
    <section id="home-solution" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <aside id="text-content">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-6 border border-green-500/20">
              <Target className="w-4 h-4 mr-2" />
              {t.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.title}</h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.subtitle}
            </p>

            <ul className="space-y-4 mb-8">
              {(lang === LANG.ID ? BENEFITS_ID : BENEFITS_EN).map(
                (benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-lg">{benefit}</span>
                  </li>
                )
              )}
            </ul>

            <div className="flex items-center space-x-4">
              {(lang === LANG.ID ? SOLUTION_POINTS_ID : SOLUTION_POINTS_EN).map(
                (val) => (
                  <SolutionPointCard {...val} key={val.label} />
                )
              )}
            </div>
          </aside>

          <aside id="visual-representation" className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-border">
              <div className="bg-card p-6 rounded-xl shadow-sm mb-4 border border-border">
                <div className="text-sm text-muted-foreground mb-2">
                  {t.apiRequests}
                </div>
                <div className="bg-muted text-green-600 dark:text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div>POST /api/generate-article</div>
                  <div className="text-muted-foreground">&#123;</div>
                  <div className="ml-4">
                    &quot;topic&quot;: &quot;Digital Marketing&quot;,
                  </div>
                  <div className="ml-4">
                    &quot;keywords&quot;: [&quot;SEO&quot;, &quot;content&quot;]
                  </div>
                  <div className="text-muted-foreground">&#125;</div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="text-sm text-muted-foreground mb-2">
                  {t.generated}
                </div>
                <div className="space-y-3">
                  {/* todo */}
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted/60 rounded w-full"></div>
                  <div className="h-3 bg-muted/60 rounded w-5/6"></div>
                  <div className="h-3 bg-muted/60 rounded w-4/5"></div>
                </div>
                <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {t.result}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
