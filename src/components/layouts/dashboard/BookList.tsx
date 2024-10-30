import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Book } from "@/models/book";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { bookApi, dashboardBookApi } from "@/api/book";
import { TableQueryProvider } from '@/provider/TableQueryProvider';
import Table from '@/components/table/Table';
import TablePagination from '@/components/table/TablePagination';
import { Column } from 'react-table';
import TableHeader from '@/components/table/TableHeader';
import Image from 'next/image';
import Link from 'next/link';
import DateCell from '@/components/table/cell/DateCell';

const columns: ReadonlyArray<Column<Book>> = [
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
          </div>
        </div>
      </>
    ),
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Status" id={id} />,
    accessor: "status",
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Section" id={id} />,
    accessor: "section",
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Shelf" id={id} />,
    accessor: "shelf",
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Floor" id={id} />,
    accessor: "floor",
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Position" id={id} />,
    accessor: "position",
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Created" id={id} sortable />,
    accessor: "created_at",
    Cell: ({ value }) => <DateCell value={value} />,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Action" id={id} />,
    id: "action",
    Cell: ({ value }) => (
      <>
        <button className="btn btn-sm btn-light btn-active-light-primary">Edit</button>
      </>
    ),
  }
];

export function BookListTable() {
  return (
    <>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="card card-grid min-w-full">
            <div className="card-header">
              <h3 className="card-title">History Books</h3>
            </div>
            <div className="card-body">
              <Table columns={columns}></Table>
            </div>
            <TablePagination />
          </div>
        </div>
      </div>
    </>
  )
}

export default function BookListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }


  return (
    <TableQueryProvider
      requestKey={"book-list"}
      fetcher={dashboardBookApi.getBooks}
      limit={20}
    >
      <BookListTable />
    </TableQueryProvider>)
}

BookListPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};