import { CommonArea } from "./types";

export const commonAreaKeys = {
  all: [{ scope: "commonAreas" }] as const,
  lists: () => [{ ...commonAreaKeys.all[0], entity: "list" }] as const,
  search: (commonArea: CommonArea["name"]) =>
    [{ ...commonAreaKeys.all[0], commonArea }] as const,
};
