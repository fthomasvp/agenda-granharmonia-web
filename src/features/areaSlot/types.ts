import type { TCommonArea, TTimeSlot } from "../booking";

export type TAreaSlot = {
  id?: string;
  createdAt?: string;
  commonAreaId: string;
  commonArea: TCommonArea;
  timeSlotId: string;
  timeSlot: TTimeSlot;
  status: "AVAILABLE" | "RESERVED";
};
