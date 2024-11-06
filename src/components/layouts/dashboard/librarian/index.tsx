import { borrowRecordDashboardApi } from "@/api/borrow-record";
import ActionCell from "@/components/table/cell/ActionCell";
import CustomerCell from "@/components/table/cell/CustomerCell";
import DateCell from "@/components/table/cell/DateCell";
import Table from "@/components/table/Table";
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination";
import { BorrowRecord } from "@/models/borrow-record";
import {
  TableQueryProvider,
  useTableQuery,
} from "@/provider/TableQueryProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Column } from "react-table";

const columns: ReadonlyArray<Column<BorrowRecord>> = [
  {
    Header: ({ column: { id } }) => <TableHeader title="Book" id={id} />,
    accessor: "book_title",
    Cell: ({ value }) => (
      <>
        <div className="flex items-center gap-2.5">
          <div className="">
            <Image
              width={100}
              height={100}
              className="max-w-8 max-h-[50px] rounded-lg"
              alt="book"
              src={value?.cover_image}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <Link
              className="leading-none font-medium text-gray-900 hover:text-primary"
              href={`/books/${value?._id}`}
            >
              {value?.title}
            </Link>
            <span className="text-xs text-gray-700 font-normal">
              {Array.isArray(value?.author)
                ? value.author.join(", ")
                : value?.author || "No author available"}
            </span>
            {/* <span className="text-xs text-gray-700 font-normal">26 tasks</span> */}
          </div>
        </div>
      </>
    ),
  },

  {
    Header: ({ column: { id } }) => <TableHeader title="User Borrow" id={id} />,
    accessor: "user",
    Cell: CustomerCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Date created" id={id} sortable />
    ),
    accessor: "borrow_date",
    Cell: DateCell,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Due date" id={id} />,
    accessor: "due_date",
    Cell: DateCell,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Return date" id={id} />,
    accessor: "return_date",
    Cell: DateCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Status" id={id} sortable />
    ),
    accessor: "status",
    Cell: ({ value }) => {
      const getBadgeClass = (status: string) => {
        switch (status) {
          case "pending":
            return "badge-warning";
          case "approved":
            return "badge-success";
          case "rejected":
            return "badge-danger";
          case "returned":
            return "badge-info";
          case "losted":
            return "badge-secondary";
          default:
            return "";
        }
      };

      return (
        <span
          className={`badge badge-xs badge-outline text-xs ${getBadgeClass(
            value
          )}`}
        >
          {value.toUpperCase()}
        </span>
      );
    },
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Browse" id={id} />,
    accessor: "_id",
    Cell: ({ row: { original } }) => (
      <ActionCell editUrl={`/dashboard/borrows/${original._id}`} />
    ),
  },
];

export function LoansRecordHistory() {
  const { setFilters } = useTableQuery();
  const [status, setStatus] = useState<string>("all");
  useEffect(() => {
    const filters: Record<string, any> = {};
    if (status !== "all") {
      filters.status = status;
    }
    setFilters(filters);
  }, [status, setFilters]);
  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="flex flex-col gap-5 lg:gap-7.5">
        <div className="card card-grid min-w-full">
          <div className="card-header flex justify-between items-center">
            <h3 className="card-title">Borrowing Records</h3>
            <div>
              <div className="flex items-center space-x-2">
                <label
                  htmlFor="status-filter"
                  className="text-gray-700 font-medium"
                >
                  Status
                </label>
                <select
                  id="status-filter"
                  value={status}
                  onChange={handleStatusChange}
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All</option>
                  <option
                    value="pending"
                    className="text-yellow-500 font-semibold"
                  >
                    Pending
                  </option>
                  <option
                    value="holding"
                    className="text-blue-500 font-semibold"
                  >
                    Holding
                  </option>
                  <option
                    value="borrowing"
                    className="text-green-500 font-semibold"
                  >
                    Borrowing
                  </option>
                  <option
                    value="canceled"
                    className="text-red-500 font-semibold"
                  >
                    Canceled
                  </option>
                  <option
                    value="rejected"
                    className="text-gray-500 font-semibold"
                  >
                    Rejected
                  </option>
                  <option
                    value="returned"
                    className="text-blue-600 font-semibold"
                  >
                    Returned
                  </option>
                  <option
                    value="losted"
                    className="text-gray-700 font-semibold"
                  >
                    Losted
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="card-body">
            {/* Table component with filtered data */}
            <Table columns={columns} />
          </div>

          <TablePagination />
        </div>
      </div>
    </div>
  );
}

export function LoansRecordHistoryWrapper() {
  return (
    <TableQueryProvider
      requestKey={"borrowing-records"}
      fetcher={borrowRecordDashboardApi.getCurrentLoans}
      limit={10}
      defaultSort={{ field: "borrow_date", order: "desc" }}
    >
      <LoansRecordHistory />
    </TableQueryProvider>
  );
}
