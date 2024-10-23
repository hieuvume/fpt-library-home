import { Users } from "@/models/user"
import axios from "axios"

const API_URL = "http://localhost:9999"

export const getUsers = (): Promise<Users[]> => {
    return axios.get(`${API_URL}/dashboard/users`)
}

