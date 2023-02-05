export type CommonArea = {
  id: string;
  createdAt: string;
  name: "gym" | "grill" | "swimmingPool" | "partyRoom";
};

export type TimeSlot = {
  createdAt: string;
  id: string;
  startTime: string;
  finishTime: string;
};

export type AreaSlot = {
  id: string;
  createdAt: string;
  commonAreaId: string;
  commonArea: CommonArea;
  timeSlotId: string;
  timeSlot: TimeSlot;
  status: "AVAILABLE" | "RESERVED";
};
