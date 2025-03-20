import { formatDate, formatDistance } from "date-fns";

export const createdAtDate = (date: string) => {
  return formatDate(new Date(date), "dd/MM/yyyy");
};

export const dateDistanceFrom = (date: string, suffix = true) => {
  return formatDistance(new Date(date), new Date(), { addSuffix: suffix });
};
