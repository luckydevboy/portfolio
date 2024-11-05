import Image from "next/image";
import Link from "next/link";
import { cx } from "class-variance-authority";

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
    <div className={cx("", className)}>
      <figure className="img-box">
        <Image
          src={imgSrc}
          alt={title}
          className="img-cover"
          objectFit="cover"
          layout="fill"
        />
      </figure>
      <div>
        <div>
          <h3 className="title-1">{title}</h3>
          <div>
            {tags.map((tag, key) => (
              <span key={key}>{tag}</span>
            ))}
          </div>
        </div>

        <div>icon</div>
      </div>
      <Link href={projectLink} target="_blank"></Link>
    </div>
  );
};

export default ProjectCard;
