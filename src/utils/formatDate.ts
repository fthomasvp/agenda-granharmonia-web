import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/pt-br";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.locale("pt-br");
dayjs.tz.setDefault("America/Sao_Paulo");

const ISO_8601_PATTERN = "YYYY-MM-DD";
const BRAZILIAN_PATTERN = "DD/MM/YYYY";

/**
 * Get the current UTC date, considering the timezone and
 * returns a Date object.
 */
export const getCurrentDate = () => dayjs().tz().toDate();

/**
 * Format a date into a string, using this model: `DD/MM/YYYY`.
 * If date is invalid, then returns an empty string.
 * @param date - Date object or ISO 8601 string.
 */
export const formatDateToBrazilian = (date: Date | string) => {
  if (!date) {
    return "";
  }

  return dayjs.utc(date).format(BRAZILIAN_PATTERN);
};

/**
 * Format a date into string, using this model: `YYYY-MM-DD`.
 * @param date - Date object.
 */
export const formatDateToISO8601 = (date: Date) =>
  dayjs(date).format(ISO_8601_PATTERN);

/**
 * Format a Brazilian string date into an ISO 8601 string.
 * @param date - Brazilian string date.
 */
export const formatBrazilianToISO8601 = (date: string) =>
  dayjs(date, BRAZILIAN_PATTERN).format(ISO_8601_PATTERN);

/**
 * Converts an ISO 8601 string to a Date object.
 * @param date - ISO 8601 string.
 */
export const convertISO8601ToDate = (date: string) =>
  dayjs(date, ISO_8601_PATTERN).toDate();

/**
 * Converts a Brazilian string date to a Date object.
 * @param date - Brazilian string date.
 */
export const convertBrazilianToDate = (date: string) =>
  dayjs(date, BRAZILIAN_PATTERN).toDate();

/**
 * Checks if a Brazilian string date is valid using `strict` comparison.
 * @param date - Brazilian string date.
 */
export const isValidBrazilianDate = (date: string) =>
  dayjs(date, BRAZILIAN_PATTERN, true).isValid();

/**
 * Checks if a Date object is valid.
 * @param date - Date object.
 */
export const isValidDate = (date: Date) => dayjs(date).isValid();
