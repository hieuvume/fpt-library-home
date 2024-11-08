import { User } from "./auth"

export type Membership = {
    _id: string
    name: string
    description: string
    price_monthly: number
    price_yearly: number
    max_borrow_days: number
    max_borrow_books_per_time: number
    max_reserve_books_per_montly: number
    renewal_allowed: boolean
    hold_allowed: boolean
    color: string
    resources_count: number
}

export type MembershipCard = {
    _id: String
    user: User
    membership: Membership
    card_number: string
    billing_cycle: string
    total_borrowed: number
    months: number
    start_date: string
    end_date: string
    price: number
    status: string
    created_at: string
}