import cn from "classnames";

import { nunitoBold, nunitoMedium, nunitoSansRegular } from "@/config/fonts";
import Image from "next/image";

export function ToothPowderUsageInstructions({
  variant = "ondark",
}: {
  variant?: "ondark" | "onlight";
}) {
  return (
    <section
      id="how-to-use"
      className={cn({
        "bg-[#333]": variant === "ondark",
        "bg-trooth-primary-200": variant === "onlight",
      })}
    >
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <h3
          className={cn(nunitoMedium.className, "mb-4 text-4xl", {
            "text-white": variant === "ondark",
            "text-[#333]": variant === "onlight",
          })}
        >
          How to use
        </h3>

        <div className="grid gap-8 sm:grid-cols-3">
          {/* Step 1 */}
          <div className="grid gap-4 rounded-xl bg-black/50 p-6 text-center text-white">
            <h3 className={cn(nunitoBold.className, "text-2xl")}>Wet</h3>
            <p className={cn(nunitoSansRegular.className, "text-xs")}>
              Shake off any excess water
            </p>
            <figure className="aspect-square w-full bg-trooth-primary-400">
              <Image src="/images/wet.jpg" alt="Wet the toothbrush bristles" height={852} width={852} />
            </figure>
          </div>

          {/* Step 2 */}
          <div className="grid gap-4 rounded-xl bg-black/50 p-6 text-center text-white">
            <h3 className={cn(nunitoBold.className, "text-2xl")}>Dip</h3>
            <p className={cn(nunitoSansRegular.className, "text-xs")}>
              Just coat the tip, a little goes a long way
            </p>
            <figure className="aspect-square w-full bg-trooth-primary-400">
              <Image src="/images/dip.jpg" alt="Dip the tip of the bristles in the powder" height={852} width={852} />
            </figure>
          </div>

          {/* Step 3 */}
          <div className="grid gap-4 rounded-xl bg-black/50 p-6 text-center text-white">
            <h3 className={cn(nunitoBold.className, "text-2xl")}>Brush</h3>
            <p className={cn(nunitoSansRegular.className, "text-xs")}>
              Massage the bristles into the teeth and gums
            </p>
            <figure className="aspect-square w-full bg-trooth-primary-400">
              <Image src="/images/brush.jpeg" alt="Massage bristles into teeth and gums" height={852} width={852} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
