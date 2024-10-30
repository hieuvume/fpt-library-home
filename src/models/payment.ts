import { User } from "./auth"
import { MembershipCard } from "./membership"

export type Payment = {
    _id: string
    user: User
    transaction_id: string
    amount: number
    payment_method: string
    payment_type: string
    payment_status: string
    membership_card: MembershipCard
    details: string
    payment_date: Date
    created_at: Date
}