import { getPaymentLinks, getProduct, productsWithPrices } from "@/api/stripe";
import { AppBar } from "@/components/AppBar";
import { Footer } from "@/components/Footer";
import { MouthRinseFeatures } from "@/components/MouthRinseFeatures";
import { ProductHeader } from "@/components/ProductHeader";
import { SpearmintMouthRinseIngredients } from "@/components/SpearmintMouthRinseIngredients";
import { ToothPowderHero } from "@/components/ToothPowderHero";

export default async function () {
  // theme is always "onlight" for the spearmint mouth rinse
  const variant = "onlight";

  // get product info
  let product = await getProduct(process.env.SPEARMINT_MOUTH_RINSE_PRODUCT_ID);
  // @ts-expect-error: We haven't mutated a deep object of the original value
  product = await productsWithPrices(product);

  // get payment links
  let { data: mouthRinsePaymentLinks } = await getPaymentLinks();
  // filter payment links only to the current product shown
  mouthRinsePaymentLinks = mouthRinsePaymentLinks.filter(
    (plink) =>
      plink.metadata.product === "spearmint mouth rinse" &&
      plink.active === true,
  );
  // get the default payment link for the one-time purchase
  const defaultPaymentLink = mouthRinsePaymentLinks.find(
    (plink) => plink.metadata.is_default === "true",
  )?.url;
  // get all other links for subscriptions ordered by metadata.index asc
  const subscriptionPaymentLinks = mouthRinsePaymentLinks
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
      <MouthRinseFeatures variant="spearmint" />
      <SpearmintMouthRinseIngredients />
      <Footer />
    </>
  );
}
