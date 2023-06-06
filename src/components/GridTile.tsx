import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import cn from "classnames";

interface GridTileProps extends HTMLAttributes<HTMLDivElement> {}

export const GridTile = (props: GridTileProps) => {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={twMerge(
        cn(
          "relative grid overflow-hidden rounded-2xl bg-white bg-opacity-5 p-4 text-white",
        ),
        className,
      )}
    />
  );
};
