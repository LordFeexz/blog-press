import { LANG, LANGS } from "@/enums/global";
import type { PageProps } from "@/interfaces/component";
import HomePage from "@/modules/home";
import type { Metadata } from "next";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return <HomePage lang={lang} />;
}

export const dynamic = "force-static";

export const revalidate = false;

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { DOMAIN } = process.env;
  const { lang } = await params;
  const description =
    lang === LANG.ID
      ? "Gabung dengan Daftar Menunggu Blog Press"
      : "Join the Blog Press Waitlist";

  return {
    title: "Early Bird",
    description,
    openGraph: {
      title: "Early Bird",
      description,
      url: `${DOMAIN}/${lang}`,
      type: "website",
      siteName: "Apply Mate",
      locale: lang,
      alternateLocale: ["en-US", "id-ID"],
      countryName: "Indonesia",
      images: {
        type: "image/png",
        url: `${DOMAIN}/og/${lang}/early-bird.png`,
        alt: "early bird",
      },
    },
    keywords: [
      "early bird",
      "early bird pricing",
      "early bird special",
      "early bird offer",
      "early bird discount",
      "early bird discount offer",
      "blog press early bird",
      "blog press early bird offer",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: `${process.env.DOMAIN}/${lang}`,
      languages: {
        "en-US": `${process.env.DOMAIN}/en`,
        "id-ID": `${process.env.DOMAIN}/id`,
      },
    },
  };
}
