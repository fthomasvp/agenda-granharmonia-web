import { Box, Flex, FormLabel, Heading, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { CommonAreaImage } from "../components/ui";
import { AreaSlotList } from "../features/areaSlot";
import { CommonArea, useCommonAreasQuery } from "../features/booking";
import { formatDateToISO8601, getCurrentDate } from "../utils";

export default function BookingNew() {
  let { name } = useParams<Pick<CommonArea, "name">>();
  const { t } = useTranslation(["common", "glossary"]);

  const [date, setDate] = useState(formatDateToISO8601(getCurrentDate()));

  const commonAreaByNameQuery = useCommonAreasQuery({
    commonArea: name!,
  });

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);

    // if (!e.target.value) {
    //   areaSlotsQuery.remove();
    // }
  };

  return (
    <>
      <Heading color="blackAlpha.400" size="sm" textAlign="center" mb="2.5">
        {t(String(name))}
      </Heading>

      {name ? (
        <Flex justify="center" mt="2.5">
          <CommonAreaImage name={name} />
        </Flex>
      ) : null}

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

      <Flex flex={6} flexDir="column" mt="8">
        <AreaSlotList
          commonAreaId={commonAreaByNameQuery.data?.id!}
          commonAreaName={name!}
          date={date}
        />
      </Flex>
    </>
  );
}
