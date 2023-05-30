import { type ReactNode } from "react";
import cn from "classnames";
import { IconContext } from "@phosphor-icons/react";

import { nunitoBold, nunitoSansRegular } from "@/config/fonts";

type ValuePropProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ValueProp = (props: ValuePropProps) => (
  <article className="grid flex-1 gap-4 p-3 h-max">
    <IconContext.Provider
      value={{
        size: 32,
        color: "rgb(var(--trooth-primary-500))",
        weight: "duotone",
      }}
    >
      {props.icon}
    </IconContext.Provider>
    <header className={cn(nunitoBold.className, "text-base")}>
      {props.title}
    </header>
    <p className={cn(nunitoSansRegular.className, "text-base")}>
      {props.description}
    </p>
  </article>
);