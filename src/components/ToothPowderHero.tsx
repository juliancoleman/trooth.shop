"use client";

import cn from "classnames";
import { useEffect, useRef } from "react";

import { nunitoSansBold } from "@/config/fonts";
import { HeroAction } from "./HeroAction";

type ToothPowderHeroProps = {
  variant: "onlight" | "ondark";
  handleChange(t: ToothPowderHeroProps["variant"]): void;
};

export const ToothPowderHero = ({
  variant = "ondark",
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
    <section className={cn("-mt-16 h-[calc(100vh_-_64px)]")}>
      {/* dark hero bg */}
      <div
        className={cn(
          "absolute inset-0 h-screen w-full bg-hero-dark transition-opacity",
          {
            "opacity-0": variant === "onlight",
            "opacity-100": variant === "ondark",
          },
        )}
      />

      {/* light hero bg */}
      <div
        className={cn(
          "absolute inset-0 h-screen w-full bg-hero-light transition-opacity",
          {
            "opacity-0": variant === "ondark",
            "opacity-100": variant === "onlight",
          },
        )}
      />
      <header
        className={cn(
          "sticky top-0 mx-auto mt-16 max-w-[1080px] transition-colors",
          {
            "text-white": variant === "ondark",
            "text-[#333]": variant === "onlight",
          },
        )}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <h1 className={cn(nunitoSansBold.className, "text-base")}>
            Charcoal Tooth Powder
          </h1>

          <nav className="flex items-center gap-3">
            <HeroAction variant="primary" size="sm" href="#">
              Buy now
            </HeroAction>
          </nav>
        </div>

        <form className="flex justify-end p-6">
          <fieldset>
            <legend className="absolute m-0 h-px w-px overflow-hidden p-0">
              Please choose a flavor
            </legend>
            <div className="flex gap-3">
              <label htmlFor="ondark">
                <input
                  ref={darkRef}
                  type="radio"
                  name="theme"
                  id="ondark"
                  value="ondark"
                  className="aspect-square w-5 cursor-pointer appearance-none rounded-full bg-[#555] checked:ring-2 checked:ring-black checked:ring-opacity-25"
                  onChange={({ target }) => {
                    if (target.checked) {
                      handleChange("ondark");
                    }
                  }}
                />
                <span className="absolute m-0 h-px w-px overflow-hidden p-0">
                  Original
                </span>
              </label>

              <label htmlFor="onlight">
                <input
                  ref={lightRef}
                  type="radio"
                  name="theme"
                  id="onlight"
                  value="onlight"
                  className="aspect-square w-5 cursor-pointer appearance-none rounded-full bg-trooth-primary-400 checked:ring-2 checked:ring-black checked:ring-opacity-25"
                  onChange={({ target }) => {
                    if (target.checked) {
                      handleChange("onlight");
                    }
                  }}
                />
                <span className="absolute m-0 h-px w-px overflow-hidden p-0">
                  Spearmint
                </span>
              </label>
            </div>
          </fieldset>
        </form>
      </header>
    </section>
  );
};
