import Image from "next/image";

const aboutItems = [
  {
    label: "Project done",
    number: 12,
  },
  {
    label: "Years of experience",
    number: 4,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I&#39;m Mohammad Reza Ghasemi, a Frontend Developer with over four
            years of experience building and maintaining web applications using
            React, Next.js, and TypeScript. I specialize in creating scalable UI
            components, optimizing performance, and collaborating with teams to
            deliver user-friendly solutions. Throughout my career, I&#39;ve had
            the opportunity to work with leading companies such as SnappPay,
            Fanap Plus, and Sadad, where I developed dynamic features like
            recursive comment systems, custom icon packages, and improved data
            fetching strategies. My passion for clean code and efficiency drives
            me to deliver high-quality, user-centric web experiences that meet
            business goals.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ number, label }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-green-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
