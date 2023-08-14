import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trooth Shop | Spearmint Mouth Rinse + Charcoal Tooth Powder Bundle",
  description: "Shop all-natural and fluoride-free oral care products.",
  openGraph: {
    siteName: "Trooth Shop",
    url: "https://trooth.shop/products/spearmint-mouth-rinse",
    title: "Trooth's Spearmint Mouth Rinse + Charcoal Tooth Powder bundle",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trooth_shop",
    title: "Trooth's Spearmint Mouth Rinse + Charcoal Tooth Powder Bundle",
    description: "Shop all-natural and fluoride-free oral care products.",
  },
};

export default function ({ children }) {
  return children;
}
