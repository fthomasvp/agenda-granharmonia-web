import api from "../../api";
import type { AuthLogin } from "./types";

export const authService = async (body: AuthLogin) => {
  const { data } = await api.post("/auth", body);

  return data;
};
