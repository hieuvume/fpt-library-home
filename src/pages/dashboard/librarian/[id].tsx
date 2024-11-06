import { borrowRecordDashboardApi } from "@/api/borrow-record";
import Approve from "@/components/layouts/dashboard/librarian/approved";
import DetailBookLoansWapper from "@/components/layouts/dashboard/librarian/loan-details";
import DetailBookLoans from "@/components/layouts/dashboard/librarian/loan-details";
import LibrarianLayout from "@/components/layouts/LibrarianLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

const Loans = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const id = router.query.id as string;
    const { data, isLoading, error, mutate } = useSWR(
        id ? `/borrow-records-dashboard/details/${id}` : null,
        () => borrowRecordDashboardApi.getDetailLoan(id)
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading payment</div>;
    return (
        <div>
            <DetailBookLoansWapper BorrowRecord={data} />
            <Approve BorrowRecord={data} />
        </div>
    );
}
Loans.getLayout = function getLayout(page) {
    return <LibrarianLayout>{page}</LibrarianLayout>;
};
Loans.requiresAuth = true;
Loans.roles = ["LIBRARIAN", "OWNER", "ADMIN"];
export default Loans;
