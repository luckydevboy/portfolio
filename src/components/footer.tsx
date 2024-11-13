import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/codewithsadee-org",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <Button
              variant="primary"
              href="mailto:mrghasemi1992@gmail.com"
              icon={<ChevronRight className="w-4 h-4 text-zinc-900" />}
            >
              Start project
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <Link
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <Link
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <Link href="">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
          </Link>
          <p className="text-zinc-500 text-sm">
            &copy; 2024{" "}
            <span className="text-zinc-200">Mohammad Reza Ghasemi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
