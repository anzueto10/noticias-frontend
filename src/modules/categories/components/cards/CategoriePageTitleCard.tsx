import type { CategoryCardProps } from "@/modules/categories/types";

const CategoriePageTitleCard: React.FC<CategoryCardProps> = ({
  category,
  Icon,
}) => {
  const { nombre } = category;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
          {nombre}
        </h1>
        <p className="text-muted-light dark:text-muted-dark max-w-[700px]">
          Mantente al día con las últimas innovaciones y avances en el mundo de
          la {nombre.toLocaleLowerCase()}.
        </p>
      </div>
      {Icon && <Icon className="text-highlight size-12" />}
    </div>
  );
};

export default CategoriePageTitleCard;
