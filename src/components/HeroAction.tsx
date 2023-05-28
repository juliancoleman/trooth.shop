"use client";

import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";
import cn from "classnames";
import { CaretRight, ArrowRight } from "@phosphor-icons/react";

import { nunitoSansMedium } from "@/config/fonts";

type HeroActionProps = {
  size: "default" | "sm";
  variant: "primary" | "secondary";
} & LinkProps & { children: ReactNode };

// TODO: the base type  doesn't match the Link component
// type def exactly, which can lead to issues later. Fixup
// once we encounter type issues with LinkProps
export const HeroAction = (props: HeroActionProps) => (
  <Link
    href={props.href}
    className={cn(
      nunitoSansMedium.className,
      "group flex items-center gap-1.5 rounded-full py-[5px] pl-4 pr-3 transition-colors",
      {
        "bg-[#333] text-white hover:bg-trooth-primary-500 hover:text-trooth-primary-100":
          props.variant === "primary",
        "text-[#333] hover:text-trooth-primary-500":
          props.variant === "secondary",
        "text-base": props.size === "default",
        "text-sm": props.size === "sm",
      },
    )}
  >
    {props.children}
    <span
      className={cn("relative aspect-[1]", {
        "h-4": props.size === "default",
        "h-3.5": props.size === "sm",
      })}
    >
      <CaretRight
        className="absolute opacity-100 transition-opacity group-hover:opacity-0"
        weight="bold"
      />
      <ArrowRight
        className="absolute opacity-0 transition-opacity group-hover:opacity-100"
        weight="bold"
      />
    </span>
  </Link>
);
