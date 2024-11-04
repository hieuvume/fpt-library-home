import { bookDashboardApi } from "@/api/book";
import { userApi } from "@/api/user";
import DateCell from "@/components/table/cell/DateCell";
import LinkCell from "@/components/table/cell/LinkCell";
import Table from "@/components/table/Table";
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination";
import { BorrowRecord } from "@/models/borrow-record";
import { TableQueryProvider } from "@/provider/TableQueryProvider";
import { formatDateTime } from "@/utils";
import Image from "next/image";
import Link from "next/link";
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
              className="dark:hidden max-h-[50px] rounded-lg  w-full"
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
              {Array.isArray(value?.author) ? value.author.join(', ') : value?.author || 'No author available'}
            </span>
            {/* <span className="text-xs text-gray-700 font-normal">26 tasks</span> */}
          </div>
        </div>
      </>
    ),
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Date created" id={id} sortable />
    ),
    accessor: "borrow_date",
    Cell: ({ value }) => (
       <span className="text-gray-800 font-normal">
        {value ? value ? formatDateTime(value) : '' : 'N/A'}
        </span>
    ),
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Time to receive books" id={id} />,
    accessor: "due_date",
    Cell:  ({ value }) => (
      <span className="text-gray-800 font-normal">
       {value ? value ? formatDateTime(value) : '' : 'N/A'}
       </span>
   ),
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Book return time" id={id} />,
    accessor: "return_date",
    Cell:  ({ value }) => (
      <span className="text-gray-800 font-normal">
       {value ? value ? formatDateTime(value) : '' : 'N/A'}
       </span>
   ),
  },
 
  {
    Header: ({ column: { id } }) => <TableHeader title="User Borrow" id={id} />,
    accessor: "user",
    Cell: ({ value }) => (
      <>
        {value?.full_name}
      </>
    ),
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Status" id={id} />,
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
          className={`badge badge-xs badge-outline text-xs ${getBadgeClass(value)}`}
        >
          {value.toUpperCase()}
        </span>
      );
    },
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Browse" id={id} />
    ),
    accessor: "_id",
    Cell: ({ value }) => (
      <>
        <LinkCell href={`detail-books-loans/${value}`} value="Browse" />
      </>
    ),
  },
];

export function LoansRecordHistory() {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="flex flex-col gap-5 lg:gap-7.5">
        <div className="card card-grid min-w-full">
          <div className="card-header">
            <h3 className="card-title">Loans Book</h3>
            {/* <a
              className="btn btn-link"
              href="/metronic/tailwind/demo9/public-profile/profiles/feeds"
            >
              View All
            </a> */}
          </div>
          <div className="card-body">
            <Table columns={columns}></Table>
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
      requestKey={"current-loans"}
      fetcher={bookDashboardApi.getCurrentLoans}
      limit={10}
    >
      <LoansRecordHistory />
    </TableQueryProvider>
  );
}
