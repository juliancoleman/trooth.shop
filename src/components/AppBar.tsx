"use client";

import Link from "next/link";
import { ShoppingCart } from "@phosphor-icons/react";
import cn from "classnames";

import { comfortaaBoldAlt2, nunitoSansRegular } from "../config/fonts";

const baseLinkClass = cn(
  nunitoSansRegular.className,
  "rounded-full p-3.5 text-base text-trooth-primary-500 hover:bg-white",
);

export const AppBar = () => (
  <header className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-2.5 sm:sticky">
    <Link
      href="/"
      className={cn(
        comfortaaBoldAlt2.className,
        "text-2xl tracking-tight",
        "bg-logo-color bg-clip-text text-transparent",
      )}
    >
      trooth
    </Link>

    <nav className="hidden gap-2 sm:flex">
      <Link href="/subscriptions" className={baseLinkClass}>
        Subscriptions
      </Link>
      <Link href="/mission" className={baseLinkClass}>
        Our Mission
      </Link>
      <Link href="/support" className={baseLinkClass}>
        Support
      </Link>
    </nav>

    <ShoppingCart size={32} className="cursor-pointer" />
  </header>
);
