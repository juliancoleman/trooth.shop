import { type Metadata } from "next";

import { AppBar } from "@/components/AppBar";
import { HomeHero } from "@/components/HomeHero";
import { WhyTrooth } from "@/components/WhyTrooth";
import { Products } from "@/components/Products";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trooth | Shop",
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
