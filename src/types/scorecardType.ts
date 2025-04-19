export enum AnimalHit {
  center = "center",
  vital = "vital",
  body = "body",
  miss = "miss",
}

export type Score3DType = {
  arrow: number;
  hit: AnimalHit;
};

export type ScoreWAType = {
  first: number;
  second: number;
  third: number;
  isBullseye: boolean;
};
