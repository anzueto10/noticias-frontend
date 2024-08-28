import { useEffect, useState } from "react";
import { Category } from "../types";
import { getAllCategories } from "../api/categories";

const useCategories = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const newCategories = await getAllCategories();
        setCategories(newCategories);
      } catch (error) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
