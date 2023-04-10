import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Collapse,
  Flex,
  Heading,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FallbackProps } from "react-error-boundary";
import { useTranslation } from "react-i18next";

import { HalfBall } from ".";
import { GranHarmoniaLogo, PersonBlueWarning } from "../../assets/images";
import { useVariantSize } from "../../features/ui/hooks";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const { t } = useTranslation(["glossary", "common"]);
  const { isOpen, onToggle } = useDisclosure();

  const personBlueWarningVariantSize = useVariantSize();

  return (
    <>
      <HalfBall right={0} />

      <Flex justify="center" mt="8">
        <Image
          src={GranHarmoniaLogo}
          alt="Blue Gran Harmonia word with orange Agenda word below"
        />
      </Flex>

      <Flex flex={1} flexDir="column" justify="center" align="center">
        <Flex justify="center" mt="8">
          <Image
            alt="Person seeing a blue warning"
            src={PersonBlueWarning}
            boxSize={personBlueWarningVariantSize}
          />
        </Flex>

        <Flex align="center" justify="center">
          <Stack spacing={4}>
            <Heading as="h1" size="4xl" noOfLines={1} textAlign="center">
              4 0 0
            </Heading>

            <Alert
              status="error"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <AlertTitle>{error.name}</AlertTitle>
              <AlertDescription maxH="48" overflowY="auto">
                <Collapse startingHeight={20} in={isOpen}>
                  {error.message}
                </Collapse>
                <Button variant="unstyled" size="sm" onClick={onToggle} mt="2">
                  {t("show", { ns: "common" })}{" "}
                  {(isOpen
                    ? t("less", { ns: "common" })
                    : `${t("more", { ns: "common" })}...`
                  ).toLowerCase()}
                </Button>
              </AlertDescription>
            </Alert>

            <Flex justify="center">
              <Button variant="solid" onClick={resetErrorBoundary}>
                {t("tryAgain")}
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
