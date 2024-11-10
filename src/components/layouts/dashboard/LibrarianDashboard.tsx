import dashboardApi from "@/api/dashboard";
import useSWR from "swr";
import SummaryCard from "./SummaryCard";

const LibrarianDashboard = () => {
  const { data, error } = useSWR(
    "/dashboard/stats/librarian",
    dashboardApi.getLibrarianDashboard
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const {
    borrowedBooks,
    overdueBooks,
    waitingBooks,
    totalReturnedBooks,
    newBooks,
    newUsers,
    totalBorrowRecords,
    returnedBooksThisMonth,
    overdueRate,
  } = data;

  return (
    <div className="container-fixed">
      <div className="grid lg:grid-cols-4 gap-5 items-stretch">
        <SummaryCard
          title="Borrowed Books"
          count={borrowedBooks}
          icon="ki-book-open text-primary"
        />
        <SummaryCard
          title="Overdue Books"
          count={overdueBooks}
          icon="ki-notification-status text-primary"
        />
        <SummaryCard
          title="Waiting Books"
          count={waitingBooks}
          icon="ki-book-open text-primary"
        />
        <SummaryCard
          title="Total Returned Books"
          count={totalReturnedBooks}
          icon="ki-check-circle text-primary"
        />
        <SummaryCard
          title="New Books"
          count={newBooks}
          icon="ki-book-open text-primary"
        />
        <SummaryCard
          title="New Users"
          count={newUsers}
          icon="ki-user text-primary"
        />
        <SummaryCard
          title="Total Borrow Records"
          count={totalBorrowRecords}
          icon="ki-book-open text-primary"
        />
        <SummaryCard
          title="Returned Books This Month"
          count={returnedBooksThisMonth}
          icon="ki-check-circle text-primary"
        />
        <SummaryCard
          title="Overdue Rate"
          count={overdueRate}
          icon="ki-notification-status text-primary"
        />
      </div>
    </div>
  );
};

export default LibrarianDashboard;
