import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function UserListPage() {
    return (
        <>User List Page</>
    )
}

UserListPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
