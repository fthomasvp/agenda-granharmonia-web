import "dayjs/locale/pt-br";
import dayjs, { type ConfigType } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

dayjs.locale("pt-br");
dayjs.tz.setDefault("America/Sao_Paulo");

export { dayjs, type ConfigType };
