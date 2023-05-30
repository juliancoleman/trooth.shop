import { type Stripe } from "stripe";

import { stripe } from "@/config/stripe";

export async function getProducts() {
  return stripe.products.list();
}

export async function getProductDefaultPrice(priceId: string) {
  return stripe.prices.retrieve(priceId);
}

export const productsWithPrices = async (product: Stripe.Product) => {
  const defaultPrice = await getProductDefaultPrice(
    product.default_price as string,
  );
  product.default_price = defaultPrice;

  return product;
};
