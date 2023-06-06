import Image from "next/image";
import cn from "classnames";

import { FeatureGrid } from "./FeatureGrid";
import { GridTile } from "./GridTile";
import { nunitoSansBold, nunitoSansRegular } from "@/config/fonts";

export const ToothPowderFeatures = () => (
  <FeatureGrid className="bg-[#333]" id="overview">
    <GridTile className="grid place-content-center gap-24 text-center sm:col-span-2 sm:row-span-2">
      <p className={cn(nunitoSansRegular.className, "text-xl")}>
        Non-toxic. Fluoride-free.
        <br />
        All-natural ingredients.
      </p>
      <p
        className={cn(
          nunitoSansBold.className,
          "bg-logo-color bg-clip-text text-6xl italic text-transparent",
        )}
      >
        Perfectly edible.
      </p>
    </GridTile>
    <GridTile className="aspect-square">
      <Image
        src="/images/eggshells.jpeg"
        height={640}
        width={486}
        alt="Eggshells - Minerals"
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-75"
      />
      <p
        className={cn(nunitoSansBold.className, "z-10 text-center text-xl")}
        style={{
          textShadow: "0 0 6px rgb(0 0 0 / 0.5)",
        }}
      >
        Loaded with minerals.
      </p>
    </GridTile>
    <GridTile className="aspect-square">
      <p className={cn(nunitoSansBold.className, "text-xl")}>
        Bad breath. Gone.
      </p>
    </GridTile>
    <GridTile className="grid gap-6">
      <p className={cn(nunitoSansBold.className, "text-xl")}>
        Lasts up to 9 months. <sup className="text-xs">1</sup>
      </p>
      <div className="grid gap-5">
        <div className="grid gap-3">
          <label htmlFor="trooth">Trooth</label>
          <div id="trooth" className="h-3 w-[90%] rounded-full bg-logo-color" />
        </div>

        <div className="grid gap-3">
          <label htmlFor="toothpaste">Toothpaste</label>
          <div
            id="toothpaste"
            className="h-3 w-[62.5%] rounded-full bg-gradient-to-r from-[#4E98C9] to-[#A1D3F7]"
          />
        </div>
      </div>

      <p className={cn(nunitoSansRegular.className, "text-xs")}>
        <sup>1</sup> When used twice a day, lasts up to 50% longer than a
        typical 3.4oz tube of toothpaste.
      </p>
    </GridTile>
    <GridTile className="sm:col-span-2">
      <p className={cn(nunitoSansBold.className, "text-xl")}>
        Fights plaque and reverses gingivitis.
      </p>
    </GridTile>
    <GridTile className="grid gap-16 sm:col-span-2">
      <p
        className={cn(
          nunitoSansRegular.className,
          "mt-8 translate-x-[15%] text-xl",
        )}
      >
        Go ahead...
      </p>
      <p
        className={cn(
          nunitoSansBold.className,
          "mb-8 -translate-x-[15%] text-right text-4xl",
        )}
      >
        Dream again.
      </p>
    </GridTile>
    <GridTile className="grid gap-16">
      <p className={cn(nunitoSansBold.className, "text-center text-xl")}>
        Whitens teeth
      </p>
    </GridTile>
  </FeatureGrid>
);
