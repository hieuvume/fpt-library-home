import { Setting } from "@/models/setting"
import axios from "axios"

const API_URL = "http://localhost:9999"

export const getSetting = (): Promise<Setting> => {
    return axios.get(`${API_URL}/settings`)
}