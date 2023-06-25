import Stripe from "stripe";
import cn from "classnames";

import { nunitoSansBold } from "@/config/fonts";
import { HeroAction } from "@/components/HeroAction";
import { ProductAction } from "@/components/ProductAction";

export function ProductHeader({
  variant,
  product,
  defaultPaymentLink,
}: {
  variant: "onlight" | "ondark";
  product: Stripe.Product;
  defaultPaymentLink: string;
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 mx-auto max-w-[1080px] text-white backdrop-blur transition-colors",
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className={cn(nunitoSansBold.className, "text-base")}>
          {product.name}
        </h1>

        <nav className="flex items-center gap-3">
          <ProductAction variant={variant} href="#overview">
            Overview
          </ProductAction>
          <ProductAction variant={variant} href="#ingredients">
            Ingredients
          </ProductAction>
          <ProductAction variant={variant} href="#how-to-use">
            How to use
          </ProductAction>
          <HeroAction
            variant="primary"
            size="sm"
            href={defaultPaymentLink ?? ""}
          >
            Buy now
          </HeroAction>
        </nav>
      </div>
    </header>
  );
}
