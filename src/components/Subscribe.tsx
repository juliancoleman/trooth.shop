"use client";

import cn from "classnames";
import { useRef } from "react";

import { optInCustomer } from "@/api/stripe";
import {
  nunitoBold,
  nunitoSansRegular,
  nunitoSansMedium,
} from "@/config/fonts";

export const Subscribe = () => {
  const formRef = useRef(null);
  
  return <section className="bg-[#333] text-white">
    <div className="mx-auto grid max-w-[1080px] items-center gap-12 px-6 py-24 text-center sm:flex sm:text-left">
      <article className="grid flex-1 gap-6">
        <header className={cn(nunitoBold.className, "text-2xl")}>
          Subscribe and Save
        </header>
        <p className={cn(nunitoSansRegular.className, "text-base")}>
          Get exclusive deals, offers, and discounts. Subscribers are the first
          to be notified of new product releases and updates. You can
          unsubscribe at any time.
        </p>
      </article>

      <form
        className="flex flex-1 gap-6"
        ref={formRef}
        action={async (formdata) => {
          const email = formdata.get("email");
          await optInCustomer(email);
          formRef.current.reset();
        }}
      >
        <input
          className={cn(
            nunitoSansMedium.className,
            "flex-1 rounded border-2 border-white bg-transparent px-3 py-2 text-base placeholder:text-white",
          )}
          type="email"
          placeholder="Email address"
        />
        <button
          className={cn(
            nunitoSansMedium.className,
            "rounded-full bg-white px-4 py-2 text-base text-trooth-primary-500",
          )}
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
};
