export type CommonArea = {
  id?: string;
  createdAt?: string;
  name: "gym" | "grill" | "swimmingPool" | "partyRoom";
};

export type TimeSlot = {
  id?: string;
  createdAt?: string;
  startTime: string;
  finishTime: string;
};
