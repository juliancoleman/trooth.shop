"use client";

import cn from "classnames";
import { CaretRight, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

import { nunitoBold, nunitoSansRegular } from "@/config/fonts";
import { dollarFormatter } from "@/utils/intl";

type ProductCardProps = {
  title: string;
  price: number;
  routePath: string;
  image: string;
};

export const ProductCard = (props: ProductCardProps) => (
  <div className="grid gap-6 rounded border-2 border-trooth-primary-100 bg-white p-8">
    <figure className="aspect-video bg-white">
      <Image src={props.image} alt={props.title} width={300} height={169} className="filter drop-shadow-xl" />
    </figure>

    <p className={cn(nunitoBold.className, "text-center text-xl")}>
      {props.title}
    </p>

    <p className={cn(nunitoSansRegular.className, "text-center text-base")}>
      {dollarFormatter.format(props.price / 100)}
    </p>

    <div className="flex justify-center gap-3">
      {props.routePath != null ? (
        <Link
          href={props.routePath}
          className={cn(
            nunitoSansRegular.className,
            "group flex items-center gap-2 rounded-full bg-trooth-primary-300 py-[5px] pl-4 pr-3 text-trooth-primary-100",
          )}
        >
          View
          <span className={cn("relative aspect-[1] h-4")}>
            <CaretRight
              className="absolute opacity-100 transition-opacity group-hover:opacity-0"
              weight="bold"
            />
            <ArrowRight
              className="absolute opacity-0 transition-opacity group-hover:opacity-100"
              weight="bold"
            />
          </span>
        </Link>
      ) : null}
    </div>
  </div>
);
