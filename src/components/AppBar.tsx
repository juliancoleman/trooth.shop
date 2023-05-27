"use client";

import Link, { type LinkProps } from "next/link";
import { ShoppingCart } from "@phosphor-icons/react";
import cn from "classnames";

import { comfortaaBoldAlt2, nunitoSansRegular } from "../config/fonts";

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
      <NavLink href="/subscriptions">Subscriptions</NavLink>
      <NavLink href="/mission">Our Mission</NavLink>
      <NavLink href="/support">Support</NavLink>
    </nav>

    <ShoppingCart size={32} className="cursor-pointer" />
  </header>
);

export const NavLink = (props: LinkProps) => (
  <Link
    className={cn(
      nunitoSansRegular.className,
      "rounded-full p-3.5 text-base text-trooth-primary-500 hover:bg-white",
    )}
    {...props}
  />
);
