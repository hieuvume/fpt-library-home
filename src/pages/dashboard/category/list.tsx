import CategoryWrapper from "@/components/layouts/dashboard/category/CategoryList";
import DashboardLayout from "@/components/layouts/DashboardLayout"; 

export default function DashboardPage() {
    return (
        <>
            <CategoryWrapper /> 
        </>
    );
}

DashboardPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};