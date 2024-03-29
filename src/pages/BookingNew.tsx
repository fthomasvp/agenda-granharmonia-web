import { Box, Flex, FormLabel, Heading, Input, List } from "@chakra-ui/react";
import { ChangeEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Alert, CommonAreaIcon, Empty } from "../components/ui";
import { AreaSlotItem, useAreaSlotsQuery } from "../features/areaSlot";
import {
  SkeletonBookingNew,
  TCommonArea,
  useCommonAreasQuery,
} from "../features/booking";
import { useAlertActions, useAlertIsOpen } from "../features/ui";
import { formatDateToISO8601, getCurrentDate } from "../utils";

export default function BookingNew() {
  const { name } = useParams<Pick<TCommonArea, "name">>();
  const { t } = useTranslation(["common", "glossary"]);

  const isOpen = useAlertIsOpen();
  const { close } = useAlertActions();

  const [date, setDate] = useState(formatDateToISO8601(getCurrentDate()));

  const commonAreasQuery = useCommonAreasQuery({
    commonArea: name!,
  });
  const areaSlotsQuery = useAreaSlotsQuery({
    commonAreaId: commonAreasQuery.data?.id!,
    date,
  });

  const isLoading = commonAreasQuery.isFetching || areaSlotsQuery.isFetching;

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);

    // if (!e.target.value) {
    //   areaSlotsQuery.remove();
    // }
  };

  const handleReservation = useCallback(
    (areaSlotId: string) => {
      // const data = {
      //   reservedDate: date,
      //   ownerId: "", // Get data from Zustand ?
      //   areaSlotId,
      // };
      console.log("> Submitted modal function", { areaSlotId, date });
    },
    [date]
  );

  return (
    <>
      <Heading color="blackAlpha.400" size="sm" textAlign="center" mb="2.5">
        {t(String(name))}
      </Heading>

      {name ? (
        <Flex justify="center" mt="2.5">
          <CommonAreaIcon name={name} />
        </Flex>
      ) : null}

      {commonAreasQuery.isError ? (
        <Empty />
      ) : (
        <>
          {commonAreasQuery.isFetching ? (
            <SkeletonBookingNew.Form />
          ) : (
            <Flex flex={1} align="center" justify="flex-start" mt="8">
              <Box>
                <FormLabel htmlFor="date">
                  {t("selectDate", { ns: "glossary" })}
                </FormLabel>
                <Input
                  type="date"
                  id="date"
                  min={formatDateToISO8601(getCurrentDate())}
                  value={date}
                  onChange={handleChangeDate}
                />
              </Box>
            </Flex>
          )}

          {isLoading ? (
            <SkeletonBookingNew.List />
          ) : (
            <Flex flex={6} flexDir="column" mt="8">
              {areaSlotsQuery.data && areaSlotsQuery.data.length && (
                <List spacing="4">
                  {areaSlotsQuery.data.map((item) => (
                    <AreaSlotItem
                      key={item.id}
                      onReservation={handleReservation}
                      {...item}
                    />
                  ))}
                </List>
              )}
            </Flex>
          )}
        </>
      )}

      <Alert
        isOpen={isOpen}
        header={t("reserve")}
        body={t("confirmBooking", { ns: "glossary" })}
        cancelText={t("cancel")}
        onCancel={close}
        okText={t("confirm")}
        onOk={close}
      />
    </>
  );
}
