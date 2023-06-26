import cn from "classnames";

import { nunitoMedium, nunitoSansRegular, nunitoRegular } from "@/config/fonts";

export function ToothPowderIngredients() {
  return (
    <section id="ingredients" className="bg-[#555] text-white">
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

        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoSansRegular.className,
              "text-base text-trooth-primary-100",
            )}
          >
            Eggshell Powder
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base text-trooth-primary-100",
            )}
          >
            Rich in calcium and other minerals. Remineralizes teeth and rebuilds
            enamel.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoSansRegular.className,
              "text-base text-trooth-primary-100",
            )}
          >
            Activated Coconut Charcoal
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base text-trooth-primary-100",
            )}
          >
            Removes surface stains, prevents plaque build-up, kills bad
            bacteria, and protects against gingivitis.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoSansRegular.className,
              "text-base text-trooth-primary-100",
            )}
          >
            Baking Soda
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base text-trooth-primary-100",
            )}
          >
            Balances the delicate oral pH, remineralizes teeth, prevents tooth
            decay, and neutralizes bad breath.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <p
            className={cn(
              nunitoSansRegular.className,
              "text-base text-trooth-primary-100",
            )}
          >
            Hydroxyapatite
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base text-trooth-primary-100",
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
              nunitoSansRegular.className,
              "text-base text-trooth-primary-100",
            )}
          >
            Peppermint Oil
          </p>
          <p
            className={cn(
              nunitoRegular.className,
              "text-base text-trooth-primary-100",
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
