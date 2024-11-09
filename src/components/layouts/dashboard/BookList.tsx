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
import { bookTitleDashboardApi } from '@/api/book-title';
import { BookTitle } from '@/models/book-title';
import { isArray } from 'chart.js/helpers';

const columns: ReadonlyArray<Column<BookTitle>> = [
  {
    Header: ({ column: { id } }) => <TableHeader title="Book Title" id={id} />,
    accessor: "title",
    Cell: ({ row: { original } }) => (
      <div className="flex items-center gap-2.5">
        {original.cover_image && (
          <div className="w-10 h-10">
            <img src={original.cover_image} alt={original.title} className="w-full h-full object-cover rounded" />
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          <span>{original.title}</span>
          <span className='text-xs text-gray-700 font-normal'>{original.brief_content}</span>
        </div>
      </div>
    ),
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Description" id={id} />,
    accessor: "description",
    Cell: ({ value }) => <span className="text-sm text-gray-700 font-normal">{value}</span>,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Categories" id={id} />,
    accessor: "categories",
    Cell: ({ value }) => <span className="text-sm text-gray-700 font-normal">   {Array.isArray(value)
      ? value.map(category => category.title).join(", ")
      : "No categories available"}</span>,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Author" id={id} />,
    accessor: "author",
    Cell: ({ value }) => <span className="text-xs text-gray-700 font-normal">
    {Array.isArray(value)
      ? value.join(", ")
      : value || "No author available"}
  </span>,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="ISBN" id={id} />,
    accessor: "ISBN",
    Cell: ({ value }) => <span className="text-sm text-gray-700 font-normal">{value}</span>,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Memberships" id={id} sortable/>,
    accessor: "memberships",
    Cell: ({ value }) => <span className="text-sm text-gray-700 font-normal">{value.map(v => v.name).join(", ")}</span>,
  },
    {
    Header: ({ column: { id } }) => <TableHeader title="Action" id={id} />,
    id: "action",
    Cell: ({ value }) => (
      <>
        <button className="btn btn-sm btn-light btn-active-light-primary">Edit</button>
      </>
    ),}
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
      requestKey={"book-titles-dashboard/get-all"}
      fetcher={bookTitleDashboardApi.getbookTitles}
      limit={20}
      defaultSort={{ field: "title", order: "desc" }}
    >
      <BookListTable />
    </TableQueryProvider>)
}

BookListPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};