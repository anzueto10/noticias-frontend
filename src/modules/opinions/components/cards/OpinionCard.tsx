import Link from "next/link";
import type { OpinionCardProps } from "../../types";

const OpinionCard: React.FC<OpinionCardProps> = ({ opinion }) => {
  const { author, new: newLy } = opinion;
  return (
    <div className="flex items-start space-x-4 group">
      <img
        alt={author.name}
        className="rounded-full object-cover"
        height="100"
        src={author.photo}
        style={{
          aspectRatio: "100/100",
        }}
        width="100"
      />
      <div>
        <h3 className="text-lg font-semibold group-hover:text-highlight transition-colors">
          <Link href="#">{newLy.titulo}</Link>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Por {author.name}
        </p>
      </div>
    </div>
  );
};

export default OpinionCard;
