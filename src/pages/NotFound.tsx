import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { GranHarmoniaLogo } from "../assets/images";
import { HalfBall } from "../components/ui";
import { MobileContainer } from "../layouts";

export default function NotFound() {
  const { t } = useTranslation(["glossary"]);
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <HalfBall right={0} />

      <Flex justify="center" mt="8">
        <Image src={GranHarmoniaLogo} alt="Gran Harmonia Logo" />
      </Flex>

      <Flex align="center" justify="center" flex={1}>
        <Stack spacing={4}>
          <Heading as="h1" size="4xl" noOfLines={1} textAlign="center">
            4 0 4
          </Heading>
          <Heading as="h5" size="sm" textAlign="center">
            {t("pageNotFound")}
          </Heading>
          <Text>{t("pageNotFound_description")}</Text>

          <Flex justify="center">
            <Button variant="link" onClick={() => navigate("/home")}>
              {t("backToHomePage")}
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </MobileContainer>
  );
}
