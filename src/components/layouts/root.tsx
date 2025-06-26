import type { ChildrenProps, LangProps } from "@/interfaces/component";
import Loader from "nextjs-toploader";
import "@/styles/globals.css";
import { cn } from "@/libs/utils";
import { sora } from "@/libs/font";
import AppThemeProvider from "../providers/theme";
import { Toaster } from "../ui/sonner";

export default function Root({ children, lang }: ChildrenProps & LangProps) {
  return (
    <html
      lang={lang}
      suppressContentEditableWarning
      suppressHydrationWarning
      className="notranslate scroll-smooth"
      translate="no"
    >
      <body
        suppressHydrationWarning
        className={cn(
          "text-neutral-900 dark:text-neutral-300 antialiased",
          sora.className,
          sora.variable,
          "scroll-smooth min-h-svh",
          "bg-background"
        )}
      >
        <Loader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <AppThemeProvider>
          {children}
          <Toaster />
        </AppThemeProvider>
      </body>
    </html>
  );
}
