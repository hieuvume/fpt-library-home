import { BestBookTitleOfTheMonth, BookTitle } from "@/models/book-title";
import axios from "./axios";
import { PaginationResponse } from "@/models/pagination";
import { get } from "http";

const bookTitleApi = {
  getBestOfTheMonth: (subMonth: number): Promise<BestBookTitleOfTheMonth[]> => {
    return axios.get(`book-titles/best-of-the-month?subMonth=${subMonth}`);
  },
  search: (query: string): Promise<PaginationResponse<BookTitle>> => {
    return axios.get(`book-titles/search?${query}`);
  },
  getDetailsById: (id: string): Promise<BookTitle> => {
    return axios.get(`book-titles/${id}/details`);
  },
  borrowBook: (id: string): Promise<any> => {
    return axios.post(`book-titles/${id}/borrow`);
  },
};

const bookTitleDashboardApi = {
  getbookTitles: (query): Promise<BookTitle> => {
    return axios.get(`book-titles-dashboard/get-all?${query}`);
  },
  getDetailsById: (id: string): Promise<BookTitle> => {
    return axios.get(`book-titles-dashboard/get-by-id/${id}`);
  },
  deleteCategory: (id: string,categoriesId): Promise<any> => {
    return axios.delete(`book-titles-dashboard/${id}/categories/${categoriesId}`);
  },
  deleteMembership: (id: string,membershipId): Promise<any> => {
    return axios.delete(`book-titles-dashboard/${id}/memberships/${membershipId}`);
  },
  getMemberships(): Promise<any> {
    return axios.get(`/membership-dashboard/list`);
  },
  updateBookTitle: (id: string, data): Promise<any> => {
    return axios.put(`book-titles-dashboard/update-bookTitle/${id}`, data);
  }
};

export { bookTitleApi, bookTitleDashboardApi };
