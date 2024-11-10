import { bookTitleDashboardApi } from "@/api/book-title";
import BookList from "@/components/layouts/dashboard/BookList"; 
import DashboardLayout from "@/components/layouts/DashboardLayout"; 
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DashboardPage() {
 
    return (
        <><div className="container-fixed">
               <BookList /> 
        </div>
         
        </>
    );
}

DashboardPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};