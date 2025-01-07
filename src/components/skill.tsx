import { SkillCard } from "@/components";

const skillItem = [
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Language",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Library",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    desc: "Markup Language",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Library",
  },
  {
    imgSrc: "/images/nextjs.svg",
    label: "Next.js",
    desc: "Framework",
  },
  {
    imgSrc: "/images/redux.svg",
    label: "Redux",
    desc: "State Management",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/vite.svg",
    label: "Vite",
    desc: "Frontend Tooling",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Containerization",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essentials Tools I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, desc, label }, key) => (
            <SkillCard
              className="reveal-up"
              key={key}
              imgSrc={imgSrc}
              desc={desc}
              label={label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
