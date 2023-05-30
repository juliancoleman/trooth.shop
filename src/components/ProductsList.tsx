"use client";

import { type Stripe } from "stripe";

import { ProductCard } from "./ProductCard";

export const ProductsList = ({ products }: { products: Stripe.Product[] }) => (
  <>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        title={product.name}
        price={(product.default_price as Stripe.Price).unit_amount}
        routePath={product.metadata.path}
      />
    ))}
  </>
);
