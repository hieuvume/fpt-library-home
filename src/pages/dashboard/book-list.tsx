import BookList from "@/components/layouts/dashboard/BookList"; 
import DashboardLayout from "@/components/layouts/DashboardLayout"; 

export default function DashboardPage() {
    return (
        <>
            <BookList /> 
        </>
    );
}

DashboardPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};