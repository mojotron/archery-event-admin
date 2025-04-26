import { RulesEnum } from "./rulesType";

export enum AnimalHit {
  center = "center",
  vital = "vital",
  body = "body",
  miss = "miss",
}

export enum AnimalHitWA {
  bullseye = "bullseye",
  center = "center",
  vital = "vital",
  body = "body",
  miss = "miss",
}

export type Score3DType = {
  arrow: number;
  hit: AnimalHit;
};

export type ScoreWA3DType = {
  first: AnimalHitWA;
  second: AnimalHitWA;
};

export type ScoreWAType = {
  first: number;
  second: number;
  third: number;
  isBullseye: boolean;
};

export type ScorecardInfoType = {
  id: string;
  rules: RulesEnum;
  tournament: {
    id: string;
    title: string;
    season?: {
      id: string;
      title: string;
    };
  };
};
