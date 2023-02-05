import {
  Center,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { EmptyOrange } from "../../assets/images";

type EmptyProps = {
  customMessage?: string;
};

export default function Empty({ customMessage }: EmptyProps) {
  const { t } = useTranslation(["glossary"]);

  const emptyOrangeVariantSize = useBreakpointValue(
    {
      base: "60",
      sm: "60",
      md: "72",
      lg: "80",
      xl: "96",
    },
    {
      fallback: "md",
      ssr: false,
    }
  );

  return (
    <Center h="full">
      <VStack spacing="2">
        <Image
          boxSize={emptyOrangeVariantSize}
          src={EmptyOrange}
          alt="Empty data"
        />
        <Text color="gray.800">{t("emptyData")}</Text>
        {customMessage && <Text color="gray.800">{customMessage}</Text>}
      </VStack>
    </Center>
  );
}
