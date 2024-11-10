import AdminDashboard from "@/components/layouts/dashboard/AdminDashboard";
import LibrarianDashboard from "@/components/layouts/dashboard/LibrarianDashboard";
import OwnerDashboard from "@/components/layouts/dashboard/OwnerDashboard";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import useAuth from "@/hooks/useAuth";

export default function DashboardPage() {
  const { user, isAdmin, isLibrarian, isOwner } = useAuth();

  if (isOwner()) {
    return <OwnerDashboard />;
  } else if (isAdmin()) {
    return <AdminDashboard/>;
  } else if (isLibrarian()) {
    return <LibrarianDashboard/>;
  }
  return <></>;
}

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
