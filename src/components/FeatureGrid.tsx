import { type HTMLAttributes } from "react";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

interface FeatureGridProps extends HTMLAttributes<HTMLDivElement> {}

export const FeatureGrid = (props: FeatureGridProps) => {
  const { className, children, ...rest } = props;

  return (
    <section className={twMerge(cn("px-6 py-24", className))} {...rest}>
      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-[1fr_0.5fr_1fr]">
        {children}
      </div>
    </section>
  );
};
