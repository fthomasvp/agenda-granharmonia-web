export type TCommonArea = {
  id?: string;
  createdAt?: string;
  name: "gym" | "grill" | "swimmingPool" | "partyRoom";
};

export type TTimeSlot = {
  id?: string;
  createdAt?: string;
  startTime: string;
  finishTime: string;
};
