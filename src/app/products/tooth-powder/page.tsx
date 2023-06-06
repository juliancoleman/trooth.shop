import { AppBar } from "@/components/AppBar";
import { ToothPowderHero } from "@/components/ToothPowderHero";
import { Footer } from "@/components/Footer";
import { ToothPowderFeatures } from "@/components/ToothPowderFeatures";

export default function() {
  // theme is always "ondark" for the OG charcoal tooth powder.
  const variant = "ondark";

  return (
    <>
      <AppBar variant={variant} />
      <ToothPowderHero variant={variant} />
      <ToothPowderFeatures />
      <Footer />
    </>
  );
}
