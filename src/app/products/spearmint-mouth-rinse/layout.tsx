import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trooth Shop | Spearmint Mouth Rinse",
  description:
    "Shop all-natural and chemical-free mouth rinses safe enough for children to use.",
  openGraph: {
    siteName: "Trooth Shop",
    url: "https://trooth.shop/products/spearmint-mouth-rinse",
    title: "Trooth's Spearmint Mouth Rinse",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trooth+shop",
    title: "Trooth's Spearmint Mouth Rinse",
    description:
      "Shop all-natural and chemical-free mouth rinses safe enough for children to use.",
  },
};

export default function ({ children }) {
  return children;
}
