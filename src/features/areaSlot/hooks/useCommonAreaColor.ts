import { ColorProps } from "@chakra-ui/react";

import { TCommonArea } from "../../booking";

export const useCommonAreaColor = (
  name: TCommonArea["name"]
): ColorProps["color"] => {
  if (name === "grill") {
    return "red.400";
  }

  if (name === "gym") {
    return "green.400";
  }

  if (name === "partyRoom") {
    return "purple.400";
  }

  return "blue.400";
};
