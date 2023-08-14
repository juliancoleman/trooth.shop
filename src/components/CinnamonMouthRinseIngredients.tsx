import cn from "classnames";

import { nunitoBold, nunitoMedium, nunitoRegular } from "@/config/fonts";

export function CinnamonMouthRinseIngredients({
  variant = "cinnamon",
}: {
  variant?: "cinnamon" | "spearmint";
}) {
  return (
    <section
      id="ingredients"
      className={cn({
        "bg-[#555] text-trooth-primary-100": variant === "cinnamon",
        "bg-white": variant === "spearmint",
      })}
    >
      <div className="mx-auto grid max-w-[640px] gap-4 px-6 py-24">
        <h3 className={cn(nunitoMedium.className, "mb-4 text-4xl")}>
          Ingredients
        </h3>
        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoRegular.className,
              "text-xs text-trooth-primary-500",
            )}
          >
            What it is
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-xs text-trooth-primary-500",
            )}
          >
            What it does
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p className={cn(nunitoBold.className, "text-base")}>
            Purified Water
          </p>
          <p className={cn(nunitoRegular.className, "text-base opacity-70")}>
            Universal solvent, transports toxins away from teeth and gums.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p className={cn(nunitoBold.className, "text-base")}>
            Aloe Vera Juice
          </p>
          <p className={cn(nunitoRegular.className, "text-base opacity-70")}>
            Anti-inflammatory, antibacterial, loaded with antioxidants.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p className={cn(nunitoBold.className, "text-base")}>Baking Soda</p>
          <p className={cn(nunitoRegular.className, "text-base opacity-70")}>
            Balances the delicate oral pH, remineralizes teeth, prevents tooth
            decay, and neutralizes bad breath.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p className={cn(nunitoBold.className, "text-base")}>Cinnamon</p>
          <p className={cn(nunitoRegular.className, "text-base opacity-70")}>
            Freshens breath, antibacterial, anti-fungal.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p className={cn(nunitoBold.className, "text-base")}>
            Peppermint Oil
          </p>
          <p className={cn(nunitoRegular.className, "text-base opacity-70")}>
            Cuts through bacteria like butter. In conjunction with aloe vera
            juice, eradicates bad bacteria while preserving most of the good
            bacteria.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p className={cn(nunitoBold.className, "text-base")}>Basil Oil</p>
          <p className={cn(nunitoRegular.className, "text-base opacity-70")}>
            Anti-inflammatory and kills bacteria.
          </p>
        </div>
      </div>
    </section>
  );
}
