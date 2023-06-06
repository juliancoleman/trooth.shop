import cn from "classnames";

import { nunitoSansBold } from "@/config/fonts";
import { HeroAction } from "./HeroAction";
import { ProductAction } from "./ProductAction";

type ToothPowderHeroProps = {
  variant: "onlight" | "ondark";
};

function renderHero(type: ToothPowderHeroProps["variant"]) {
  switch (type) {
    case "onlight":
      return <div className="absolute inset-0 h-[80vh] w-full bg-hero-light" />;
    case "ondark":
      return <div className="absolute inset-0 h-[80vh] w-full bg-hero-dark" />;
  }
}

export const ToothPowderHero = ({
  variant = "ondark",
}: ToothPowderHeroProps) => (
  <section className={cn("-mt-16 h-[calc(80vh_-_64px)]")}>
    {renderHero(variant)}

    <header
      className={cn(
        "sticky top-0 mx-auto mt-16 max-w-[1080px] transition-colors",
        {
          "text-white": variant === "ondark",
          "text-[#333]": variant === "onlight",
        },
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className={cn(nunitoSansBold.className, "text-base")}>
          Charcoal Tooth Powder
        </h1>

        <nav className="flex items-center gap-3">
          <ProductAction variant={variant} href="#overview">
            Overview
          </ProductAction>
          <ProductAction variant={variant} href="#ingredients">
            Ingredients
          </ProductAction>
          <ProductAction variant={variant} href="#how-to-use">
            How to use
          </ProductAction>
          <HeroAction variant="primary" size="sm" href="#">
            Buy now
          </HeroAction>
        </nav>
      </div>
    </header>
  </section>
);
