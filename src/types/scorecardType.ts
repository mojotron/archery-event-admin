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
