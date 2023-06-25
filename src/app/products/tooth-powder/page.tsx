import { AppBar } from "@/components/AppBar";
import { ToothPowderHero } from "@/components/ToothPowderHero";
import { Footer } from "@/components/Footer";
import { ToothPowderFeatures } from "@/components/ToothPowderFeatures";
import { getPaymentLinks, getProduct, productsWithPrices } from "@/api/stripe";
import { ProductHeader } from "@/components/ProductHeader";

export default async function () {
  // theme is always "ondark" for the OG charcoal tooth powder.
  const variant = "ondark";

  // get product info
  let product = await getProduct(process.env.TOOTH_POWDER_PRODUCT_ID);
  // @ts-expect-error: We haven't mutated a deep object of the original value
  product = await productsWithPrices(product);

  let { data: toothPowderPaymentLinks } = await getPaymentLinks();
  toothPowderPaymentLinks = toothPowderPaymentLinks.filter(
    (plink) => plink.metadata.product === "tooth powder",
  );
  const defaultPaymentLink = toothPowderPaymentLinks.find(
    (plink) => plink.metadata.is_default === "true",
  )?.url;

  return (
    <>
      <AppBar variant={variant} />
      <ProductHeader
        variant={variant}
        product={product}
        defaultPaymentLink={defaultPaymentLink}
      />
      <ToothPowderHero
        product={product}
        defaultPaymentLink={defaultPaymentLink}
      />
      <ToothPowderFeatures />
      <Footer />
    </>
  );
}
