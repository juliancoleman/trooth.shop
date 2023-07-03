"use client";

import cn from "classnames";
import {
  Grains,
  Plant,
  MaskHappy,
  Heart,
  HandCoins,
} from "@phosphor-icons/react";

import { ValueProp } from "./ValueProp";

const featureClasses =
  "bg-white/5 rounded-md !h-full auto-rows-max sm:py-4 sm:px-6";

export const ToothPowderFeatures = ({
  variant = "ondark",
}: {
  variant?: "ondark" | "onlight";
}) => (
  <section
    className={cn("px-6 py-24", {
      "bg-[#333]": variant === "ondark",
      "bg-trooth-primary-300": variant === "onlight",
    })}
    id="overview"
  >
    <div className="mx-auto mb-10 grid max-w-[1080px] gap-6 md:grid-cols-3">
      <ValueProp
        icon={<Grains />}
        title="Perfectly edible."
        description={`No fluoride, SLS, preservatives, harmful chemicals, or artificial flavors added. Only ${
          variant === "onlight" ? 6 : 5
        } all-natural, safe to swallow ingredients.`}
        variant={variant === "ondark" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "onlight",
        })}
      />
      <ValueProp
        icon={<Heart />}
        title="Perfectly healthy."
        description="Calcium, phosphorus, magnesium, and zinc play a critical role in bone health and help rebuild and remineralize tooth enamel."
        variant={variant === "ondark" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "onlight",
        })}
      />
      <ValueProp
        icon={<MaskHappy />}
        title="Perfectly gentle."
        description="Ultra-finely ground ingredients gently polish and remineralize your teeth without wearing away enamel, preserving the health and shine of your smile."
        variant={variant === "ondark" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "onlight",
        })}
      />
    </div>

    <div className="mx-auto grid max-w-[712px] gap-6 md:grid-cols-2">
      <ValueProp
        icon={<HandCoins />}
        title="Perfectly economical."
        description="Despite its premium ingredients, our tooth powder lasts up to 50% longer than a typical 3.4oz tube of toothpaste when brushing twice daily, offering excellent value for money."
        variant={variant === "ondark" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "onlight",
        })}
      />
      <ValueProp
        icon={<Plant />}
        title="Perfectly sustainable."
        description="All materials we use are made from recyclable material, making it a sustainable choice for a conscious consumer."
        variant={variant === "ondark" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "onlight",
        })}
      />
    </div>
  </section>
);
