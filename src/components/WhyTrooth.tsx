"use client";

import cn from "classnames";
import { EggCrack, GlobeSimple, Handshake } from "@phosphor-icons/react";

import { nunitoMedium, nunitoSansMedium } from "@/config/fonts";
import { ValueProp } from "./ValueProp";

export const WhyTrooth = () => (
  <section className={cn("mx-auto grid max-w-[1080px] gap-8 px-6 py-24")}>
    <p
      className={cn(
        nunitoSansMedium.className,
        "text-base text-trooth-primary-500",
      )}
    >
      Why Trooth
    </p>

    <h2 className={cn(nunitoMedium.className, "text-5xl")}>
      A non-toxic approach to
      <br /> dental care
    </h2>

    <div className="grid gap-6 md:flex">
      <ValueProp
        icon={<EggCrack />}
        title="Ingredients safe enough to eat"
        description="Discover the perfect balance of effectiveness and edibility. Our products deliver impressive results without compromising on your safety or peace of mind."
      />
      <ValueProp
        icon={<GlobeSimple />}
        title="Small business with a big mission"
        description="We delight in sharing the truth and making a positive impact on our community and the world around us."
      />
      <ValueProp
        icon={<Handshake />}
        title="Customer focused"
        description="We strive to provide the best personalized experience that exceeds expectations and builds lasting relationships."
      />
    </div>
  </section>
);
