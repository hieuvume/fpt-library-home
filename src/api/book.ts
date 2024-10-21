import { BookListResponse } from '@/models/book';
import axios from './axios'; // Ensure this points to your axios instance
import { BestBookTitleOfTheMonth } from '@/models/book-title';


const bookApi = {
}

const bookDashboardApi = {
  getBooks: (page: number, pageSize: number): Promise<BookListResponse> => {
    return axios.get(`dashboard/books?page=${page}&pageSize=${pageSize}`)
  }
}

export { bookApi, bookDashboardApi }