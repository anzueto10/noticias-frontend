"use client";
import OpinionCard from "@/modules/opinions/components/cards/OpinionCard";
import useOpinions from "../../hooks/useOpinions";

const OpinionsContainer = () => {
  const { opinions } = useOpinions();
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
