import { IServices } from "@/types/common_types";

export const organizeServices = (services: IServices) => {
  let records: { [id: number]: IServices } = [];
  services.forEach((v) => {
    records[v.typeId] = [...(records[v.typeId] ?? []), v];
  });
  return records;
};

export const parseHour = (hour: number) => {
  let h = hour % 12;
  if (h == 0) h = 12;

  const hStr = h < 10 ? `0${h}` : h.toString();
  return hStr + (hour < 12 ? " AM" : " PM");
};
