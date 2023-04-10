import { useToast as useChakraToast } from "@chakra-ui/react";

import { SECOND_IN_MS } from "../../../utils";

export const useToast = () => {
  const toast = useChakraToast({
    duration: 10 * SECOND_IN_MS,
    isClosable: true,
    position: "bottom-left",
  });

  return toast;
};
