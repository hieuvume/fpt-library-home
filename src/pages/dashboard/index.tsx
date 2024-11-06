import OwnerDashboard from "@/components/layouts/dashboard/onwer/OwnerDashboard";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import useAuth from "@/hooks/useAuth";

export default function DashboardPage() {
  const { user, isAdmin, isLibrarian, isOwner } = useAuth();

  if (isOwner()) {
    return <OwnerDashboard />;
  } else if (isAdmin()) {
    return <></>;
  } else if (isLibrarian()) {
    return <></>;
  }
  return <></>;
}

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
