"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

import Logo from "@/assets/images/logo.svg";
import { Navbar } from "@/components";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <Link href="/" className="text-2xl font-bold">
            <Image src={Logo} alt="Logo" width={40} height={30} />
          </Link>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            onClick={() => setNavIsOpen(!navIsOpen)}
            className="menu-btn md:hidden"
          >
            {navIsOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
          <Navbar isOpen={navIsOpen} />
        </div>
        <div className="hidden md:block ml-auto">
          <Link href="#contact" className="btn btn-secondary">
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
