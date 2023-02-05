import { Image } from "@chakra-ui/react";

import {
  GrillRed,
  GymGreen,
  PartyRoomPurple,
  SwimmingPoolBlue,
} from "../../assets/images";
import { CommonArea } from "../../features/booking";

export default function CommonAreaImage({ name }: Pick<CommonArea, "name">) {
  const getCommonAreaImage = () => {
    if (name === "gym") {
      return GymGreen;
    }

    if (name === "grill") {
      return GrillRed;
    }

    if (name === "partyRoom") {
      return PartyRoomPurple;
    }

    return SwimmingPoolBlue;
  };

  return <Image alt="Common area" src={getCommonAreaImage()} />;
}
