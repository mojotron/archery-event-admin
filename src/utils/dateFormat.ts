import { formatDate, formatDistance, differenceInDays } from "date-fns";

export const createdAtDate = (date: string) => {
  return formatDate(new Date(date), "dd/MM/yyyy");
};

export const attendAtDateTime = (date: string) => {
  return formatDate(new Date(date), "dd/MM/yyyy - hh:mm");
};

export const dateDistanceFrom = (date: string, suffix = true) => {
  return formatDistance(new Date(date), new Date(), { addSuffix: suffix });
};

export const dateDistanceTo = (date: string, suffix = true) => {
  return formatDistance(new Date(date), new Date(), { addSuffix: suffix });
};

export const daysDistance = (date: string) => {
  return differenceInDays(new Date(date), new Date());
};
