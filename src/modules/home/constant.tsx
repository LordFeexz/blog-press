import {
  AlertCircle,
  BarChart3,
  Clock,
  Code,
  DollarSign,
  Globe,
  Rocket,
  Search,
  Shield,
  Sparkles,
  TrendingDown,
  Zap,
} from "lucide-react";
import type { ProblemCardProps } from "./components/common/problem-card";
import type { FeatureCardProps } from "./components/common/feature-card";

export const PROBLEM_EN: ProblemCardProps[] = [
  {
    icon: <Clock className="w-6 h-6 text-destructive" />,
    title: "Time-Consuming Content Creation",
    description:
      "Writing quality blog posts takes hours that you don't have, pulling you away from core business activities.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-destructive" />,
    title: "Expensive Content Agencies",
    description:
      "Hiring content agencies or freelancers is costly and often inconsistent in quality and delivery timelines.",
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-destructive" />,
    title: "Poor SEO Performance",
    description:
      "Without regular, optimized content, your website struggles to rank and attract organic traffic.",
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-destructive" />,
    title: "Inconsistent Publishing",
    description:
      "Irregular posting schedules hurt your SEO efforts and audience engagement over time.",
  },
];

export const PROBLEM_ID: ProblemCardProps[] = [
  {
    icon: <Clock className="w-6 h-6 text-destructive" />,
    title: "Waktu Terlalu Lama Untuk Membuat Konten Konten",
    description:
      "Menulis artikel blog berkualitas tinggi membutuhkan waktu yang lama yang Anda tidak memiliki, menyebabkan Anda berpindah dari aktivitas utama bisnis Anda.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-destructive" />,
    title: "Agensi Konten atau Freelancer",
    description:
      "Menggunakan agensi konten atau freelancer adalah biaya yang mahal dan seringkali tidak teratur dalam kualitas dan jadwal pengiriman.",
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-destructive" />,
    title: "Performa SEO yang Buruk",
    description:
      "Tanpa konten yang teratur dan dioptimalkan, situs web Anda sulit untuk mendapatkan peringkat dan menarik pengunjung organik.",
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-destructive" />,
    title: "Postingan yang Tidak Teratur",
    description:
      "Jadwal posting yang tidak teratur menghambat usaha SEO Anda dan penggunaan website Anda selama beberapa waktu.",
  },
];

export const BENEFITS_EN = [
  "Get SEO-optimized articles in minutes, not hours",
  "Scale your content production without hiring content agencies",
  "Maintain consistent publishing schedules",
  "Focus on your business while we handle content",
];

export const BENEFITS_ID = [
  "Dapatkan artikel SEO-optimized dalam menit, bukan jam",
  "Kembangkan produksi konten Anda tanpa menyewa agensi konten",
  "Menjaga jadwal publikasi yang teratur",
  "Fokus pada bisnis Anda saat kami menangani konten",
];

export const SOLUTION_POINTS_EN = [
  {
    icon: <Zap className="w-4 h-4 mr-1 text-yellow-500" />,
    label: "Lightning fast",
  },
  {
    icon: <Rocket className="w-4 h-4 mr-1 text-blue-500" />,
    label: "Easy integration",
  },
];

export const SOLUTION_POINTS_ID = [
  {
    icon: <Zap className="w-4 h-4 mr-1 text-yellow-500" />,
    label: "Cepat",
  },
  {
    icon: <Rocket className="w-4 h-4 mr-1 text-blue-500" />,
    label: "Integrasi mudah",
  },
];

export const FEATURES_EN: FeatureCardProps[] = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Lightning Fast Generation",
    description:
      "Get high-quality articles in under 30 seconds with our optimized AI engine.",
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "SEO Optimized",
    description:
      "Every article is crafted with proper keyword density, meta descriptions, and structure.",
  },
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Simple API Integration",
    description:
      "RESTful API with comprehensive documentation. Get started in minutes, not hours.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Multi-Language Support",
    description:
      "Generate content in 15+ languages to reach global audiences effectively.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Analytics & Insights",
    description:
      "Track content performance and get insights on what works best for your audience.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Plagiarism-Free Content",
    description:
      "All content is original and passes plagiarism checkers with 99%+ uniqueness.",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Automated Scheduling",
    description:
      "Set up automated content publishing schedules to maintain consistency.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Content Personalization",
    description:
      "Tailor content to your brand voice and industry-specific terminology.",
  },
];

export const FEATURES_ID: FeatureCardProps[] = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Generasi Cepat",
    description:
      "Dapatkan artikel dengan kualitas tinggi dalam waktu 30 detik dengan mesin AI yang teroptimalkan.",
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "Optimasi SEO",
    description:
      "Setiap artikel dibuat dengan konsistensi kata kunci, deskripsi meta, dan struktur yang tepat.",
  },
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Integrasi API Sederhana",
    description:
      "API REST dengan dokumentasi lengkap. Mulai dalam beberapa menit, bukan jam.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Dukungan Bahasa",
    description:
      "Dapatkan konten dalam 15+ bahasa untuk mencapai audiens global dengan efektif.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Insight & Analisis",
    description:
      "Lacak performa konten dan dapatkan insight tentang apa yang terbaik untuk audiens Anda.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Konten Tidak Plagiat",
    description:
      "Semua konten asli dan telah dilepas dari pengecekan plagiat dengan keunikan 99%+.",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Jadwal Otomatis",
    description:
      "Atur jadwal publikasi konten secara otomatis untuk menjaga konsistensi.",
  },
];

export const PERKS_EN = [
  "Early access to Blog Press API",
  "50% discount on first 3 months",
  "Priority customer support",
  "Free content strategy consultation",
];

export const PERKS_ID = [
  "Akses awal untuk API Blog Press",
  "Diskon 50% pada 3 bulan pertama",
  "Dukungan pelanggan prioritas",
  "Konsultasi strategi konten gratis",
];

export const WAITLIST_FORM_ID = "waitlist-form";

export const REFERAL_CODE_PARAMS = "rc";
