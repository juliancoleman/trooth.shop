"use client";

import { ValueProp } from "./ValueProp";

export const ToothPowderFeatures = () => (
  <section className="bg-[#333] px-6">
    <div className="mx-auto grid max-w-[1080px] gap-6 md:grid-cols-4 pb-24">
      <ValueProp
        title="Perfectly edible."
        description="No fluoride, SLS, preservatives, harmful chemicals, or artificial flavors added. Only 5 all-natural, safe to swallow ingredients."
        variant="onlight"
      />
      <ValueProp
        title="Perfectly sustainable."
        description="All materials we use are made from recyclable material, making it a sustainable choice for a conscious consumer."
        variant="onlight"
      />
      <ValueProp
        title="Perfectly gentle."
        description="Ultra-finely ground eggshells, activated coconut charcoal, and baking soda gently and remineralize your teeth without wearing away enamel, preserving the health and shine of your smile."
        variant="onlight"
      />
      <ValueProp
        title="Perfectly healthy."
        description="Our ingredients are carefully chosen to prevent tooth decay, freshen breath, and promote healthier gums."
        variant="onlight"
      />
      <ValueProp
        title="Perfectly dreamy."
        description="It's well-known that fluoride is a neurotoxin that can affect your sleep patterns and dreams. Experience a good night's sleep with our fluoride-free recipe."
        variant="onlight"
      />
      <ValueProp
        title="Perfectly nutritious."
        description="Calcium, phosphorus, magnesium, and zinc play a critical role in bone health and help rebuild and remineralize tooth enamel."
        variant="onlight"
      />
      <ValueProp
        title="Perfectly confident."
        description="Our tooth powder removes surface stains, revealing a brighter smile with every brush."
        variant="onlight"
      />
      <ValueProp
        title="Perfectly economicial."
        description="Despite its premium ingredients, our tooth powder lasts up to 50% longer than a typical 3.4oz tube of toothpaste when brushing twice daily, offering excellent value for money."
        variant="onlight"
      />
    </div>
  </section>
);
