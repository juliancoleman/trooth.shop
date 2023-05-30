"use client";

// TODO: implement cart feature when more than a handful of products

import Link from "next/link";
// import { ShoppingCart } from "@phosphor-icons/react";
import cn from "classnames";
import { useState, useEffect } from "react";

import { comfortaaBoldAlt2, nunitoSansRegular } from "@/config/fonts";

const baseLinkClass = cn(
  nunitoSansRegular.className,
  "rounded-full p-3.5 text-base leading-none text-trooth-primary-500 hover:bg-white",
);

export const AppBar = () => {
  const [hasScrolled, setHasScrolled] = useState(
    typeof window !== "undefined" && window.scrollY > 0,
  );

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        return setHasScrolled(true);
      }

      return setHasScrolled(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn("relative top-0 z-10 transition-all sm:sticky", {
        "sm:bg-white sm:bg-opacity-100 sm:shadow-sm": hasScrolled,
      })}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-[1080px] items-center justify-between px-6 py-2.5",
        )}
      >
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
          <Link
            href={process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL}
            className={baseLinkClass}
          >
            Subscriptions
          </Link>
          <Link href="/mission" className={baseLinkClass}>
            Our Mission
          </Link>
          <Link href="/support" className={baseLinkClass}>
            Support
          </Link>
        </nav>

        {/* <ShoppingCart size={32} className="cursor-pointer" /> */}
      </nav>
    </header>
  );
};
