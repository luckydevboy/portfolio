import { ReactNode } from "react";
import Link from "next/link";
import { cx } from "class-variance-authority";

type Props = {
  href?: string;
  download?: string;
  children: string;
  icon?: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
};

const Button = ({
  href,
  children,
  icon,
  className,
  variant = "primary",
}: Props) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cx(
          "btn",
          className,
          variant === "primary" && "btn-primary",
          variant === "outline" && "btn-outline"
        )}
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
          variant === "outline" && "btn-outline"
        )}
      >
        {children}
        {icon}
      </button>
    );
  }
};

export default Button;
