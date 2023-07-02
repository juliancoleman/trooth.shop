import cn from "classnames";

import { nunitoBold, nunitoMedium, nunitoSansRegular } from "@/config/fonts";

export function ToothPowderUsageInstructions() {
  return (
    <section id="how-to-use" className="bg-[#333]">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <h3 className={cn(nunitoMedium.className, "mb-4 text-4xl text-white")}>
          How to use
        </h3>

        <div className="grid gap-8 sm:grid-cols-3">
          {/* Step 1 */}
          <div className="grid gap-4 rounded-xl bg-black/50 p-6 text-center text-white">
            <h3 className={cn(nunitoBold.className, "text-2xl")}>Wet</h3>
            <p className={cn(nunitoSansRegular.className, "text-xs")}>
              Shake off any excess water
            </p>
            <figure className="aspect-square w-full bg-trooth-primary-400" />
          </div>

          {/* Step 2 */}
          <div className="grid gap-4 rounded-xl bg-black/50 p-6 text-center text-white">
            <h3 className={cn(nunitoBold.className, "text-2xl")}>Dip</h3>
            <p className={cn(nunitoSansRegular.className, "text-xs")}>
              Just coat the tip, a little goes a long way
            </p>
            <figure className="aspect-square w-full bg-trooth-primary-400" />
          </div>

          {/* Step 3 */}
          <div className="grid gap-4 rounded-xl bg-black/50 p-6 text-center text-white">
            <h3 className={cn(nunitoBold.className, "text-2xl")}>Brush</h3>
            <p className={cn(nunitoSansRegular.className, "text-xs")}>
              Massage the bristles into the teeth and gums
            </p>
            <figure className="aspect-square w-full bg-trooth-primary-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
