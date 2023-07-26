"use client";

import cn from "classnames";
import { useRef, useState } from "react";
import { Check, CircleNotch } from "@phosphor-icons/react";

import { optInCustomer } from "@/api/stripe";
import {
  nunitoBold,
  nunitoSansRegular,
  nunitoSansMedium,
} from "@/config/fonts";

export const Subscribe = () => {
  const formRef = useRef<HTMLFormElement>();
  const [success, setSuccess] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <section className="bg-[#333] text-white">
      <div className="mx-auto grid max-w-[1080px] items-center gap-12 px-6 py-24 text-center sm:flex sm:text-left">
        <article className="grid flex-1 gap-6">
          <header className={cn(nunitoBold.className, "text-2xl")}>
            Exclusive Discounts and Updates
          </header>
          <p className={cn(nunitoSansRegular.className, "text-base")}>
            No spam, ever (about 1 email per month). You can unsubscribe at any
            time.
          </p>
        </article>

        <form
          className="flex flex-1 gap-6"
          ref={formRef}
          action={async (formdata) => {
            setIsSubmitting(true);
            const email: string = formdata.get("email") as string;
            console.log("email", email);
            await optInCustomer(email);
            if (formRef && formRef.current) {
              formRef.current.reset();
              setIsSubmitting(false);
              setSuccess(true);
            }
          }}
        >
          <input
            className={cn(
              nunitoSansMedium.className,
              "flex-1 rounded border-2 border-white bg-transparent px-3 py-2 text-base placeholder:text-white",
            )}
            type="email"
            name="email"
            placeholder="Email address"
          />
          <button
            className={cn(
              nunitoSansMedium.className,
              "rounded-full bg-white px-4 py-2 text-base text-trooth-primary-500",
              "relative flex items-center gap-2",
            )}
          >
            <span
              className={cn(
                "absolute inset-0 grid place-content-center opacity-0 transition-opacity",
                {
                  "opacity-100": isSubmitting,
                },
              )}
            >
              <CircleNotch className="animate-spin" />
            </span>
            {success === true ? (
              <>
                Subscribed <Check weight="bold" />
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
