import CategoryWrapper from "@/components/layouts/dashboard/category/CategoryList";
import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function DashboardPage() {
    return (
        <>
            <div className="container-fixed">
                <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
                    <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-xl font-medium leading-none text-gray-900">
                            Category
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
                            Category list
                        </div>
                    </div>
                </div>
                <CategoryWrapper />
            </div>

        </>
    );
}

DashboardPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};