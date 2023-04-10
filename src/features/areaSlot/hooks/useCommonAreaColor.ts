import { ColorProps } from "@chakra-ui/react";

import { CommonArea } from "../../booking";

export const useCommonAreaColor = (
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
