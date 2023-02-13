import type { CommonArea, TimeSlot } from "../booking";

export type AreaSlot = {
  id?: string;
  createdAt?: string;
  commonAreaId: string;
  commonArea: CommonArea;
  timeSlotId: string;
  timeSlot: TimeSlot;
  status: "AVAILABLE" | "RESERVED";
};
