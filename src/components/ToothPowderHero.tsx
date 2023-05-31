"use client";

import cn from "classnames";

import { nunitoSansBold } from "@/config/fonts";

type ToothPowderHeroProps = {
  variant: "onlight" | "ondark";
  handleChange(t: ToothPowderHeroProps["variant"]): void;
};

export const ToothPowderHero = ({
  variant = "ondark",
  handleChange,
}: ToothPowderHeroProps) => (
  <section className="-mt-16 h-screen bg-hero-dark">
    <header className="sticky top-16 mx-auto flex max-w-[1080px] items-center justify-between px-6 py-3 text-white">
      <h1 className={cn(nunitoSansBold.className, "text-base")}>
        Charcoal Tooth Powder
      </h1>

      <form>
        <label htmlFor="ondark">
          <input
            type="radio"
            id="ondark"
            name="theme"
            value="ondark"
            checked={variant === "ondark"}
            onChange={() => handleChange("ondark")}
          />
          <span>Original</span>
        </label>

        <label htmlFor="onlight">
          <input
            type="radio"
            id="onlight"
            name="theme"
            value="onlight"
            checked={variant === "onlight"}
            onChange={() => handleChange("onlight")}
          />
          <span>Spearmint</span>
        </label>
      </form>
    </header>
  </section>
);
