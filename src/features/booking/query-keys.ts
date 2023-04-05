import { CommonArea } from "./types";

export const commonAreaKeys = {
  all: ["commonAreas"] as const,
  lists: () => [...commonAreaKeys.all, "list"] as const,
  list: (commonArea: CommonArea["name"]) =>
    [...commonAreaKeys.lists(), commonArea] as const,
};
