import { type Stripe } from "stripe";

import { stripe } from "@/config/stripe";

/**
 * Product API methods
 */
export async function getProducts() {
  return stripe.products.list();
}
export async function getProduct(productId: string) {
  return stripe.products.retrieve(productId);
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

/**
 * Payment Link API methods
 */
export function getPaymentLinks() {
  // Default limit is 10
  return stripe.paymentLinks.list({ limit: 20 });
}
