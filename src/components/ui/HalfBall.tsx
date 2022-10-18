import { Image, ImageProps, useBreakpointValue } from "@chakra-ui/react";

import { Ball } from "../../assets/images";

export default function HalfBall(props: ImageProps) {
  const ballVariantSize = useBreakpointValue(
    {
      base: "12",
      sm: "14",
      md: "20",
      lg: "20",
      xl: "24",
    },
    {
      fallback: "md",
      ssr: false,
    }
  );

  return (
    <Image
      src={Ball}
      alt="Half ball"
      pos="absolute"
      boxSize={ballVariantSize}
      {...props}
    />
  );
}
