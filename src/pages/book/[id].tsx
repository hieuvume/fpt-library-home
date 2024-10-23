import { bookApi } from "@/api/book"
import { getSetting } from "@/api/setting"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useSWR from "swr"

export default function BookDetailPage() {
    const router = useRouter()
    const bookId=router.query.id as string
    if (!bookId) return <div>Loading...</div>
    const { data, isLoading,error } = useSWR(`findbook${bookId}`, () => bookApi.getBookById(router.query.id as string))
    
    if (isLoading) {
        return <div>Loading...</div>
    }
    console.log(data);
    
    return <div>
        <h1>{data?.book_title?.ISBN}</h1>
        <p>{data?.floor}</p>
    </div>

}