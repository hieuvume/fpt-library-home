
import api from "./axios";
import { Category } from "@/models/category";


const dashboardCategoryApi = {
    getCategories: (query: string) => {
        return api.get(`/dashboard/categories/?${query}`)
    },

    createCategory: (data: {
        title: string,
        description:string
    }) => {
        return api.post('/dashboard/categories', data)
    },

    deleteCategory: (id: string) => {
        return api.delete(`/dashboard/categories/${id}`)
    },
    updataCategory: (id: string, data: {
        title: string,
        description: string
    }) => {
        return api.put(`/dashboard/categories/${id}`, data)
    },
    getAllCategories: () :Promise<Category[]>=> {
        return api.get(`/dashboard/categories/getAll`)
    }

}

export { dashboardCategoryApi};