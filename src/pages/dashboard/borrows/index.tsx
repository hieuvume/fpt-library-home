import { LoansRecordHistoryWrapper } from "@/components/layouts/dashboard/librarian";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Link from "next/link";

const librarianIndex = () => {
  return (
    <>
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-medium leading-none text-gray-900">
              Borrowing Records
            </h1>
            <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
              Borrowing records made by customers
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Link className="btn btn-sm btn-light" href="/">
              Add Borrowing
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <LoansRecordHistoryWrapper />
        </div>
      </div>
    </>
  );
};
librarianIndex.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
librarianIndex.requiresAuth = true;

librarianIndex.roles = ["LIBRARIAN", "OWNER", "ADMIN"];

export default librarianIndex;
