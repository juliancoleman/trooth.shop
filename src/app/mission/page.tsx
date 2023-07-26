import cn from "classnames";

import { AppBar } from "@/components/AppBar";
import { Footer } from "@/components/Footer";
import { nunitoRegular, nunitoSansBold, nunitoSansRegular } from "@/config/fonts";

export default function() {
  return (
    <>
      <AppBar />
      <section className="max-w-prose py-8 px-6 mx-auto">
        <h1 className={cn(nunitoRegular.className, "text-4xl mb-6")}>Trooth's Mission</h1>
        <p className={cn(nunitoSansRegular.className, "text-base mb-4")}>
          At Trooth, we are on a mission to revolutionize essential
          products, starting with our industry-leading tooth powder,
          which has been proven to be more effective than conventional
          toothpaste at cleaning your teeth and keeping your mouth
          healthy. We are redefining the standards for personal care.
          We believe that the key to vibrant health lies in the power
          of nature, and our carefully crafted products harness this
          potential, free from harmful chemicals, to deliver safe and
          effective solutions.
        </p>
        <p className={cn(nunitoSansRegular.className, "text-base")}>
          Our commitment extends beyond just your smile&mdash;we vow
          to make a vast lineup of products that are safe to eat,
          natural, affordable, and so good that you wouldn't even
          think about going back to the cheaper alternatives.
        </p>
        <p className={cn(nunitoSansRegular.className, "text-base")}>
          Join us on a new era of personal care that brings vitality
          and radiance to your life (literally). We're here to provide
          expert guidance, and cutting-edge natural solutions. Discover
          the Trooth and unlock the full potential of your life. Together,
          we can create a brighter, healthier future, starting with one
          smile at a time.
        </p>
      </section>
      <Footer />
    </>
  )
}
