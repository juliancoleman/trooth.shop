import cn from "classnames";

import { AppBar } from "@/components/AppBar";
import { Footer } from "@/components/Footer";
import { nunitoRegular, nunitoSansBold, nunitoSansRegular } from "@/config/fonts";

export default function() {
  return (
    <>
      <AppBar />
      <section className="max-w-prose py-8 px-6">
        <h1 className={cn(nunitoRegular.className, "text-4xl")}>Trooth's Mission</h1>
        <p className={cn(nunitoSansRegular.className, "text-base")}>
          Trooth is a family-owned business based out of Castle Rock,
          CO. We started this company because you deserve to treat
          your body better. <span className={nunitoSansBold.className}>Enough</span>
          buying ineffective, harmful products from stores that lie
          and say they're good and healthy for you.
          <span className={nunitoSansBold.className}>Enough</span>
          spending an arm and a leg for healthier options.
          <span className={nunitoSansBold.className}>
            Enough with the BS.
          </span>
        </p>
        <p className={cn(nunitoSansRegular.className, "text-base")}>
          Our product lines start with the teeth and mouth, but we won't
          stop there. We vow to make a vast lineup of products that are
          safe to eat, natural, affordable, and so good that you wouldn't
          even think about going back to the cheaper alternatives.
        </p>
      </section>
      <Footer />
    </>
  )
}
