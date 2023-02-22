import { Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type GreetingProps = {
  username: string;
};

// TODO: add a prop called `message` to display custom messages.
export default function Greeting({ username }: GreetingProps) {
  const { t } = useTranslation(["glossary", "common"]);

  return (
    <>
      <Heading fontWeight="semibold">
        {t("hello", { ns: "common" })},{" "}
        <Heading as="span" color="blue.600">
          {username}
        </Heading>
        <Heading as="span" color="orange.400">
          .
        </Heading>
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
