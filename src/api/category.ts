
import api from "./axios";
import { Category } from "@/models/category";


const dashboardCategoryApi = {
    getCategories: (query: string) => {
        return api.get(`/dashboard/categories/?${query}`)
    },

}

export { dashboardCategoryApi};