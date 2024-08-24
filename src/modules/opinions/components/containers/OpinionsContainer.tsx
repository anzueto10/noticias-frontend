import opinionsMock from "@/modules/opinions/mocks/opinions.json";
import { Opinion } from "../../types";
import OpinionCard from "../cards/OpinionCard";

const OpinionsContainer = async () => {
  const opinions: Array<Opinion> = await opinionsMock;
  return (
    <div className="grid gap-6">
      <ul>
        {opinions.map((opinion, index) => (
          <OpinionCard key={index} opinion={opinion} />
        ))}
      </ul>
    </div>
  );
};

export default OpinionsContainer;
