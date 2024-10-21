export type User = {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string;
  phone_number: string;
  created_at: string;
  updated_at: string;
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

export type Brrowrd_record= {
  borrowDate: Date;
  dueDate: Date;
  returnDate: Date | null;
  isReturned: boolean;
  penalty: number;
  book: {
    title: string;
    author: string[];
    depscription:string;
    categories: string[];
    memberships: {
      name: string;
      priceMonthly: number;
      priceYearly: number;
    }[];
    section: string;
    shelf: string;
    floor: number;
    position: number;
  }
}
