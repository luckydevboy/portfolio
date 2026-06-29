export const navLinks = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Projects", href: "#projects" },
  { num: "04", label: "Skills", href: "#skills" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/luckydevboy", arrow: "↗" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mrghasemi1992/", arrow: "↗" },
  { label: "Twitter", href: "https://x.com/luckydevboy", arrow: "↗" },
];

export const experience = [
  {
    period: "2022 — Present",
    type: "Full-time",
    role: "Senior Frontend Developer",
    company: "SnappPay",
    bullets: [
      "Led the development of core financial product features using React and Next.js, serving millions of active users.",
      "Built scalable UI component libraries and improved front-end architecture across multiple product teams.",
      "Drove performance optimizations that significantly reduced load times and improved Core Web Vitals scores.",
    ],
  },
  {
    period: "2021 — 2022",
    type: "Full-time",
    role: "Frontend Developer",
    company: "Fanap Plus",
    bullets: [
      "Developed dynamic features including recursive comment systems and real-time data flows.",
      "Created a custom icon package adopted across multiple internal products, streamlining design-to-code handoff.",
      "Improved data-fetching strategies and state management patterns used across the engineering team.",
    ],
  },
  {
    period: "2020 — 2021",
    type: "Full-time",
    role: "Frontend Developer",
    company: "Sadad",
    bullets: [
      "Built responsive, accessible web interfaces for payment and banking products used by thousands daily.",
      "Collaborated closely with design and backend teams to deliver high-quality, user-centric solutions on schedule.",
    ],
  },
];

export const projects = [
  {
    num: "01",
    title: "Nazanin Portfolio",
    desc: "A multilingual personal portfolio built with Next.js, TailwindCSS, and i18n internationalization — pixel-perfect across all breakpoints.",
    tags: ["Next.js", "TailwindCSS", "i18n"],
    demo: "https://nazaninnamjoo.ir",
    repo: "#",
  },
  {
    num: "02",
    title: "Personal Portfolio",
    desc: "My own portfolio site — this one — built with Next.js, GSAP scroll animations, and Lenis smooth scrolling for a polished feel.",
    tags: ["Next.js", "GSAP", "Lenis", "TailwindCSS"],
    demo: "https://www.mrghasemi1992.ir",
    repo: "https://github.com/luckydevboy/portfolio",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES2023+)", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Redux Toolkit", "React Query", "Zustand"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Framer Motion"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Playwright"],
  },
  {
    title: "Tooling / CI-CD",
    items: ["Git", "GitHub Actions", "Vite", "Webpack", "Docker", "Figma", "Vercel"],
  },
];
