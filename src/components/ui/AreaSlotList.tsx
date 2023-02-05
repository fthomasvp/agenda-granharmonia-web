import { List } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AreaSlot, CommonArea } from "../../features/booking";

import { getCommonAreaColor } from "../../utils";
import AreaSlotItem from "./AreaSlotItem";
import Empty from "./Empty";
import Loading from "./Loading";

type AreaSlotListProps = {
  data?: AreaSlot[];
  isFetching: boolean;
  name: Pick<CommonArea, "name">["name"];
};

export default function AreaSlotList({
  data,
  isFetching,
  name,
}: AreaSlotListProps) {
  const { t } = useTranslation(["glossary"]);

  if (isFetching) {
    return <Loading color={getCommonAreaColor(name!) as string} />;
  }

  if (!data?.length) {
    return <Empty customMessage={t("selectDateToSearch")} />;
  }

  return (
    <List spacing="4">
      {data?.map((item) => (
        <AreaSlotItem key={item.id} {...item} />
      ))}
    </List>
  );
}
