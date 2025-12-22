export enum TemplateCategory {
  PREMIUM = "premium",
  ADAT = "adat",
  KLASIK = "klasik",
  MODERN = "modern",
}

export interface Template {
  id: number;
  name: string;
  slug: string;
  cover?: string;
  category: TemplateCategory;
  price?: string;
  originalPrice?: string;
}

export const TEMPLATES: Record<string, Template[]> = {
  premium: [
    {
      id: 1,
      name: "Flara | Premium",
      slug: "flara-premium",
      category: TemplateCategory.PREMIUM,
      cover: "/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 100.000",
    },
    {
      id: 2,
      name: "Aurora | Premium",
      slug: "aurora-premium",
      category: TemplateCategory.PREMIUM,
      cover: "/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 150.000",
    },
    {
      id: 3,
      name: "Elena | Premium",
      slug: "elena-premium",
      category: TemplateCategory.PREMIUM,
      cover: "/hero5.webp",
      price: "Rp 0",
      originalPrice: "Rp 120.000",
    },
    {
      id: 4,
      name: "Sofia | Premium",
      slug: "sofia-premium",
      category: TemplateCategory.PREMIUM,
      cover: "/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 130.000",
    },
  ],
  adat: [
    {
      id: 1,
      name: "Jawa | Adat",
      slug: "jawa-adat",
      category: TemplateCategory.ADAT,
      cover: "/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 100.000",
    },
    {
      id: 2,
      name: "Bali | Adat",
      slug: "bali-adat",
      category: TemplateCategory.ADAT,
      cover: "/hero5.webp",
      price: "Rp 0",
      originalPrice: "Rp 120.000",
    },
    {
      id: 3,
      name: "Sunda | Adat",
      slug: "sunda-adat",
      category: TemplateCategory.ADAT,
      cover: "/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 110.000",
    },
    {
      id: 4,
      name: "Minang | Adat",
      slug: "minang-adat",
      category: TemplateCategory.ADAT,
      cover: "/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 140.000",
    },
  ],
  klasik: [
    {
      id: 1,
      name: "Vintage | Klasik",
      slug: "vintage-klasik",
      category: TemplateCategory.KLASIK,
      cover: "/hero5.webp",
      price: "Rp 0",
      originalPrice: "Rp 100.000",
    },
    {
      id: 2,
      name: "Retro | Klasik",
      slug: "retro-klasik",
      category: TemplateCategory.KLASIK,
      cover: "/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 90.000",
    },
    {
      id: 3,
      name: "Antique | Klasik",
      slug: "antique-klasik",
      category: TemplateCategory.KLASIK,
      cover: "/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 110.000",
    },
  ],
  modern: [
    {
      id: 1,
      name: "Minimalist | Modern",
      slug: "minimalist-modern",
      category: TemplateCategory.MODERN,
      cover: "/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 100.000",
    },
    {
      id: 2,
      name: "Clean | Modern",
      slug: "clean-modern",
      category: TemplateCategory.MODERN,
      cover: "/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 120.000",
    },
    {
      id: 3,
      name: "Sleek | Modern",
      slug: "sleek-modern",
      category: TemplateCategory.MODERN,
      cover: "/hero5.webp",
      price: "Rp 0",
      originalPrice: "Rp 130.000",
    },
    {
      id: 4,
      name: "Urban | Modern",
      slug: "urban-modern",
      category: TemplateCategory.MODERN,
      cover: "/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 110.000",
    },
  ],
};
