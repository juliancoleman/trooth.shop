import { type Metadata } from "next";

import { AppBar } from "@/components/AppBar";
import { HomeHero } from "@/components/HomeHero";
import { WhyTrooth } from "@/components/WhyTrooth";
import { Products } from "@/components/Products";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trooth | Shop",
  description:
    "Buy our fluoride-free and non-toxic tooth powder and other products safe enough for toddlers to use.",
  openGraph: {
    siteName: "Trooth Shop",
    url: "https://trooth.shop/",
    title: "Trooth Shop | All-Natural and Non-Toxic Health & Wellness Products",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trooth_shop",
    title: "Trooth Shop | All-Natural and Non-Toxic Health & Wellness Products",
    description:
      "Buy our fluoride-free and non-toxic tooth powder and other products safe enough for toddlers to use.",
  },
};

export default function () {
  return (
    <>
      <AppBar />
      <HomeHero />
      <WhyTrooth />
      {/* @ts-expect-error Async Server Component */}
      <Products />
      <Subscribe />
      <Footer />
    </>
  );
}
