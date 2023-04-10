import { TCommonArea } from "./types";

export const commonAreaKeys = {
  all: [{ scope: "commonAreas" }] as const,
  lists: () => [{ ...commonAreaKeys.all[0], entity: "list" }] as const,
  list: (commonArea: TCommonArea["name"]) =>
    [{ ...commonAreaKeys.lists()[0], commonArea }] as const,
};

export type TCommonAreaKeyList = ReturnType<typeof commonAreaKeys["list"]>;
