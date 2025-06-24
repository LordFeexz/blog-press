import type { LANG } from "@/enums/global";
import type { ReactNode } from "react";

export interface ChildrenProps {
  readonly children: ReactNode;
}

export interface LangProps {
  readonly lang: LANG;
}

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export type PageProps<
  params = Record<string, string>,
  searchParams = Record<string, string>
> = {
  params: Promise<params & { lang: LANG }>;
  searchParams: Promise<Partial<searchParams>>;
};

export type LayoutProps<T = {}> = ChildrenProps &
  Omit<PageProps, "searchParams"> &
  T;
