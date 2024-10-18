import { getSetting } from "@/api/setting"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useSWR from "swr"

export default function BookDetailPage() {
    const router = useRouter()

    const { data, isLoading } = useSWR(`setting`, () => getSetting())

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <div>Book Detail Page: {data.max_borrow_duration}</div>
}