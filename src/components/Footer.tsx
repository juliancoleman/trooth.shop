"use client";

import Link from "next/link";
import cn from "classnames";
import {
  IconContext,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  TwitterLogo,
  TelegramLogo,
} from "@phosphor-icons/react";

import { comfortaaBoldAlt2, nunitoBold, nunitoRegular } from "@/config/fonts";

export const Footer = () => (
  <footer>
    <div className="mx-auto grid max-w-[1080px] gap-8 px-6 py-12 sm:flex sm:justify-around sm:gap-12">
      <div className="flex flex-col justify-between gap-4">
        <nav className="grid gap-3">
          <Link
            href="/"
            title="Go home"
            aria-label="Go home"
            className={cn(
              comfortaaBoldAlt2.className,
              "text-2xl tracking-tight",
              "bg-logo-color bg-clip-text text-transparent",
            )}
          >
            trooth
          </Link>
        </nav>

        <p className={cn(nunitoRegular.className, "text-base")}>
          &copy; {new Date().getFullYear()} Trooth
        </p>
      </div>

      <nav className="grid auto-rows-max gap-3">
        <p className={cn(nunitoBold.className, "text-base")}>Shop</p>
        <Link
          href="/products/tooth-powder"
          aria-label="Charcoal Tooth Powder product page"
          className={cn(nunitoRegular.className, "text-base")}
        >
          Charcoal Tooth Powder
        </Link>
        <Link
          href="/products/spearmint-tooth-powder"
          aria-label="Spearmint Tooth Powder product page"
          className={cn(nunitoRegular.className, "text-base")}
        >
          Spearmint Tooth Powder
        </Link>
        {/*<Link
          href="/products/mouth-rinse"
          className={cn(nunitoRegular.className, "text-base")}
        >
          Spearmint Mouth Rinse
        </Link>*/}
      </nav>

      <div className="grid gap-9">
        {/*
        <nav className="grid gap-3">
          <p className={cn(nunitoBold.className, "text-base")}>Trooth Values</p>
          <Link
            href="/accessibility"
            className={cn(nunitoRegular.className, "text-base")}
          >
            Accessibility
          </Link>
          <Link
            href="/privacy"
            className={cn(nunitoRegular.className, "text-base")}
          >
            Privacy
          </Link>
        </nav>
        */}

        <nav className="grid gap-3">
          <p className={cn(nunitoBold.className, "text-base")}>Company</p>
          <Link
            href="/mission"
            aria-label="Trooth's mission"
            className={cn(nunitoRegular.className, "text-base")}
          >
            Trooth&apos;s Mission
          </Link>
          {/*
          <Link
            href="/blog"
            className={cn(nunitoRegular.className, "text-base")}
          >
            Blog
          </Link>
          */}
          <Link
            href="mailto:support@trooth.shop"
            aria-label="Send email to support@trooth.shop"
            className={cn(nunitoRegular.className, "text-base")}
          >
            Support
          </Link>

          <div className="flex gap-4 sm:gap-2">
            <IconContext.Provider value={{ size: 32, className: "sm:p-1.5" }}>
              {/* <InstagramLogo /> */}
              <Link
                href="https://www.linkedin.com/company/trooth-shop"
                aria-label="Trooth LinkedIn page"
                title="Trooth LinkedIn page"
              >
                <LinkedinLogo />
              </Link>
              {/* <TiktokLogo /> */}
              <Link
                href="https://twitter.com/trooth_shop"
                aria-label="Trooth Twitter Profile"
                title="Trooth Twitter Profile"
              >
                <TwitterLogo />
              </Link>
              <Link
                href="https://t.me/troothshop"
                aria-label="Trooth Telegram Channel"
                title="Trooth Telegram Channel"
              >
                <TelegramLogo />
              </Link>
            </IconContext.Provider>
          </div>
        </nav>
      </div>
    </div>
  </footer>
);
