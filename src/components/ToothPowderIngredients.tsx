import cn from "classnames";

import { nunitoBold, nunitoMedium, nunitoRegular } from "@/config/fonts";

export function ToothPowderIngredients({
  variant = "ondark",
}: {
  variant?: "ondark" | "onlight";
}) {
  return (
    <section
      id="ingredients"
      className={cn({
        "bg-[#555] text-trooth-primary-100": variant === "ondark",
        "bg-white": variant === "onlight",
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
              "text-xs text-trooth-primary-200",
            )}
          >
            What it is
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-xs text-trooth-primary-200",
            )}
          >
            What it does
          </p>
        </div>

        {/* This is a super generous assumption... Fix it */}
        {variant === "onlight" && <div className="grid grid-cols-2">
          <p className={cn(nunitoBold.className, "text-base")}>
            Spearmint Essential Oil
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base opacity-70",
            )}
          >
            Freshens breath and leaves a cool mint aftertaste with each brushing.
          </p>
        </div>}

        <div className="grid grid-cols-2">
          <p className={cn(nunitoBold.className, "text-base")}>
            Eggshell Powder
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base opacity-70",
            )}
          >
            Rich in calcium and other minerals. Remineralizes teeth and rebuilds
            enamel.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoBold.className,
              "text-base",
            )}
          >
            Activated Coconut Charcoal
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base opacity-70",
            )}
          >
            Removes surface stains, prevents plaque build-up, kills bad
            bacteria, and protects against gingivitis.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoBold.className,
              "text-base",
            )}
          >
            Baking Soda
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base opacity-70",
            )}
          >
            Balances the delicate oral pH, remineralizes teeth, prevents tooth
            decay, and neutralizes bad breath.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoBold.className,
              "text-base",
            )}
          >
            Hydroxyapatite
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base opacity-70",
            )}
          >
            All that calcium can't work without phosphorus. It is an essential
            component of bone production and remineralization, and keeps your
            teeth strong.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoBold.className,
              "text-base",
            )}
          >
            Peppermint Oil
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base opacity-70",
            )}
          >
            Cuts through bacteria like butter. In conjunction with coconut
            charcoal, eradicates bad bacteria while preserving most of the good
            bacteria.
          </p>
        </div>
      </div>
    </section>
  );
}
