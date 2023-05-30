import cn from "classnames";

import { getProducts, productsWithPrices } from "@/api/stripe";
import { nunitoMedium } from "@/config/fonts";
import { ProductsList } from "./ProductsList";

export const Products = async () => {
  let { data: products } = await getProducts();
  products = products.filter((p) => p.metadata.isTopProduct === "true");
  products = await Promise.all(products.map(productsWithPrices));

  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto grid max-w-[1080px] gap-11 px-6 py-24">
        <h2 className={cn(nunitoMedium.className, "text-5xl")}>Our Products</h2>
        <div className="grid gap-11 sm:grid-cols-3">
          <ProductsList products={products} />
        </div>
      </div>
    </section>
  );
};
