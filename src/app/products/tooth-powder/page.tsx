"use client";

import { useCallback, useState } from "react";

import { AppBar } from "@/components/AppBar";
import { ToothPowderHero } from "@/components/ToothPowderHero";

export default function () {
  const [theme, setTheme] = useState<"ondark" | "onlight">("ondark");

  const handleChangeTheme = useCallback((t: "ondark" | "onlight") => {
    setTheme(t);
  }, []);

  return (
    <>
      <AppBar variant={theme} />
      <ToothPowderHero variant={theme} handleChange={handleChangeTheme} />
    </>
  );
}
