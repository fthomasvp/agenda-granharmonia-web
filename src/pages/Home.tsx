import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading fontWeight="semibold" size="6">
        Olá,{" "}
        <Text as="span" color="#363E91">
          Username
        </Text>
        <Text as="span" color="#EB6A3F">
          .
        </Text>
      </Heading>
    </>
  );
}
