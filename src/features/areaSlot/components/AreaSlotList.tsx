import { List } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Alert, Empty, Loading } from "../../../components/ui";
import { TCommonArea } from "../../../features/booking";
import { useAlertActions, useIsOpenAlert } from "../../ui";
import { useAreaSlotsQuery, useCommonAreaColor } from "../hooks";
import AreaSlotItem from "./AreaSlotItem";

type AreaSlotListProps = {
  commonAreaId: string;
  commonAreaName: Pick<TCommonArea, "name">["name"];
  date: string;
};

export default function AreaSlotList({
  commonAreaId,
  commonAreaName,
  date,
}: AreaSlotListProps) {
  const { t } = useTranslation(["common", "glossary"]);

  const [areaSlotId, setAreaSlotId] = useState("");

  const isOpen = useIsOpenAlert();
  const { setIsOpen } = useAlertActions();
  const commonAreaColor = useCommonAreaColor(commonAreaName);

  const { data, isFetching } = useAreaSlotsQuery({
    commonAreaId,
    date,
  });

  const handleClose = () => {
    setIsOpen(false);
    setAreaSlotId("");
  };

  const handleReservation = () => {
    // const data = {
    //   reservedDate: date,
    //   ownerId: "",
    //   areaSlotId,
    // };
    console.log("> Submitted modal function", { areaSlotId, date });

    handleClose();
  };

  if (isFetching) {
    return <Loading color={commonAreaColor as string} />;
  }

  if (!data?.length) {
    return (
      <Empty customMessage={t("selectDateToSearch", { ns: "glossary" })} />
    );
  }

  return (
    <>
      <List spacing="4">
        {data?.map((item) => (
          <AreaSlotItem key={item.id} onReservation={setAreaSlotId} {...item} />
        ))}
      </List>

      <Alert
        isOpen={isOpen}
        header={t("reserve")}
        body={t("confirmBooking", { ns: "glossary" })}
        cancelText={t("cancel")}
        onCancel={handleClose}
        okText={t("confirm")}
        onOk={handleReservation}
      />
    </>
  );
}
