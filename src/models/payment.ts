import { User } from "./auth"
import { Membership, MembershipCard } from "./membership"

export type Payment = {
    _id: string
    user: User
    transaction_id: string
    months: number
    amount: number
    payment_method: string
    payment_type: string
    payment_status: string
    membership: Membership
    from: MembershipCard
    to: MembershipCard
    details: string
    payment_date: string
    created_at: string
}