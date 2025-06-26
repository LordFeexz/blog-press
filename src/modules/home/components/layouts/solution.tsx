'use client';

import { LANG } from "@/enums/global";
import type { LangProps } from "@/interfaces/component";
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Zap } from "lucide-react";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  BENEFITS_EN,
  BENEFITS_ID,
  SOLUTION_POINTS_EN,
  SOLUTION_POINTS_ID,
} from "../../constant";
import { getSolutionDictionary, type SolutionDictionary } from "../../i18n";
import SolutionPointCard from "../common/solution-point-card";

interface ContentProps {
  content: SolutionDictionary['generatedContent'];
  onFinished: () => void;
}

const TypewriterContent = ({ content, onFinished }: ContentProps) => {
  const [isTitleFinished, setIsTitleFinished] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="space-y-4 min-h-[300px]">
      {isClient ? (
        <>
          <h3 className="text-lg font-semibold">
            <TypeAnimation
              sequence={[content.title, 500, () => setIsTitleFinished(true)]}
              wrapper="span"
              cursor={!isTitleFinished}
              repeat={0}
              speed={99}
            />
          </h3>
          {isTitleFinished && (
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
              <TypeAnimation
                sequence={[content.description, 1000, onFinished]}
                wrapper="div"
                cursor={true}
                repeat={0}
                style={{ whiteSpace: 'pre-line' }}
                speed={99}
              />
            </div>
          )}
        </>
      ) : (
        <h3 className="text-lg font-semibold">&nbsp;</h3>
      )}
    </div>
  );
};

const StaticContent = ({ content }: Omit<ContentProps, 'onFinished'>) => {
  // Simple regex to handle bolding, avoiding complex library conflicts.
  const createHtml = (text: string) => ({
    __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
  });

  return (
    <div className="space-y-4 min-h-[300px]">
      <h3 className="text-lg font-semibold">{content.title}</h3>
      <div
        className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground"
        style={{ whiteSpace: 'pre-line' }} // This is the key fix
        dangerouslySetInnerHTML={createHtml(content.description)}
      />
    </div>
  );
};

const LoadingState = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
    <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-primary"></div>
    <div className="mt-4 text-muted-foreground">{text}</div>
  </div>
);

export default function Solution({ lang }: LangProps) {
  const t = getSolutionDictionary(lang);
  const [uiState, setUiState] = useState<'idle' | 'researching' | 'loading' | 'typing' | 'finished'>('idle');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedState = localStorage.getItem('contentGenerated');
      if (storedState === 'true') {
        setUiState('finished');
      }
    }
  }, [isClient]);

  const handleGenerate = () => {
    setUiState('researching');
    setTimeout(() => {
      setUiState('loading');
      setTimeout(() => {
        setUiState('typing');
      }, 1500);
    }, 1500);
  };

  const handleTypingFinish = () => {
    localStorage.setItem('contentGenerated', 'true');
    setUiState('finished');
  };

  const renderContent = () => {
    switch (uiState) {
      case 'researching':
        return <LoadingState text={t.researchingText} />;
      case 'loading':
        return <LoadingState text={t.loadingText} />;
      case 'typing':
        return <TypewriterContent content={t.generatedContent} onFinished={handleTypingFinish} />;
      case 'finished':
        return (
          <>
            <StaticContent content={t.generatedContent} />
            <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t.result}
            </div>
          </>
        );
      case 'idle':
      default:
        return (
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-muted rounded-lg min-h-[300px]">
            <div className="text-muted-foreground mb-4">{t.idleTitle}</div>
            <Button onClick={handleGenerate}>
              <Zap className="w-4 h-4 mr-2" />
              {t.buttonText}
            </Button>
          </div>
        );
    }
  };

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
                    &quot;keywords&quot;: [&quot;SEO&quot;, &quot;content&quot;],
                  </div>
                  <div className="ml-4">
                    &quot;fields&quot;: &#123;
                  </div>
                  <div className="ml-8">
                    &quot;title&quot;: &#123; &quot;maxChars&quot;: 100 &#125;,
                  </div>
                  <div className="ml-8">
                    &quot;description&quot;: &#123; &quot;maxChars&quot;: 1000 &#125;
                  </div>
                  <div className="ml-4">
                    &#125;,
                  </div>
                  <div className="ml-4">
                    &quot;autoResearch&quot;: true
                  </div>
                  <div className="text-muted-foreground">&#125;</div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="text-sm text-muted-foreground mb-2">
                  {t.generated}
                </div>
                {renderContent()}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
