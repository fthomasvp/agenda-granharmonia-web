import { Image } from "@chakra-ui/react";

import {
  GrillRed,
  GymGreen,
  PartyRoomPurple,
  SwimmingPoolBlue,
} from "../../assets/images";
import { BookingNewParams } from "../../features/booking";

export default function CommonAreaImage({ commonArea }: BookingNewParams) {
  const getCommonAreaImage = () => {
    if (commonArea === "gym") {
      return GymGreen;
    }

    if (commonArea === "grill") {
      return GrillRed;
    }

    if (commonArea === "partyRoom") {
      return PartyRoomPurple;
    }

    return SwimmingPoolBlue;
  };

  return <Image alt="Common area" src={getCommonAreaImage()} />;
}
