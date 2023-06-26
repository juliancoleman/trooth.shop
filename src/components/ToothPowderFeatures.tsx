"use client";
import {
  Grains,
  Plant,
  MaskHappy,
  Heart,
  HandCoins,
} from "@phosphor-icons/react";

import { ValueProp } from "./ValueProp";

export const ToothPowderFeatures = () => (
  <section className="bg-[#333] px-6 py-24" id="overview">
    <div className="mx-auto mb-10 grid max-w-[1080px] gap-6 md:grid-cols-3">
      <ValueProp
        icon={<Grains />}
        title="Perfectly edible."
        description="No fluoride, SLS, preservatives, harmful chemicals, or artificial flavors added. Only 5 all-natural, safe to swallow ingredients."
        variant="onlight"
      />
      <ValueProp
        icon={<Heart />}
        title="Perfectly healthy."
        description="Calcium, phosphorus, magnesium, and zinc play a critical role in bone health and help rebuild and remineralize tooth enamel."
        variant="onlight"
      />
      <ValueProp
        icon={<MaskHappy />}
        title="Perfectly gentle."
        description="Ultra-finely ground ingredients gently polish and remineralize your teeth without wearing away enamel, preserving the health and shine of your smile."
        variant="onlight"
      />
    </div>

    <div className="mx-auto grid max-w-[712px] gap-6 pb-24 md:grid-cols-2">
      <ValueProp
        icon={<HandCoins />}
        title="Perfectly economical."
        description="Despite its premium ingredients, our tooth powder lasts up to 50% longer than a typical 3.4oz tube of toothpaste when brushing twice daily, offering excellent value for money."
        variant="onlight"
      />
      <ValueProp
        icon={<Plant />}
        title="Perfectly sustainable."
        description="All materials we use are made from recyclable material, making it a sustainable choice for a conscious consumer."
        variant="onlight"
      />
    </div>
  </section>
);
