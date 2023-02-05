import { ColorProps } from "@chakra-ui/react";

import { CommonArea } from "../features/booking";

export const getCommonAreaColor = (
  name: CommonArea["name"]
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
