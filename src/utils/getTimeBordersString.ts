import { dateConfig } from "@/constants/dateConfig";

export const getTimeBordersString = (startStr: string, endStr: string) => {
  const start = new Date(Date.parse(startStr));
  const end = new Date(Date.parse(endStr));

  return `${start.toLocaleString("en-US", dateConfig)} - ${end.toLocaleString("en-US", dateConfig)}`;
};
