import { BestBookTitleOfTheMonth, BookTitle } from "@/models/book-title";
import axios from "./axios";
import { PaginationResponse } from "@/models/pagination";

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
  }
};

export { bookTitleApi, bookTitleDashboardApi };
