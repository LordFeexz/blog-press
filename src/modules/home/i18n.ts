import { LANG } from "@/enums/global";

export interface HeroDictionary {
  badge: string;
  title: string;
  description: string;
  cta: string;
  apiIntegrationTitle: string;
}

export interface ProblemCardDictionary {
  title: string;
  subtitle: string;
  question: string;
}

export interface SolutionDictionary {
  title: string;
  subtitle: string;
  badge: string;
  apiRequests: string;
  generated: string;
  result: string;
}

export interface FeatureDictionary {
  title: string;
  subtitle: string;
  manyOthers: string;
}

export interface WaitlistDictionary {
  badge: string;
  title: string;
  subtitle: string;
  earlyBirdBadge: string;
  secureSpot: string;
  benefitTitle: string;
  limitedOffer: string;
  limitedOfferDesc: string;
}

export interface FormWaitlistDictionary {
  marketingLabel: string;
  btnText: string;
  company: string;
}

const HERO_DICTIONARY: Record<LANG, HeroDictionary> = {
  [LANG.EN]: {
    badge: " Early Access Available",
    title: "Boost Your SEO with AI-Powered Blog Content",
    description:
      "Get high-quality, SEO-optimized blog articles instantly through our API. No more time-consuming content creation - just results.",
    cta: "Be the first to get access. No spam, ever.",
    apiIntegrationTitle: "API Integration",
  },
  [LANG.ID]: {
    badge: "Akses Awal Tersedia",
    title: "Tingkatkan SEO Anda dengan Konten Blog yang Dibuat oleh AI",
    description:
      "Dapatkan artikel blog berkualitas tinggi dan SEO-optimized dengan cepat melalui API kami. Tidak perlu waktu lama untuk membuat konten konten - hanya hasil.",
    cta: "Jadi pertama yang mendapatkan akses. Tidak ada spam, selamanya.",
    apiIntegrationTitle: "Integrasi API",
  },
};

const PROBLEM_DICTIONARY: Record<LANG, ProblemCardDictionary> = {
  [LANG.EN]: {
    title: "The Content Creation Challenge",
    subtitle:
      "Website owners face the same struggle: they know content is crucial for SEO, but creating it consistently is nearly impossible.",
    question: "Sound familiar? You're not alone.",
  },
  [LANG.ID]: {
    title: "Permasalahan Pembuatan Konten",
    subtitle:
      "Pemilik situs web menghadapi kesulitan yang sama: mereka tahu bahwa konten penting untuk SEO, tetapi membuatnya secara teratur adalah hampir tidak mungkin.",
    question: "Kedengarannya serupa? Kamu tidak sendirian.",
  },
};

const SOLUTION_DICTIONARY: Record<LANG, SolutionDictionary> = {
  [LANG.EN]: {
    badge: "The Solution",
    title: "Blog Press API: Your Content Creation Autopilot",
    subtitle:
      "Our AI-powered API generates high-quality, SEO-optimized blog articles tailored to your niche. Simply make an API call and get publication-ready content instantly.",
    apiRequests: "API Requests",
    generated: "Generated Article",
    result: "SEO Optimized & Ready to Publish",
  },
  [LANG.ID]: {
    badge: "Solusi",
    title: "Blog Press API: Autopilot Pembuatan Konten Anda",
    subtitle:
      "API kami yang digunakan AI menghasilkan artikel blog berkualitas tinggi dan SEO-optimized sesuai dengan kebutuhan Anda. Tidak perlu waktu lama untuk membuat konten konten - hanya hasil.",
    apiRequests: "Request API",
    generated: "Konten yang Dibuat",
    result: "SEO Optimized & Ready untuk di Publish",
  },
};

const FEATURE_DICTIONARY: Record<LANG, FeatureDictionary> = {
  [LANG.EN]: {
    title: "Powerful Features for Modern Content Needs",
    subtitle:
      "Everything you need to scale your content strategy and dominate search rankings.",
    manyOthers: "And many more features coming soon...",
  },
  [LANG.ID]: {
    title: "Fitur yang Mampu Memenuhi Kebutuhan Konten Modern",
    subtitle:
      "Semua yang Anda butuhkan untuk mengembangkan strategi konten Anda dan memimpin peringkat pencarian.",
    manyOthers: "Dan banyak lagi fitur yang akan datang segera...",
  },
};

const WAITLIST_DICTIONARY: Record<LANG, WaitlistDictionary> = {
  [LANG.EN]: {
    badge: "Early Bird Special",
    title: "Join the Blog Press Waitlist",
    subtitle:
      "Be among the first to experience the future of content creation. Limited early access spots available.",
    earlyBirdBadge: "Early Bird Pricing",
    secureSpot: "Secure Your Spot",
    benefitTitle: "Early Bird Benefits",
    limitedOffer: "Limited Time Offer",
    limitedOfferDesc:
      "The first 100 users get lifetime access to our premium features at early bird pricing. Don't miss out!",
  },
  [LANG.ID]: {
    badge: "Harga Awal Terbatas",
    title: "Gabung dengan Daftar Menunggu Blog Press",
    subtitle:
      "Jadi salah satu yang pertama untuk mengalami masa depan pembuatan konten. Spot awal terbatas yang tersedia.",
    earlyBirdBadge: "Harga Awal Terbatas",
    secureSpot: "Lindungi Spot Anda",
    benefitTitle: "Manfaat Harga Awal Terbatas",
    limitedOffer: "Penawaran Waktu Terbatas",
    limitedOfferDesc:
      "100 pengguna pertama mendapatkan akses selamanya kepada fitur premium kami dengan harga awal terbatas. Jangan lewatkan!",
  },
};

const WAITLIST_FORM_DICTIONARY: Record<LANG, FormWaitlistDictionary> = {
  [LANG.EN]: {
    company: "Company",
    marketingLabel: " I'd like to receive marketing updates and content tips",
    btnText: "Join the Waitlist",
  },
  [LANG.ID]: {
    company: "Perusahaan",
    marketingLabel: "Saya ingin menerima pembaruan marketing dan tips konten",
    btnText: "Gabung dengan Daftar Menunggu",
  },
};

export const getHeroDictionary = (lang: LANG) =>
  HERO_DICTIONARY[lang] ?? HERO_DICTIONARY[LANG.EN];

export const getProblemDictionary = (lang: LANG) =>
  PROBLEM_DICTIONARY[lang] ?? PROBLEM_DICTIONARY[LANG.EN];

export const getSolutionDictionary = (lang: LANG) =>
  SOLUTION_DICTIONARY[lang] ?? SOLUTION_DICTIONARY[LANG.EN];

export const getFeatureDictionary = (lang: LANG) =>
  FEATURE_DICTIONARY[lang] ?? FEATURE_DICTIONARY[LANG.EN];

export const getWaitlistDictionary = (lang: LANG) =>
  WAITLIST_DICTIONARY[lang] ?? WAITLIST_DICTIONARY[LANG.EN];

export const getWaitlistFormDictionary = (lang: LANG) =>
  WAITLIST_FORM_DICTIONARY[lang] ?? WAITLIST_FORM_DICTIONARY[LANG.EN];
