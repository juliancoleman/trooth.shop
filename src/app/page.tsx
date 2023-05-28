import { type Metadata } from "next";

import { AppBar } from "@/components/AppBar";
import { HomeHero } from "@/components/HomeHero";

export const metadata: Metadata = {
  title: "Trooth | Shop",
};

export default function() {
  return (
    <>
      <AppBar />
      <HomeHero />
    </>
  );
}
