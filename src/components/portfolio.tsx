import { ProjectCard } from "@/components";

const portfolios = [
  {
    imgSrc: "/images/nazanin-portfolio.png",
    title: "Nazanin Portfolio",
    tags: ["Next.js", "TailwindCSS", "i18n"],
    projectLink: "https://nazaninnamjoo.ir",
  },
  {
    imgSrc: "/images/mreza-portfolio.png",
    title: "My Portfolio",
    tags: ["Next.js", "GSAP", "Lenis"],
    projectLink: "https://www.mrghasemi1992.ir",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {portfolios.map(({ imgSrc, projectLink, tags, title }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              projectLink={projectLink}
              title={title}
              tags={tags}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
