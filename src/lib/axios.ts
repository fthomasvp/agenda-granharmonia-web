import axios from "axios";
import { env } from "@/utils/env";

export const apiClient = axios.create({
	baseURL: env.VITE_API_BASE_URL,
});
