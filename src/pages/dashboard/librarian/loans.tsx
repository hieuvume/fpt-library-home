import { LoansRecordHistory, LoansRecordHistoryWrapper } from "@/components/layouts/dashboard/loans";
import DashboardLayout from "@/components/layouts/DashboradLayoutLibrarian";
import { BorrowRecordHistoryWrapper } from "@/components/layouts/home/histories/BorrowRecordHistory";

export default function LoansPage() {
    return (
        <><LoansRecordHistoryWrapper /></>
    )
}
LoansPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};