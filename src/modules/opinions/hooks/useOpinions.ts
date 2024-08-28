import { useEffect, useState } from "react";
import { Opinion } from "../types";
import opinionsMock from "@/modules/opinions/mocks/opinions.json";

const useOpinions = () => {
  const [opinions, setOpinions] = useState<Array<Opinion>>([]);

  useEffect(() => {
    setOpinions(opinionsMock);
  }, []);

  return { opinions };
};

export default useOpinions;
