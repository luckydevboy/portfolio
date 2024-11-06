import Link from "next/link";
import { cx } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";

type Props = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  className?: string;
};

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  className,
}: Props) => {
  return (
    <div
      className={cx(
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 " +
          "active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors",
        className,
      )}
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} className="img-cover" loading="lazy" />
      </figure>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400
               bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          className="w-11 h-11 rounded-lg grid place-items-center bg-green-400
         text-zinc-950 shrink-0"
        >
          <ArrowRightIcon className="-rotate-45 h-6 w-6" />
        </div>
      </div>
      <Link
        href={projectLink}
        target="_blank"
        className="absolute inset-0"
      ></Link>
    </div>
  );
};

export default ProjectCard;
