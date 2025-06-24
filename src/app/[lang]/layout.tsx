import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Root from "@/components/layouts/root";
import { LANG } from "@/enums/global";
import type { LayoutProps } from "@/interfaces/component";
import type { Metadata } from "next";

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;

  return (
    <Root lang={lang}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main
          id="main-content"
          className="flex-1 py-4 px-4 relative overflow-hidden"
        >
          {children}
        </main>
        <Footer lang={lang} />
      </div>
    </Root>
  );
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const template =
    lang === LANG.ID
      ? `%s | Tingkatkan SEO Anda dengan Konten Blog yang Dibuat oleh AI`
      : `%s | Boost Your SEO with AI-Powered Blog Content`;
  const description =
    lang === LANG.ID
      ? "Dapatkan artikel blog berkualitas tinggi dan SEO-optimized dengan cepat melalui API kami. Tidak perlu waktu lama untuk membuat konten konten - hanya hasil."
      : "Get high-quality, SEO-optimized blog articles instantly through our API. No more time-consuming content creation - just results.";

  return {
    title: {
      default: "Blog Press",
      template,
    },
    description,
    authors: [
      {
        name: "Ananda Fiqri",
        url: "https://ananda-fiqri-personal-website.vercel.app",
      },
      {
        name: "Cintara Surya Elidanto",
        url: "https://www.linkedin.com/in/cintarasuryaelidanto/",
      },
    ],
    applicationName: "Blog Press",
    robots: {
      index: true,
    },
    publisher: "Blog Press",
  };
}
