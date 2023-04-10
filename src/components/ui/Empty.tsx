import { Center, Image, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { EmptyOrange } from "../../assets/images";
import { useVariantSize } from "../../features/ui/hooks";

type EmptyProps = {
  customMessage?: string;
};

export default function Empty({ customMessage }: EmptyProps) {
  const { t } = useTranslation(["glossary"]);

  const emptyOrangeVariantSize = useVariantSize();

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
