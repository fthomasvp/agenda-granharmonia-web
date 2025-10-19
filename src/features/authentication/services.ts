import {apiClient} from "@/lib/axios";
import type { TAuth } from "./types";

export const authService = async (body: TAuth) => {
  const { data } = await apiClient.post("/Auth", body);

  return data;
};
