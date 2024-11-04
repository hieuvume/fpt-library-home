import { dashboardPaymentApi } from "@/api/payment";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import PaymentMethodCell from "@/components/layouts/home/payment/cell/PaymentMethodCell";
import PaymentStatusCell from "@/components/layouts/home/payment/cell/PaymentStatusCell";
import ActionCell from "@/components/table/cell/ActionCell";
import CurrencyCell from "@/components/table/cell/CurrencyCell";
import DateCell from "@/components/table/cell/DateCell";
import Table from "@/components/table/Table";
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination";
import { Payment } from "@/models/payment";
import {
  TableQueryProvider,
  useTableQuery,
} from "@/provider/TableQueryProvider";
import { capitalize } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Column } from "react-table";
import { useDebounce } from "use-debounce";

const columns: ReadonlyArray<Column<Payment>> = [
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Tran Id" id={id} sortable />
    ),
    accessor: "transaction_id",
    Cell: ({ value }) => (
      <span className="text-primary">{value.toUpperCase()}</span>
    ),
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Customer" id={id} />,
    accessor: "user",
    Cell: ({ value }) => (
      <>
        <div className="flex items-center gap-2">
          <Image
            className="w-8 h-8 rounded-full"
            src={value.avatar_url}
            alt=""
            width={50}
            height={50}
          />
          <span className="text-gray-800 fw-semibold">{value.full_name}</span>
        </div>
      </>
    ),
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Method" id={id} sortable />
    ),
    accessor: "payment_method",
    Cell: PaymentMethodCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Type" id={id} sortable />
    ),
    accessor: "payment_type",
    Cell: ({ value }) => (
      <span className="text-gray-800 font-normal">{capitalize(value)}</span>
    ),
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Amount" id={id} sortable />
    ),
    accessor: "amount",
    Cell: CurrencyCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Status" id={id} sortable />
    ),
    accessor: "payment_status",
    Cell: PaymentStatusCell,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Details" id={id} />,
    accessor: "details",
    Cell: ({ value }) => (
      <span className="text-gray-800 font-normal">{value}</span>
    ),
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Payment Date" id={id} sortable />
    ),
    accessor: "payment_date",
    Cell: ({ value }) => <DateCell value={value} />,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Date" id={id} sortable />
    ),
    accessor: "created_at",
    Cell: ({ value }) => <DateCell value={value} />,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="" id={id} className="w-8" />
    ),
    id: "action",
    Cell: ({ row: { original } }) => (
      <ActionCell editUrl={`/dashboard/payments/${original._id}`} />
    ),
  },
];

const PaymentsTable = () => {
  const [search, setSearch] = useState<string>("");
  const [searchQuery] = useDebounce(search, 200);
  const [pending, setPending] = useState<boolean>(false);
  const { setFilters } = useTableQuery();

  useEffect(() => {
    const filters: Record<string, any> = {};
    if (searchQuery) {
      filters.search = searchQuery;
    }
    if (pending) {
      filters.pending = true;
    }
    setFilters(filters);
  }, [searchQuery, pending, setFilters]);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header">
        <h3 className="card-title">Payments History</h3>
        <div className="flex gap-6">
          <div className="relative">
            <i className="ki-filled ki-magnifier leading-none text-md text-gray-500 absolute top-1/2 left-0 -translate-y-1/2 ml-3" />
            <input
              className="input input-sm pl-8"
              placeholder="Search Payments"
              type="text"
              defaultValue=""
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <label className="switch switch-sm">
            <input
              className="order-2"
              name="check"
              type="checkbox"
              defaultValue={1}
              onChange={() => setPending(!pending)}
            />
            <span className="switch-label order-1">Pending Payments</span>
          </label>
        </div>
      </div>
      <div className="card-body">
        <Table columns={columns}></Table>
      </div>
      <TablePagination />
    </div>
  );
};

const PaymentsPage = () => {
  return (
    <>
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-medium leading-none text-gray-900">
              Payments History
            </h1>
            <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
              Payments made by customers
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <a className="btn btn-sm btn-light" href="#">
              Add Payment
            </a>
          </div>
        </div>
      </div>

      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <TableQueryProvider
            fetcher={dashboardPaymentApi.getAll}
            requestKey="dashboard-payments"
            limit={20}
          >
            <PaymentsTable />
          </TableQueryProvider>
        </div>
      </div>
    </>
  );
};

PaymentsPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

PaymentsPage.requiresAuth = true;

PaymentsPage.roles = ["LIBRARIAN", "OWNER", "ADMIN"];

export default PaymentsPage;
