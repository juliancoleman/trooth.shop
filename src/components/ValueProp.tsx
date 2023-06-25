import { type ReactNode } from "react";
import cn from "classnames";
import { IconContext } from "@phosphor-icons/react";

import { nunitoBold, nunitoSansRegular } from "@/config/fonts";

type ValuePropProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: "ondark" | "onlight";
};

export const ValueProp = (props: ValuePropProps) => (
  <article className="grid h-max flex-1 gap-4 py-3 sm:px-3">
    <IconContext.Provider
      value={{
        size: 32,
        color: "rgb(var(--trooth-primary-500))",
        weight: "duotone",
      }}
    >
      {props.icon ?? null}
    </IconContext.Provider>
    <header
      className={cn(nunitoBold.className, "text-base", {
        "text-trooth-primary-100": props.variant === "onlight",
      })}
    >
      {props.title}
    </header>
    <p
      className={cn(nunitoSansRegular.className, "text-base", {
        "text-trooth-primary-200": props.variant === "onlight",
      })}
    >
      {props.description}
    </p>
  </article>
);
