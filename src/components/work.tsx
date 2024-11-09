import { ProjectCard } from "@/components";

const works = [
  {
    imgSrc: "/images/nazanin-portfolio.png",
    title: "Nazanin Portfolio",
    tags: ["Next.js", "TailwindCSS", "i18n"],
    projectLink: "https://nazaninnamjoo.ir",
  },
  // {
  //   imgSrc: "/images/twinkle.jpg",
  //   title: "Simple Task Management",
  //   tags: ["Monorepo", "Next.js", "TailwindCSS"],
  //   projectLink: "https://twinkle.ir",
  // },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, projectLink, tags, title }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              projectLink={projectLink}
              title={title}
              tags={tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
