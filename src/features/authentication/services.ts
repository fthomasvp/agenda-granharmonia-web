import api from "../../api";
import type { AuthLogin } from "./types";

export const loginService = async (body: AuthLogin) => {
  const { data } = await api.post("/users", body);

  return data;
};
