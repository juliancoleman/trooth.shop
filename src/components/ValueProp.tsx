import { type HTMLAttributes, type ReactNode } from "react";
import cn from "classnames";
import { IconContext } from "@phosphor-icons/react";

import { nunitoBold, nunitoSansRegular } from "@/config/fonts";

type ValuePropProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: "ondark" | "onlight";
} & HTMLAttributes<HTMLDivElement>;

export const ValueProp = (props: ValuePropProps) => (
  <article className={cn("grid h-max flex-1 gap-4 py-3 sm:px-3", props.className)}>
    <IconContext.Provider
      value={{
        size: 32,
        color:
          props.variant === "onlight"
            ? "rgb(var(--trooth-primary-200))"
            : "rgb(var(--trooth-primary-500))",
        weight: "duotone",
      }}
    >
      {props.icon ?? null}
    </IconContext.Provider>
    <header
      className={cn(nunitoBold.className, "text-base", {
        "text-trooth-primary-200": props.variant === "onlight",
      })}
    >
      {props.title}
    </header>
    <p
      className={cn(nunitoSansRegular.className, "text-base", {
        "text-trooth-primary-100": props.variant === "onlight",
      })}
    >
      {props.description}
    </p>
  </article>
);
