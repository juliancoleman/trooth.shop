import { type ReactNode } from "react";
import cn from "classnames";

import { nunitoSansRegular } from "@/config/fonts";

type ProductActionProps = {
  variant: "ondark" | "onlight";
  href: string;
  children: ReactNode;
};

// TODO: the base type  doesn't match the Link component
// type def exactly, which can lead to issues later. Fixup
// once we encounter type issues with LinkProps
export const ProductAction = (props: ProductActionProps) => (
  <a
    href={props.href}
    className={cn(
      nunitoSansRegular.className,
      "hidden p-1.5 text-sm transition-colors sm:block",
      {
        "text-trooth-primary-100 hover:text-trooth-primary-200":
          props.variant === "ondark",
        "text-[#333] hover:text-[#555]": props.variant === "onlight",
      },
    )}
  >
    {props.children}
  </a>
);
