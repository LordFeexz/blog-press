import type { LangProps } from "@/interfaces/component";
import { Code, Zap } from "lucide-react";
import { getHeroDictionary } from "../../i18n";
import ToWaitlistBtn from "../common/to-waitlist-btn";

export default function Hero({ lang }: LangProps) {
  const t = getHeroDictionary(lang);
  return (
    <section
      id="home-hero"
      className="relative min-h-screen flex items-center justify-center pt-16 hero-pattern"
    >
      <div className="absolute inset-0 overflow-hidden" role="banner">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <Zap className="w-4 h-4 mr-2" />
            {t.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">{t.title}</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            {t.description}
          </p>

          <article className="max-w-md mx-auto">
            <div className="flex justify-center items-center">
              <ToWaitlistBtn lang={lang} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.cta}</p>
          </article>

          <article className="max-w-2xl mx-auto mt-16">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="text-sm text-muted-foreground mb-4 flex items-center">
                <Code className="w-4 h-4 mr-2" />
                {t.apiIntegrationTitle}
              </div>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm text-left overflow-x-auto">
                <div className="text-green-600 dark:text-green-400">
                  POST /api/generate-article
                </div>
                <div className="text-muted-foreground mt-2">&#123;</div>
                <div className="ml-4 text-blue-600 dark:text-blue-400">
                  &quot;topic&quot;: &quot;Digital Marketing&quot;,
                </div>
                <div className="ml-4 text-blue-600 dark:text-blue-400">
                  &quot;keywords&quot;: [&quot;SEO&quot;, &quot;content&quot;],
                </div>
                <div className="ml-4 text-blue-600 dark:text-blue-400">
                  &quot;length&quot;: &quot;medium&quot;
                </div>
                <div className="text-muted-foreground">&#125;</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
