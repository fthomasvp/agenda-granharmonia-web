import { Image } from "@chakra-ui/react";

import { OxentiLabLogo } from "../../assets/images";

export default function OxentiLabStamp() {
  return (
    <Image
      borderRadius="full"
      boxSize="48px"
      src={OxentiLabLogo}
      alt="Oxenti Lab Logo"
    />
  );
}
