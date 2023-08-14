import { getPaymentLinks, getProduct, productsWithPrices } from "@/api/stripe";
import { AppBar } from "@/components/AppBar";
import { Footer } from "@/components/Footer";
import { ProductHeader } from "@/components/ProductHeader";
import { ToothPowderHero } from "@/components/ToothPowderHero";

export default async function () {
  // theme is always "onlight" for the spearmint mouth rinse
  const variant = "ondark";

  // get product info
  let product = await getProduct(process.env.SPEARMINT_CINNAMON_BUNDLE_ID);
  // @ts-expect-error: We haven't mutated a deep object of the original value
  product = await productsWithPrices(product);

  // get payment links
  let { data: mouthRinsePaymentLinks } = await getPaymentLinks();
  // filter payment links only to the current product shown
  mouthRinsePaymentLinks = mouthRinsePaymentLinks.filter(
    (plink) =>
      plink.metadata.product === "cinnamon rinse spearmint powder" &&
      plink.active === true,
  );
  // get the default payment link for the one-time purchase
  const defaultPaymentLink = mouthRinsePaymentLinks.find(
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
        variant={variant}
        product={product}
        defaultPaymentLink={defaultPaymentLink}
        subscriptionPaymentLinks={null}
      />
      <Footer />
    </>
  );
}
