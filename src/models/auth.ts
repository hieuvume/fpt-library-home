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