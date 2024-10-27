export type Users = {
    id: string
    username: string;
    password: string;
    email: string;
    full_name: string;
    date_of_birth: Date;
    phone_number: string;
    id_card: object;
    current_membership_id: string;
    borrowed_books: string[];
    role_id: string;
    google_id: string;
    google_access_token: string;
    token_expires_at: Date;
    created_at: Date;
    updated_at: Date;
    status: Boolean
}

export type ChangePasswordPayload = {
    current_password: string;
    password: string;
}