import { extendTheme } from "@chakra-ui/react";

import { baseColors } from "./colors";
import { baseFonts } from "./fonts";

export const baseTheme = extendTheme({
  fonts: baseFonts,
  colors: baseColors,
  components: {
    Text: {
      baseStyle: {
        color: "whiteAlpha.900",
        fontSize: ["sm", "md", "lg"],
      },
    },
  },
});
