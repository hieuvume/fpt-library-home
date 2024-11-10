import axios from "axios"
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Users } from "@/models/user"
import DashboardLayout from "@/components/layouts/DashboardLayout"
import { dashboardUserApi } from "@/api/user";
import { TableQueryProvider } from "@/provider/TableQueryProvider"
import Link from "next/link"
import TablePagination from "@/components/table/TablePagination"
import { Column } from "react-table"
import Table from "@/components/table/Table"
import TableHeader from "@/components/table/TableHeader"
import Image from "next/image"
import { formatCurrency, formatDate, formatOriginDate } from "@/utils"
import ActionCell from "@/components/table/cell/ActionCell"

const columns: ReadonlyArray<Column<Users>> = [
  {
    Header: ({ column: { id } }) => <TableHeader title="Customer" id={id} />,
    accessor: "avatar_url",
    Cell: ({ row: { original } }) => (
      <div className="flex items-center gap-2">
        <Image
          className="w-8 h-8 rounded-full"
          src={original.avatar_url}
          alt=""
          width={50}
          height={50}
        />
        <div>
          <span className="text-gray-800 fw-semibold">{original.full_name}</span><br/>
          <span className="text-sm">{original.email}</span>
        </div>
      </div>

    )
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Phone" id={id} />,
    accessor: "phone_number",
    Cell: ({ value }) => (
      <div className="flex items-center gap-2">
        <span >{value}</span>
      </div>
    )
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="DOB" id={id} />,
    accessor: "date_of_birth",
    Cell: ({ value }) => (
      <div className="flex items-center gap-2">
        <span >{formatOriginDate(value)}</span>
      </div>
    )
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Role" id={id} />,
    accessor: "role",
    Cell: ({ value }) => (
      <div className="flex items-center gap-2">
        <span >{value.role_name}</span>
      </div>
    )
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="" id={id} className="w-8" />
    ),
    id: "action",
    Cell: ({ row: { original } }) => (
      <ActionCell editUrl={`/dashboard/users/${original._id}`} />
    ),
  },
]
const UserManagePage = () => {


  return (
    <>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="card card-grid min-w-full">
            <div className="card-header">
              <h3 className="card-title">User List</h3>
              <div className="flex items-center gap-2.5">
                <Link className="btn btn-sm btn-light" href="book-titles/create">Add User</Link>
              </div>
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
export default function UserList() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }


  return (
    <TableQueryProvider
      requestKey={"book-titles-dashboard/get-all"}
      fetcher={dashboardUserApi.getUsers}
      limit={20}
      defaultSort={{ field: "title", order: "desc" }}
    >
      <><UserManagePage /></>
    </TableQueryProvider>)
}
UserList.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
