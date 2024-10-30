import { bookDashboardApi } from "@/api/book";
import DashboardLayout from "@/components/layouts/DashboradLayoutLibrarian";
import DetailBook from "@/components/layouts/dashboard/detailsbooksloans/index";
import { useRouter } from "next/router";
import useSWR from "swr";
export default function DetailBookLoans() {
    const router = useRouter();
    const { id } = router.query as { id: string };
    if (!id) return <div>Loading...</div>
    const {data,isLoading,error} = useSWR(`/borrow-records-dashboard/details/${id}`, () => bookDashboardApi.getDetailLoan(id));
    if (isLoading) return <div>Loading...</div>
    return (
        <div className="container-fixed">

            <> <DetailBook children={data}/> </>

        </div>



    )
}
DetailBookLoans.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};