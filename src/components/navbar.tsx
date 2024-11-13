"use client";

import { useRef, useEffect, MouseEvent, useState } from "react";
import Link from "next/link";
import { cx } from "class-variance-authority";

type Props = {
  isOpen: boolean;
};

const Navbar = ({ isOpen }: Props) => {
  const lastActiveLink = useRef<HTMLAnchorElement>(null);
  const activeBox = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      window.addEventListener("resize", initActiveBox);
      return () => {
        window.removeEventListener("resize", initActiveBox);
      };
    }
  }, [isClient]);

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(initActiveBox, []);

  const activeCurrentLink = (e: MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink.current?.classList.remove("active");
    e.currentTarget.classList.add("active");
    // @ts-expect-error: current is immutable
    lastActiveLink.current = e.currentTarget;

    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = e.currentTarget.offsetTop + "px";
      activeBox.current.style.left = e.currentTarget.offsetLeft + "px";
      activeBox.current.style.width = e.currentTarget.offsetWidth + "px";
      activeBox.current.style.height = e.currentTarget.offsetHeight + "px";
    }
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact.tsx",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={cx("navbar", isOpen && "active")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <Link
          key={key}
          href={link}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </Link>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
