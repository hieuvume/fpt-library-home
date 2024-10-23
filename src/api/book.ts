import { BookCreateRequest, BookListResponse } from '@/models/book';
import axios from './axios'; // Ensure this points to your axios instance



const bookApi = {
  getBookById: (id: string): Promise<BookCreateRequest> => {
    return axios.get(`books/${id}`)
  }
}

const bookDashboardApi = {
  getBooks: (page: number, pageSize: number): Promise<BookListResponse> => {
    return axios.get(`dashboard/books?page=${page}&pageSize=${pageSize}`)
  }
}

export { bookApi, bookDashboardApi }