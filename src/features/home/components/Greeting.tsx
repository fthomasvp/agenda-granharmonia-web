import { Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type GreetingProps = {
  username: string;
};

export default function Greeting({ username }: GreetingProps) {
  const { t } = useTranslation(["glossary", "common"]);

  return (
    <>
      <Heading fontWeight="semibold">
        {t("hello", { ns: "common" })},{" "}
        <Text as="span" color="#363E91">
          {username}
        </Text>
        <Text as="span" color="orange.400">
          .
        </Text>
      </Heading>
      <Text color="#666666" fontWeight="light">
        {t("findNextTime")}
      </Text>
      <Text color="#666666" fontWeight="light">
        {t("availableYourBookings").toLowerCase()}
      </Text>
    </>
  );
}
