export type Users = {
    id: string
    username: string;
    password: string;
    email: string;
    full_name: string;
    phone_number: string;
    id_card: object;
    current_membership_id: string;
    borrowed_books: string[];
    role: string;
    google_id: string;
    google_access_token: string;
    token_expires_at: Date;
    created_at: Date;
    updated_at: Date;
    avatar_url: string
    status: Boolean

    address: string;

//   @Factory((faker) => ({
//         id_number: faker.string.numeric(12),
//         date: faker.date.past(),
//         place: faker.location.city(),
//     }))
// role: Role;
}