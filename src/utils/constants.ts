export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).{6,}$/gm;

export const STATUSES = {
  AVAILABLE: "AVAILABLE",
};
export const DATE_PATTERNS = {
  ISO_8601: "YYYY-MM-DD",
  BRAZILIAN: "DD/MM/YYYY",
};

/** Use this key to find Authentication data in local storage. */
export const LOCAL_STORAGE_AUTH_KEY = "agenda-auth";

export const SECOND_IN_MS = 1000;
