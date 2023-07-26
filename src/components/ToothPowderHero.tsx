"use client";

import { useEffect, useState } from "react";
import Stripe from "stripe";
import cn from "classnames";
import Link from "next/link";

import { dollarFormatter } from "@/utils/intl";
import { nunitoBold, nunitoRegular, nunitoSansRegular } from "@/config/fonts";
import Image from "next/image";

type ToothPowderHeroProps = {
  variant?: "ondark" | "onlight";
  product: Stripe.Product;
  defaultPaymentLink: string;
  subscriptionPaymentLinks: Stripe.PaymentLink[];
};

function ProductInfo({
  variant,
  product,
  defaultPaymentLink,
  subscriptionPaymentLinks,
}: ToothPowderHeroProps) {
  const [activeSubscriptionUrl, setActiveSubscriptionUrl] = useState(
    subscriptionPaymentLinks[0].url,
  );

  const handleSubscriptionLinkChange = ({ target }) =>
    setActiveSubscriptionUrl(target.value);
  const renderSubscriptions = () =>
    subscriptionPaymentLinks.map((plink) => (
      <option key={plink.id} value={plink.url}>
        {plink.metadata.frequency}
      </option>
    ));

  // This effect busts the JS cache of the <select> tag, and
  // visually updates the select to match the currently
  // selected option in the event the user clicks the back
  // button.
  useEffect(() => {
    const subscriptionSelectEl = document.getElementById(
      "subscription-links",
    ) as HTMLSelectElement;

    if (subscriptionSelectEl) {
      subscriptionSelectEl.value = activeSubscriptionUrl;
    }
  }, []);

  const basePrice = (product.default_price as Stripe.Price).unit_amount / 100;
  const subscriptionPrice = basePrice - basePrice * 0.1;

  return (
    <aside
      className={cn("grid gap-2.5 rounded-lg p-8 backdrop-blur-sm", {
        "bg-hero-light text-[#333]": variant === "ondark",
        "bg-hero-dark text-white": variant === "onlight",
      })}
    >
      <p className={cn(nunitoBold.className, "text-2xl")}>{product.name}</p>
      <p className={cn(nunitoSansRegular.className, "text-sm")}>
        {product.metadata.shortDescription}
      </p>
      <p className="text-2xl">
        <span className="text-sm text-red-500">-10%</span>{" "}
        {dollarFormatter.format(subscriptionPrice | 0)}
        <sup className="text-xs">
          {(subscriptionPrice % 1).toFixed(2).substring(1)}
        </sup>
      </p>
      <select
        id="subscription-links"
        className={cn(
          nunitoSansRegular.className,
          "mb-4 rounded border border-gray-500 bg-transparent p-1",
        )}
        onChange={handleSubscriptionLinkChange}
        value={activeSubscriptionUrl}
      >
        {renderSubscriptions()}
      </select>
      <Link
        href={activeSubscriptionUrl ?? ""}
        className={cn(
          nunitoRegular.className,
          "rounded-full py-[5px] pl-4 pr-3 text-center text-white",
          {
            "bg-[#333]": variant === "ondark",
            "bg-trooth-primary-500": variant === "onlight",
          },
        )}
      >
        Subscribe
      </Link>
      <div className="my-2 flex items-center gap-1">
        <hr
          className={cn("flex-1", {
            "border-[#333]": variant === "ondark",
            "border-white opacity-80": variant === "onlight",
          })}
        />
        <p className={cn(nunitoBold.className, "text-center text-xs")}>OR</p>
        <hr
          className={cn("flex-1", {
            "border-[#333]": variant === "ondark",
            "border-white opacity-80": variant === "onlight",
          })}
        />
      </div>
      <p className={cn(nunitoSansRegular.className, "text-xs")}>
        One-time purchase
      </p>
      <p className="mb-4 text-2xl">
        {dollarFormatter.format(basePrice)}
        <sup className="text-xs">.00</sup>
      </p>
      <p className="text-xs opacity-50 text-center">
        Adjust quantity during checkout.
      </p>
      <Link
        href={defaultPaymentLink ?? ""}
        className={cn(
          nunitoRegular.className,
          "rounded-full py-[5px] pl-4 pr-3 text-center text-white",
          {
            "bg-[#333]": variant === "ondark",
            "bg-trooth-primary-500": variant === "onlight",
          },
        )}
      >
        Buy now
      </Link>
      <p className="text-xs opacity-50">
        Tax and shipping calculated at checkout. All orders processed within 48 hours.
      </p>
    </aside>
  );
}

export const ToothPowderHero = ({
  variant = "ondark",
  product,
  defaultPaymentLink,
  subscriptionPaymentLinks,
}: ToothPowderHeroProps) => (
  <section className={cn("-mt-16")}>
    <div
      className={cn("-mt-32 w-full pt-48", {
        "bg-hero-dark": variant === "ondark",
        "bg-hero-light": variant === "onlight",
      })}
    >
      <section className="mx-auto grid max-w-[1080px] px-6 md:grid-cols-[2.5fr_1fr]">
        <figure className="object-cover grid content-end">
          <Image src={product.images[0]} width={612} height={408} alt={product.name} className="filter drop-shadow-md w-full" />
        </figure>
        <ProductInfo
          variant={variant}
          product={product}
          defaultPaymentLink={defaultPaymentLink}
          subscriptionPaymentLinks={subscriptionPaymentLinks}
        />
      </section>
    </div>
  </section>
);
