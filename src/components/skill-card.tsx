import Image from "next/image";
import { cx } from "class-variance-authority";

type Props = {
  imgSrc: string;
  desc: string;
  label: string;
  className?: string;
};

const SkillCard = ({ imgSrc, desc, label, className }: Props) => {
  return (
    <div
      className={cx(
        "flex items-center gap-3 ring-2 ring-inset " +
          "ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group",
        className,
      )}
    >
      <figure
        className="bg-zinc-700/50 rounded-lg overflow-hidden
       w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors"
      >
        <Image src={imgSrc} alt={label} width={32} height={32} />
      </figure>

      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
