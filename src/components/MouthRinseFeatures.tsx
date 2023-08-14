"use client";

import cn from "classnames";
import { Grains, Plant, MaskHappy, Broom } from "@phosphor-icons/react";

import { ValueProp } from "./ValueProp";

const featureClasses =
  "bg-white/5 rounded-md !h-full auto-rows-max sm:py-4 sm:px-6 px-3";
const rinseDescriptions = {
  spearmint:
    "Our specially formulated spearmint mouth rinse is the perfect chaser to our beloved Tooth Powder, or can be used on its own right before your social events",
  cinnamon:
    "Cinnamon keeps bacterial overgrowth and bad breath at bay. It can be used as after each brushing, or on its own right before your social events",
};

export const MouthRinseFeatures = ({
  variant = "spearmint",
}: {
  variant: "cinnamon" | "spearmint";
}) => (
  <section
    className={cn("px-6 py-24", {
      "bg-[#333]": variant === "cinnamon",
      "bg-trooth-primary-300": variant === "spearmint",
    })}
    id="overview"
  >
    <div className="mx-auto mb-6 grid max-w-[1080px] gap-6 md:grid-cols-3">
      <ValueProp
        icon={<MaskHappy />}
        title="Freshens breath."
        description={rinseDescriptions[variant]}
        variant={variant === "cinnamon" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "spearmint",
        })}
      />
      <ValueProp
        icon={<Broom />}
        title="Antiseptic."
        description="We use all-natural ingredients that rip through bad-breath causing bacteria and reduce inflammation."
        variant={variant === "cinnamon" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "spearmint",
        })}
      />
      <ValueProp
        icon={<Grains />}
        title="Only highest quality ingredients."
        description="No harsh chemicals, additives, sugars, or sugar substitutes. Only real ingredients you can grow in your own back yard."
        variant={variant === "cinnamon" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "spearmint",
        })}
      />
    </div>

    <div className="mx-auto grid max-w-[344px] gap-6 md:grid-cols-1">
      <ValueProp
        icon={<Plant />}
        title="Perfectly sustainable."
        description="Our food grade PET plastic bottles are 100% BPA-free, recyclable, and are great for reuse once you're all out."
        variant={variant === "cinnamon" ? "onlight" : undefined}
        className={cn(featureClasses, {
          "bg-white/50": variant === "spearmint",
        })}
      />
    </div>
  </section>
);
