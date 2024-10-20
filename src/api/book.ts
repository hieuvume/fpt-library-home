import axios from './axios'; // Ensure this points to your axios instance


const bookApi = {
  getBooks: (page: number, pageSize: number): {books: any, totalBook: number} => {
    return axios.get(`dashboard/books?page=${page}&pageSize=${pageSize}`)
  }
}

export default bookApi