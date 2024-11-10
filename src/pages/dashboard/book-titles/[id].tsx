import { bookTitleDashboardApi } from "@/api/book-title";
import DetailBookTitle from "@/components/layouts/dashboard/book-title/detail";
import BookTitleTopBar from "@/components/layouts/dashboard/BookListTopbar";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function EditBookTitle() {
    const router = useRouter();
    const id = router.query.id as string;
    const {data, error,mutate} = useSWR(id? `/book-titles-dashboard/get-by-id/${id}`:null,()=> bookTitleDashboardApi.getDetailsById(id));
    return (
        <div className="container-fixed">
            <DetailBookTitle bookTitle={data} mutate={mutate}/>
        </div>
    );
}
EditBookTitle.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
