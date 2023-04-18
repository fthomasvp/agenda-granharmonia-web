import { Image } from "@chakra-ui/react";
import { useMemo } from "react";

import {
  GrillRed,
  GymGreen,
  PartyRoomPurple,
  SwimmingPoolBlue,
} from "../../assets/images";
import { TCommonArea } from "../../features/booking";

export default function CommonAreaIcon({ name }: Pick<TCommonArea, "name">) {
  const icons = useMemo(
    () => ({
      gym: GymGreen,
      grill: GrillRed,
      partyRoom: PartyRoomPurple,
      swimmingPool: SwimmingPoolBlue,
    }),
    []
  );

  return <Image alt="Common area" src={icons[name]} />;
}
