import {
  Button,
  Flex,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { MobileGreenCheck } from "../assets/images";
import FormVerifyCode from "../features/authentication/components/FormVerifyCode";
import { MobileContainer } from "../layouts";

export default function VerifyCode() {
  const { t } = useTranslation(["common", "glossary", "validation"]);
  const navigate = useNavigate();

  const mobileGreenCheckVariantSize = useBreakpointValue(
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

  const onSubmit = (data: string) => {
    console.log("> VerifyCode :: data", data);
  };

  return (
    <MobileContainer>
      <Flex flex={1}>
        <Button
          variant="ghost"
          leftIcon={<FaArrowLeft />}
          onClick={() => navigate(-1)}
        >
          {t("back")}
        </Button>
      </Flex>

      <Flex flex={1}>
        <Heading fontWeight="bold">{t("sentCode", { ns: "glossary" })}</Heading>
      </Flex>

      <Flex flex={1} justify="center" mb="10">
        <Image
          src={MobileGreenCheck}
          alt="Mobile green check"
          boxSize={mobileGreenCheckVariantSize}
        />
      </Flex>

      <Flex flex={2} flexDir="column">
        <FormVerifyCode onSubmit={onSubmit} />
      </Flex>
    </MobileContainer>
  );
}
