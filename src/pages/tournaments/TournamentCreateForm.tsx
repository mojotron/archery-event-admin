import { useState } from "react";
import { RulesEnum } from "../../types/rulesType";

type FormState = {
  rules: RulesEnum;
  title: string;
  attendAt: string;
  description: string;
  address: string;
  rounds: number;
  organizedById?: string;
};

const TournamentCreateForm = () => {
  const [] = useState<FormState>({});
  return <div></div>;
};

export default TournamentCreateForm;
