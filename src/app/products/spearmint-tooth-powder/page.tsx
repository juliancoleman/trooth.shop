import { getPaymentLinks, getProduct, productsWithPrices } from "@/api/stripe";
import { AppBar } from "@/components/AppBar";
import { ToothPowderHero } from "@/components/ToothPowderHero";
import { Footer } from "@/components/Footer";
import { ToothPowderFeatures } from "@/components/ToothPowderFeatures";
import { ProductHeader } from "@/components/ProductHeader";
import { ToothPowderIngredients } from "@/components/ToothPowderIngredients";
import { ToothPowderUsageInstructions } from "@/components/ToothPowderUsageInstructions";

export default async function () {
  // theme is always "onlight" for the spearmint charcoal tooth powder.
  const variant = "onlight";

  // get product info
  let product = await getProduct(process.env.SPEARMINT_TOOTH_POWDER_PRODUCT_ID);
  // @ts-expect-error: We haven't mutated a deep object of the original value
  product = await productsWithPrices(product);

  // get payment links
  let { data: toothPowderPaymentLinks } = await getPaymentLinks();
  // filter payment links only to the current product shown
  toothPowderPaymentLinks = toothPowderPaymentLinks.filter(
    (plink) =>
      plink.metadata.product === "spearmint tooth powder" &&
      plink.active === true,
  );
  // get the default payment link for the one-time purchase
  const defaultPaymentLink = toothPowderPaymentLinks.find(
    (plink) => plink.metadata.is_default === "true",
  )?.url;
  // get all other links for subscriptions ordered by metadata.index asc
  const subscriptionPaymentLinks = toothPowderPaymentLinks
    .filter((plink) => plink.metadata.is_default !== "true")
    .sort((a, b) => Number(a.metadata.index) - Number(b.metadata.index));

  return (
    <>
      <AppBar variant={variant} />
      <ProductHeader
        variant={variant}
        product={product}
        defaultPaymentLink={defaultPaymentLink}
      />
      <ToothPowderHero
        variant={variant}
        product={product}
        defaultPaymentLink={defaultPaymentLink}
        subscriptionPaymentLinks={subscriptionPaymentLinks}
      />
      <ToothPowderFeatures variant={variant} />
      <ToothPowderIngredients variant={variant} />
      <ToothPowderUsageInstructions variant={variant} />
      <Footer />
    </>
  );
}
