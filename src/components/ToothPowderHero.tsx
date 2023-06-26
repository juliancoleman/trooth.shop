import Stripe from "stripe";
import cn from "classnames";
import Link from "next/link";

import { dollarFormatter } from "@/utils/intl";
import { nunitoBold, nunitoSansRegular } from "@/config/fonts";

type ToothPowderHeroProps = {
  product: Stripe.Product;
  defaultPaymentLink: string;
};

function ProductInfo({ product, defaultPaymentLink }: ToothPowderHeroProps) {
  return (
    <aside className="grid gap-2.5 rounded-lg bg-hero-light p-8 text-[#333] backdrop-blur-sm">
      <p className={cn(nunitoBold.className, "text-2xl")}>{product.name}</p>
      <p className={cn(nunitoSansRegular.className, "text-sm")}>
        {product.metadata.shortDescription}
      </p>
      <p className="mb-4 text-2xl">
        {dollarFormatter.format(
          (product.default_price as Stripe.Price).unit_amount / 100,
        )}
        <sup className="text-xs">.00</sup>
      </p>
      <Link
        href={defaultPaymentLink ?? ""}
        className="rounded-full bg-logo-grayscale py-[5px] pl-4 pr-3 text-center text-white"
      >
        Buy now
      </Link>
      <p className="text-xs opacity-50">
        Tax and shipping calculated at checkout.
      </p>
    </aside>
  );
}

export const ToothPowderHero = ({
  product,
  defaultPaymentLink,
}: ToothPowderHeroProps) => (
  <section className={cn("-mt-16")}>
    <div className="-mt-32 w-full bg-hero-dark pt-48">
      <section className="mx-auto grid max-w-[1080px] px-6 md:grid-cols-[2.5fr_1fr]">
        <div />
        <ProductInfo
          product={product}
          defaultPaymentLink={defaultPaymentLink}
        />
      </section>
    </div>
  </section>
);
