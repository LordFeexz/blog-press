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
  researchingText: string;
  loadingText: string;
  idleTitle: string;
  buttonText: string;
  generatedContent: {
    title: string;
    description: string;
  };
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
      "Our AI-powered API generates high-quality, SEO-optimized blog articles tailored to your needs. No more long content creation times - just results.",
    apiRequests: "API Request",
    generated: "Generated Content",
    result: "SEO Optimized & Ready to Publish",
    researchingText: "Searching for relevant sources & topics...",
    loadingText: "Analyzing & creating content...",
    idleTitle: "Click to see the AI magic",
    buttonText: "Create Content",
    generatedContent: {
      title:
        "It's No Longer About Keywords, But Trust: Dissecting the DNA of SEO Content in the Google E-E-A-T Era",
      description:
        "Remember the days when 'SEO optimization' meant stuffing keywords into every paragraph until the writing felt as stiff as a robot? We've all been there. Trying to please Google's algorithm while hoping human readers wouldn't run away. The good news: that era is officially over.\n\nGoogle is no longer 'naive'. The search engine has evolved into an entity obsessed with one thing: user satisfaction. To achieve this, it no longer just counts keywords, but measures 'trust'. This is where the new DNA of modern SEO content is born, known as E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).\n\nThis isn't just a technical acronym; it's a fundamental set of questions for your content:\n\n- **Experience:** Have you actually done or experienced what you're writing about?\n- **Expertise:** Are you a genuine expert in this field?\n- **Authoritativeness:** Do others (other experts) recognize you as a credible source?\n- **Trustworthiness:** Can readers trust you, your site, and the information you provide?\n\nSo, what does this mean for your blog articles, case studies, or landing pages? It means the game has changed. It's no longer about scattering keywords, but about weaving evidence, building authentic narratives, presenting data, and showing, not just telling, that you know what you're talking about. Your content is no longer just bait for Google's bots, but a digital asset that builds long-term reputation and trust. This article is your practical guide to doing just that.",
    },
  },
  [LANG.ID]: {
    badge: "Solusi Konten",
    title: "Ubah Kebutuhan Anda Menjadi Konten Siap Pakai",
    subtitle:
      "API kami yang digunakan AI menghasilkan artikel blog berkualitas tinggi dan SEO-optimized sesuai dengan kebutuhan Anda. Tidak perlu waktu lama untuk membuat konten konten - hanya hasil.",
    apiRequests: "Request API",
    generated: "Konten yang Dibuat",
    result: 'SEO Optimal & Siap Publikasi',
    researchingText: 'Mencari sumber & topik relevan...',
    loadingText: 'Menganalisis & membuat konten...',
    idleTitle: "Klik untuk melihat keajaiban AI",
    buttonText: "Buat Konten",
    generatedContent: {
      title:
        'Bukan Lagi Soal Keyword, Tapi Kepercayaan: Membedah DNA Konten SEO di Era Google E-E-A-T',
      description:
        "Ingat masa-masa di mana 'optimasi SEO' berarti menyebar keyword di setiap paragraf sampai tulisan terasa kaku seperti robot? Kita semua pernah di sana. Berusaha menyenangkan algoritma Google sambil berharap pembaca manusia tidak kabur. Kabar baiknya: masa itu sudah resmi berakhir.\n\nGoogle tidak lagi 'bodoh'. Mesin pencari ini telah berevolusi menjadi entitas yang terobsesi pada satu hal: kepuasan pengguna. Untuk itu, mereka tidak lagi hanya menghitung keyword, tapi mengukur 'kepercayaan'. Di sinilah DNA baru konten SEO modern lahir, yang dikenal sebagai E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).\n\nIni bukan sekadar akronim teknis, ini adalah pertanyaan fundamental untuk konten Anda:\n\n- **Experience:** Apakah Anda benar-benar pernah melakukan atau mengalami apa yang Anda tulis?\n- **Expertise:** Apakah Anda benar-benar seorang ahli di bidang ini?\n- **Authoritativeness:** Apakah orang lain (para ahli lain) mengakui Anda sebagai sumber yang kredibel?\n- **Trustworthiness:** Bisakah pembaca mempercayai Anda, situs Anda, dan informasi yang Anda berikan?\n\nJadi, apa artinya ini untuk artikel blog, studi kasus, atau landing page Anda? Artinya, permainan telah berubah. Ini bukan lagi tentang menabur keyword, tapi tentang menenun bukti, membangun narasi otentik, menyajikan data, dan menunjukkan, bukan hanya mengatakan, bahwa Anda tahu apa yang Anda bicarakan. Konten Anda bukan lagi sekadar umpan untuk robot Google, melainkan aset digital yang membangun reputasi dan kepercayaan jangka panjang. Artikel ini adalah panduan praktis Anda untuk melakukannya.",
    },
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
