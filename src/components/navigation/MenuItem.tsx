import { Button, Flex, LinkBox, LinkOverlay, useToken } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import { useLocation } from "react-router-dom";

type Props = {
  name: string;
  path: string;
  icon: IconType;
};

export default function MenuItem({ icon: Icon, name, path }: Props) {
  const { t } = useTranslation(["common"]);
  const location = useLocation();
  const [orange400, gray800] = useToken("colors", ["orange.400", "gray.800"]);

  const getPathColor = () =>
    location.pathname.includes(path) ? orange400 : gray800;

  return (
    <LinkBox w="100%">
      <Button
        variant="ghost"
        iconSpacing="3"
        w="100%"
        leftIcon={<Icon color={getPathColor()} />}
      >
        <Flex flex={1}>
          <LinkOverlay href={path} color={getPathColor()}>
            {t(name)}
          </LinkOverlay>
        </Flex>
      </Button>
    </LinkBox>
  );
}
