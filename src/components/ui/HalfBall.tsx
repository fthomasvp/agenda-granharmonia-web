import { Image, ImageProps } from "@chakra-ui/react";

import { Ball } from "../../assets/images";
import { useVariantSize } from "../../features/ui/hooks";

export default function HalfBall(props: ImageProps) {
  const ballVariantSize = useVariantSize({
    base: "12",
    sm: "14",
    md: "20",
    lg: "20",
    xl: "24",
  });

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
