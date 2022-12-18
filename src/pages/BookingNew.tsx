import { Box, Flex, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { CommonAreaImage } from "../components/ui";
import {
  BookingNewParams,
  useAreaSlotsQuery,
  useCommonAreasQuery,
} from "../features/booking";
import { formatDateToISO8601, getCurrentDate } from "../utils";

export default function BookingNew() {
  let { commonArea } = useParams<BookingNewParams>();
  const { t } = useTranslation(["common"]);

  const [date, setDate] = useState(formatDateToISO8601(getCurrentDate()));

  const commonAreaByNameQuery = useCommonAreasQuery({
    commonArea: commonArea!,
  });
  const areaSlotsQuery = useAreaSlotsQuery({
    commonAreaId: commonAreaByNameQuery.data?.id!,
    date,
  });

  return (
    <>
      <Heading color="#272727" size="sm" textAlign="center" mb="2.5">
        {t(String(commonArea))}
      </Heading>

      {commonArea ? (
        <Flex justify="center" mt="2.5">
          <CommonAreaImage commonArea={commonArea} />
        </Flex>
      ) : null}

      <Flex flex={1} align="center" justify="flex-start" mt="8">
        <Box>
          <FormLabel htmlFor="date">Selecione uma data</FormLabel>
          <Input
            type="date"
            id="date"
            min={formatDateToISO8601(getCurrentDate())}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Box>
      </Flex>

      <Flex flex={6} flexDir="column" bg="yellow.300" mt="8">
        <VStack align="flex-start" spacing="4">
          {areaSlotsQuery.data?.map(({ id, status, timeSlot }) => (
            <Box key={id}>
              {timeSlot.startTime} - {timeSlot.finishTime}
              <p>{status}</p>
            </Box>
          ))}
        </VStack>
      </Flex>
    </>
  );
}
