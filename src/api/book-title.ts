import { BestBookTitleOfTheMonth } from '@/models/book-title';
import axios from './axios'; 


const bookTitleApi = {
  getBestOfTheMonth: (subMonth: number): Promise<BestBookTitleOfTheMonth[]> => {
    return axios.get(`book-titles/best-of-the-month?subMonth=${subMonth}`)
  }
}

const bookTitleDashboardApi = {
}

export { bookTitleApi, bookTitleDashboardApi };
