import { LANG } from "@/enums/global";

export interface FooterDictionary {
  desc: string;
  product: string;
  company: string;
  privacy: string;
  terms: string;
}

const FOOTER_DICTIONARY: Record<LANG, FooterDictionary> = {
  [LANG.EN]: {
    desc: "Empowering businesses to scale their content strategy with AI-powered blog generation. Focus on what matters while we handle your content.",
    product: "Product",
    company: "Company",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
  },
  [LANG.ID]: {
    desc: "Membantu bisnis untuk mengembangkan strategi konten mereka dengan blog yang dihasilkan oleh AI. Fokus pada apa yang penting, dan kami akan menangani konten Anda.",
    product: "Produk",
    company: "Perusahaan",
    privacy: "Privasi Penggunaan",
    terms: "Syarat dan Ketentuan",
  },
};

export const getFooterDictionary = (lang: LANG) =>
  FOOTER_DICTIONARY[lang] ?? FOOTER_DICTIONARY[LANG.EN];
