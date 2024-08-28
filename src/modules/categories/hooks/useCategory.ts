import { useEffect, useState } from "react";
import { Category } from "../types";
import { getCategory } from "../api/categories";
import { New } from "@/modules/news/types";
import CategoryDoesNotExitsError from "../errors/CategoryDoesNotExitsError";
import { useRouter } from "next/navigation";
import { getAllNews } from "@/modules/news/api/news";

const useCategory = (categoryId: number, token: string) => {
  const [category, setCategory] = useState<Category>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [categoriesNews, setCategoriesNews] = useState<Array<New>>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const newCategory = await getCategory({ categoryId });
        if (!newCategory) throw new CategoryDoesNotExitsError();
        setCategory(newCategory);
        const news = await getAllNews({ token });
        setCategoriesNews(
          news.filter(
            (newLy) =>
              newLy.clasificacion.id_clasificacion ===
              newCategory.id_clasificacion
          )
        );
      } catch (e) {
        if (e instanceof CategoryDoesNotExitsError) router.push("/categories/");
        setError("Failed to fetch category");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [categoryId, token]);

  return { category, loading, error, categoriesNews };
};

export default useCategory;
