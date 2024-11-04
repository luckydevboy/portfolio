import Image from "next/image";

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-">
          <p>
            I'm Mohammad Reza Ghasemi, a frontend developer with over four years
            of experience building dynamic, user-friendly web applications.
            Passionate about creating seamless digital experiences, I specialize
            in React, Next.js, TypeScript, and Node.js to craft scalable and
            responsive designs. I've had the opportunity to work with companies
            like SADAD and Fanap Plus, contributing to projects that emphasize
            functionality and design excellence. Let's connect and build
            something amazing together!
          </p>
          <div>
            {aboutItems.map(({ number, label }, key) => (
              <div key={key}>
                <div>
                  <span>{number}</span>
                  <span>+</span>
                </div>

                <p>{label}</p>
              </div>
            ))}

            <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
