import { type Metadata } from "next";

import { AppBar } from "@/components/AppBar";
import { HomeHero } from "@/components/HomeHero";
import { WhyTrooth } from "@/components/WhyTrooth";
import { Products } from "@/components/Products";

export const metadata: Metadata = {
  title: "Trooth | Shop",
};

export default function () {
  return (
    <>
      <AppBar />
      <HomeHero />
      <WhyTrooth />
      <Products />
    </>
  );
}
