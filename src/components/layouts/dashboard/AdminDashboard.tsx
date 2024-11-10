import dashboardApi from "@/api/dashboard";
import useSWR from "swr";
import SummaryCard from "./SummaryCard";

const AdminDashboard = () => {
  const { data, error } = useSWR("/dashboard/stats/admin", dashboardApi.getAdminDashboard);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { totalBooks, totalUsers, borrowedBooks, availableBooks } = data;

  return (
    <div className="container-fixed">
      <div className="grid lg:grid-cols-4 gap-5 items-stretch">
        <SummaryCard
          title="Total Books"
          count={totalBooks}
          icon="ki-notification-status text-primary"
        />
        <SummaryCard
          title="Total Users"
          count={totalUsers}
          icon="ki-user text-primary"
        />
        <SummaryCard
          title="Borrowed Books"
          count={borrowedBooks}
          icon="ki-book-open text-primary"
        />
        <SummaryCard
          title="Available Books"
          count={availableBooks}
          icon="ki-check-circle text-primary"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;