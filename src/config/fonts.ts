import localFont from "next/font/local";
import { Nunito, Nunito_Sans } from "next/font/google";

export const nunitoRegular = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export const nunitoMedium = Nunito({
  weight: "600",
  subsets: ["latin"],
});

export const nunitoBold = Nunito({
  weight: "700",
  subsets: ["latin"],
});

export const nunitoSansRegular = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const nunitoSansMedium = Nunito_Sans({
  weight: "600",
  subsets: ["latin"],
});

export const nunitoSansBold = Nunito_Sans({
  weight: "700",
  subsets: ["latin"],
});

export const comfortaaBoldAlt2 = localFont({
  src: "./assets/Comfortaa-Bold-Alt2.ttf",
});
