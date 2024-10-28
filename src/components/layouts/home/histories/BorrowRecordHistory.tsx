import { userApi } from "@/api/user";
import DateCell from "@/components/table/cell/DateCell";
import Table from "@/components/table/Table";
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination";
import { BorrowRecord } from "@/models/borrow-record";
import { TableQueryProvider } from "@/provider/TableQueryProvider";
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
              className="max-w-8"
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
            {/* <span className="text-xs text-gray-700 font-normal">26 tasks</span> */}
          </div>
        </div>
      </>
    ),
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Due" id={id} />,
    accessor: "due_date",
    Cell: DateCell,
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
          className={`badge badge-xs badge-outline ${getBadgeClass(value)}`}
        >
          {value}
        </span>
      );
    },
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Created" id={id} sortable />
    ),
    accessor: "borrow_date",
    Cell: DateCell,
  },
];

export function BorrowRecordHistory() {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="flex flex-col gap-5 lg:gap-7.5">
        <div className="card card-grid min-w-full">
          <div className="card-header">
            <h3 className="card-title">History Books</h3>
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

export function BorrowRecordHistoryWrapper() {
  return (
    <TableQueryProvider
      requestKey={"borrow-record"}
      fetcher={userApi.histories}
      limit={10}
    >
      <BorrowRecordHistory />
    </TableQueryProvider>
  );
}
