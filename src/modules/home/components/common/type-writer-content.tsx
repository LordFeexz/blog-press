"use client";

import useMount from "@/hooks/use-mount";
import type { SolutionDictionary } from "../../i18n";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export interface ContentProps {
  content: SolutionDictionary["generatedContent"];
  onFinished: () => void;
}

export default function TypewriterContent({
  content,
  onFinished,
}: ContentProps) {
  const [isTitleFinished, setIsTitleFinished] = useState(false);
  const isClient = useMount();

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById("generated-content");
    if (!container || !contentRef.current) return;

    const observer = new MutationObserver(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    });

    observer.observe(contentRef.current, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-4 min-h-[300px]" ref={contentRef}>
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
                style={{ whiteSpace: "pre-line" }}
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
}
