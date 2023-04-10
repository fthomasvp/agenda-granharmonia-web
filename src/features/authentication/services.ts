import api from "../../api";
import type { TAuth } from "./types";

export const authService = async (body: TAuth) => {
  const { data } = await api.post("/Auth", body);

  return data;
};
