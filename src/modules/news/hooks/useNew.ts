import { useEffect, useState } from "react";
import type { New } from "../types";
import { getNew } from "../api/news";

const useNew = (token: string, newId: number) => {
  const [newLy, setNew] = useState<New>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newNews = await getNew({ newId, token });
        setNew(newNews);
      } catch (error) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [token]);

  return { newLy, loading, error };
};

export default useNew;
