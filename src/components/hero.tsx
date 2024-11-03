import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowDownIcon, DownloadCloudIcon } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg relative">
              <Image
                src="/images/portrait-3.png"
                width={40}
                height={40}
                alt="Mohammad Reza Ghasemi Portrait"
                className="scale-90"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              icon={<DownloadCloudIcon className="h-4 w-4 text-zinc-900" />}
            >
              Download CV
            </Button>
            <Button
              href="#about"
              variant="outline"
              icon={<ArrowDownIcon className="h-4 w-4 text-white" />}
            >
              Scroll down
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-green-400 via-25% via-green-400/40 to-65% rounded-[60px] overflow-hidden">
            <Image
              src="/images/hero-banner-3.png"
              width={656}
              height={800}
              alt="Mohammad Reza Ghasemi"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
