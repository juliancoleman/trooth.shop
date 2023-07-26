import cn from "classnames";

import { AppBar } from "@/components/AppBar";
import { Footer } from "@/components/Footer";
import { nunitoRegular, nunitoSansRegular } from "@/config/fonts";
import { Subscribe } from "@/components/Subscribe";

export default function () {
  return (
    <>
      <AppBar />
      <section className="mx-auto max-w-prose px-6 py-8">
        <h1 className={cn(nunitoRegular.className, "mb-6 text-4xl")}>
          Trooth's Mission
        </h1>
        <p className={cn(nunitoSansRegular.className, "mb-4 text-base")}>
          At Trooth, we are on a mission to revolutionize essential products,
          starting with our industry-leading tooth powder, which has been proven
          to be effective at cleaning your teeth and keeping your mouth healthy.
          We are redefining the standards for personal care. We believe that the
          key to vibrant health lies in the power of nature, and our carefully
          crafted products harness this potential, free from harmful chemicals,
          to deliver safe and effective solutions.
        </p>
        <p className={cn(nunitoSansRegular.className, "mb-4 text-base")}>
          Our commitment extends beyond just your smile&mdash;we vow to make a
          vast lineup of products that are safe to eat, natural, affordable, and
          so good that you wouldn't even think about going back to the cheaper
          alternatives.
        </p>
        <p className={cn(nunitoSansRegular.className, "mb-4 text-base")}>
          Join us on a new era of personal care that brings vitality and
          radiance to your life (literally). We're here to provide expert
          guidance, and cutting-edge natural solutions. Discover the Trooth and
          unlock the full potential of your life. Together, we can create a
          brighter, healthier future, starting with one smile at a time.
        </p>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}
