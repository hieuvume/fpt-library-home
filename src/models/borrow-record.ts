import { IDCard, User } from "./auth";
import { Book } from "./book";
import { BookTitle } from "./book-title";
import { MembershipCard } from "./membership";

export type BorrowRecord = {
  _id: string;
  user: User;
  book: Book;
  book_title: BookTitle;
  before_status: string;
  after_status: string;
  borrow_date: string;
  due_date: string;
  return_date: string;
  is_returned: boolean;
  penatly_total: number;
  status: string
};

export type dashboardBorrowRecord = {
  _id: string;
  user: Users;
  book: Book;
  book_title: BookTitle;
  before_status: string;
  after_status: string;
  borrow_date: string;
  due_date: string;
  return_date: string;
  is_returned: boolean;
  penatly_total: number;
  status: string
};
export type Users = {
  _id: string
  username: string;
  password: string;
  email: string;
  full_name: string;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  address: string;
  avatar_url: string
  id_card: IDCard;
  current_membership: MembershipCard;
  borrowed_books: string[];
  role_id: string;
  google_id: string;
  google_access_token: string;
  token_expires_at: string;
  created_at: string;
  updated_at: string;
  status: Boolean
  role: {
    role_name: string
  }
}