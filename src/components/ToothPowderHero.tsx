"use client";

import cn from "classnames";
import { useEffect, useRef } from "react";

import { nunitoSansBold } from "@/config/fonts";

type ToothPowderHeroProps = {
  variant: "onlight" | "ondark";
  handleChange(t: ToothPowderHeroProps["variant"]): void;
};

export const ToothPowderHero = ({
  variant,
  handleChange,
}: ToothPowderHeroProps) => {
  const darkRef = useRef<HTMLInputElement>(null);
  const lightRef = useRef<HTMLInputElement>(null);

  // we have to manually replace React's Controlled inputs.
  // It's unclear why this is an issue in the first place,
  // but unless we have this, `checked` is always set on the
  // first radio, yet neither radios appear visibly checked.
  useEffect(() => {
    if (variant === "ondark") {
      darkRef.current.setAttribute("checked", "checked");
      lightRef.current.removeAttribute("checked");
    } else if (variant === "onlight") {
      darkRef.current.removeAttribute("checked");
      lightRef.current.setAttribute("checked", "checked");
    }
  }, [variant]);

  return (
    <section className="-mt-16 h-screen bg-hero-dark">
      <header className="sticky top-16 mx-auto flex max-w-[1080px] items-center justify-between px-6 py-3 text-white">
        <h1 className={cn(nunitoSansBold.className, "text-base")}>
          Charcoal Tooth Powder
        </h1>

        <form>
          <fieldset>
            <legend className="invisible">Please choose a flavor</legend>
            <div className="flex gap-3">
              <label htmlFor="ondark">
                <input
                  ref={darkRef}
                  type="radio"
                  name="theme"
                  id="ondark"
                  value="ondark"
                  onChange={({ target }) => {
                    if (target.checked) {
                      handleChange("ondark");
                    }
                  }}
                />
                <span>Original</span>
              </label>

              <label htmlFor="onlight">
                <input
                  ref={lightRef}
                  type="radio"
                  name="theme"
                  id="onlight"
                  value="onlight"
                  onChange={({ target }) => {
                    if (target.checked) {
                      handleChange("onlight");
                    }
                  }}
                />
                <span>Spearmint</span>
              </label>
            </div>
          </fieldset>
        </form>
      </header>
    </section>
  );
};
