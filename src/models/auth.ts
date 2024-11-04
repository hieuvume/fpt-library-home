import { MembershipCard } from "./membership";

export type User = {
  id: string
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

export type IDCard = {
  id_number: number;
  date: string;
  place: string;
}

export type SignInResponse = {
  access_token: string;
  user: User;
}
export type UserProfile = {
  _id: string;
  email: string;
  password: string;
  full_name: string;
  phone_number: string;
  address: string;
  id_card: {
    id_number: string;
    date: Date;
    place: string;
  };
  borrowed_books: string[];
  role: {
    _id: string;
    role_name: string;
    v: number;
  };
  current_membership_id?: {
    _id: string;
    user_id: string;
    membership_id: {
      _id: string;
      name: string;
      price_monthly: number;
      price_yearly: number;
      color: string;
    };
    card_number: string;
    start_date: Date;
    end_date: Date;
    price: number;
    status: string;
    created_at: Date;
  };
  avatar_url: string;
  created_at: Date;
  updated_at: Date;
  __v: number;
};

export type Brrowrd_record = {
  borrowDate: string;
  dueDate: string;
  returnDate: string | null;
  isReturned: boolean;
  penalty: number;
  book: {
    title: string;
    author: string[];
    description: string;
    categories: string[];
    memberships: {
      name: string;
      priceMonthly: number;
      priceYearly: number;
    }[];
    librarian: {
      name: string;
      email: string;
      phone: string;
      avatar: string;
    };
    section: string;
    shelf: string;
    floor: number;
    position: number;
  };
};

