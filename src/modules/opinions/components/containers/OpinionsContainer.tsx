import opinionsMock from "@/modules/opinions/mocks/opinions.json";
import type { Opinion } from "@/modules/opinions/types";

import OpinionCard from "@/modules/opinions/components/cards/OpinionCard";

const OpinionsContainer = async () => {
  const opinions: Array<Opinion> = await opinionsMock;
  return (
    <div className="grid gap-6">
      <ul>
        {opinions.map((opinion, index) => (
          <li key={index}>
            <OpinionCard opinion={opinion} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpinionsContainer;
