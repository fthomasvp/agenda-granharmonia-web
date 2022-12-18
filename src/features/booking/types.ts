export type BookingCommonAreas = "gym" | "grill" | "swimmingPool" | "partyRoom";

export type BookingNewParams = {
  commonArea: BookingCommonAreas;
};

export type CommonArea = {
  id: string;
  createdAt: string;
  name: string;
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
  status: string;
};
