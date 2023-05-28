import cn from "classnames";

import { nunitoRegular, nunitoSansRegular } from "@/config/fonts";
import { HeroAction } from "./HeroAction";
import { ScrollInformant } from "./ScrollInformant";

export const HomeHero = () => (
  <section className="relative -mt-16 bg-hero">
    <div className="mx-auto flex max-w-[1080px] px-6 pb-28 sm:pt-32">
      <article className="grid h-[588px] flex-1 place-content-end gap-8">
        <h1
          className={cn(
            nunitoRegular.className,
            "leading-none sm:min-w-[calc(100%_+_100px)]",
          )}
          style={{ fontSize: "var(--title-font-size)" }}
        >
          The future of my foot in your ass.
        </h1>

        <p className={cn(nunitoSansRegular.className, "text-lg sm:text-xl")}>
          Our tooth powder is the ultimate non-toxic and fluoride-free oral
          health solution. Fight plaque, bad breath, and gingivitis, while
          rebuilding enamel for a healthier, brighter smile.
        </p>

        <div className="flex gap-3 pb-4">
          <HeroAction
            href="/products/tooth-powder"
            variant="primary"
            size="default"
          >
            Buy now
          </HeroAction>
          <HeroAction href="/mission" variant="secondary" size="default">
            Learn more
          </HeroAction>
        </div>
      </article>

      <figure className="hidden flex-1 place-self-center justify-self-center text-center sm:block">
        placeholder image
      </figure>
    </div>

    <ScrollInformant className="absolute bottom-12 left-1/2 -translate-x-1/2" />
  </section>
);
