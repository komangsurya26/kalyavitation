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
      slug: "flara",
      category: TemplateCategory.PREMIUM,
      cover: "/images/landing/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 100.000",
    },
    {
      id: 2,
      name: "Aurora | Premium",
      slug: "aurora",
      category: TemplateCategory.PREMIUM,
      cover: "/images/landing/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 150.000",
    },
    {
      id: 3,
      name: "Elena | Premium",
      slug: "elena",
      category: TemplateCategory.PREMIUM,
      cover: "/images/landing/hero5.webp",
      price: "Rp 0",
      originalPrice: "Rp 120.000",
    },
    {
      id: 4,
      name: "Sofia | Premium",
      slug: "sofia",
      category: TemplateCategory.PREMIUM,
      cover: "/images/landing/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 130.000",
    },
  ],
  adat: [
    {
      id: 1,
      name: "Jawa | Adat",
      slug: "jawa",
      category: TemplateCategory.ADAT,
      cover: "/images/landing/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 100.000",
    },
    {
      id: 2,
      name: "Bali | Adat",
      slug: "bali",
      category: TemplateCategory.ADAT,
      cover: "/images/landing/hero5.webp",
      price: "Rp 0",
      originalPrice: "Rp 120.000",
    },
    {
      id: 3,
      name: "Sunda | Adat",
      slug: "sunda",
      category: TemplateCategory.ADAT,
      cover: "/images/landing/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 110.000",
    },
    {
      id: 4,
      name: "Minang | Adat",
      slug: "minang",
      category: TemplateCategory.ADAT,
      cover: "/images/landing/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 140.000",
    },
  ],
  klasik: [
    {
      id: 1,
      name: "Vintage | Klasik",
      slug: "vintage",
      category: TemplateCategory.KLASIK,
      cover: "/images/landing/hero5.webp",
      price: "Rp 0",
      originalPrice: "Rp 100.000",
    },
    {
      id: 2,
      name: "Retro | Klasik",
      slug: "retro",
      category: TemplateCategory.KLASIK,
      cover: "/images/landing/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 90.000",
    },
    {
      id: 3,
      name: "Antique | Klasik",
      slug: "antique",
      category: TemplateCategory.KLASIK,
      cover: "/images/landing/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 110.000",
    },
  ],
  modern: [
    {
      id: 1,
      name: "Minimalist | Modern",
      slug: "minimalist",
      category: TemplateCategory.MODERN,
      cover: "/images/landing/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 100.000",
    },
    {
      id: 2,
      name: "Clean | Modern",
      slug: "clean",
      category: TemplateCategory.MODERN,
      cover: "/images/landing/hero2.webp",
      price: "Rp 0",
      originalPrice: "Rp 120.000",
    },
    {
      id: 3,
      name: "Sleek | Modern",
      slug: "sleek",
      category: TemplateCategory.MODERN,
      cover: "/images/landing/hero5.webp",
      price: "Rp 0",
      originalPrice: "Rp 130.000",
    },
    {
      id: 4,
      name: "Urban | Modern",
      slug: "urban",
      category: TemplateCategory.MODERN,
      cover: "/images/landing/hero1.webp",
      price: "Rp 0",
      originalPrice: "Rp 110.000",
    },
  ],
};
