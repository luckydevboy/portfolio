import { ReactNode } from "react";
import Link from "next/link";
import { cx } from "class-variance-authority";

type Props = {
  href?: string;
  download?: string;
  target?: "_self" | "_blank";
  children: string;
  icon?: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
};

const Button = ({
  href,
  download,
  target = "_self",
  children,
  icon,
  className,
  variant = "primary",
}: Props) => {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={cx(
          "btn",
          className,
          variant === "primary" && "btn-primary",
          variant === "outline" && "btn-outline",
        )}
        download={download}
      >
        {children}
        {icon}
      </Link>
    );
  } else {
    return (
      <button
        className={cx(
          "btn",
          className,
          variant === "primary" && "btn-primary",
          variant === "outline" && "btn-outline",
        )}
      >
        {children}
        {icon}
      </button>
    );
  }
};

export default Button;
