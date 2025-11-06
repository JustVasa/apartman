import { ComponentProps } from "react";
import clsx from "clsx";

type Props = ComponentProps<"button"> & { asLink?: boolean };

export default function Button({ className, children, ...rest }: Props) {
  return (
    <button
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-5 py-2 border border-white/20 bg-white/10 text-white hover:bg-white/15 transition",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
