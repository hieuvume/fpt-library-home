import { dashboardPaymentApi } from "@/api/payment";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import PaymentActionCell from "@/components/layouts/home/payment/cell/PaymentActionCell";
import PaymentMethodCell from "@/components/layouts/home/payment/cell/PaymentMethodCell";
import PaymentStatusCell from "@/components/layouts/home/payment/cell/PaymentStatusCell";
import CurrencyCell from "@/components/table/cell/CurrencyCell";
import DateCell from "@/components/table/cell/DateCell";
import IDCell from "@/components/table/cell/IDCell";
import Table from "@/components/table/Table";
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination";
import { Payment } from "@/models/payment";
import { TableQueryProvider } from "@/provider/TableQueryProvider";
import { capitalize } from "@/utils";
import { useState } from "react";
import { Column } from "react-table";

const columns: ReadonlyArray<Column<Payment>> = [
    {
        Header: ({ column: { id } }) => <TableHeader title="Transaction Id" id={id} sortable />,
        accessor: "transaction_id",
        Cell: ({ value }) => <span className="text-primary">{value.toUpperCase()}</span>,
    },
    {
        Header: ({ column: { id } }) => <TableHeader title="Method" id={id} sortable />,
        accessor: "payment_method",
        Cell: PaymentMethodCell
    },
    {
        Header: ({ column: { id } }) => <TableHeader title="Type" id={id} sortable />,
        accessor: "payment_type",
        Cell: ({ value }) => <span className="text-gray-800 font-normal">{capitalize(value)}</span>
    },
    {
        Header: ({ column: { id } }) => <TableHeader title="Amount" id={id} sortable />,
        accessor: "amount",
        Cell: CurrencyCell
    },
    {
        Header: ({ column: { id } }) => <TableHeader title="Status" id={id} sortable />,
        accessor: "payment_status",
        Cell: PaymentStatusCell
    },
    {
        Header: ({ column: { id } }) => <TableHeader title="Details" id={id} />,
        accessor: "details",
        Cell: ({ value }) => <span className="text-gray-800 font-normal">{value}</span>,
    },
    {
        Header: ({ column: { id } }) => <TableHeader title="Date" id={id} sortable />,
        accessor: "created_at",
        Cell: DateCell,
    },
    {
        Header: ({ column: { id } }) => <TableHeader title="" id={id} className="w-8" />,
        id: "action",
        Cell: ({ row: { original } }) => (<></>),
    },
];

const PaymentsTable = () => {
    const [search, setSearch] = useState<string>("");
    return (
        <div className="card card-grid min-w-full">
            <div className="card-header">
                <h3 className="card-title">Billing and Invoicing</h3>
                <div className="flex gap-6">
                    <div className="relative">
                        <i className="ki-filled ki-magnifier leading-none text-md text-gray-500 absolute top-1/2 left-0 -translate-y-1/2 ml-3" />
                        <input
                            className="input input-sm pl-8"
                            placeholder="Search Payments"
                            type="text"
                            defaultValue=""
                        />
                    </div>
                    <label className="switch switch-sm">
                        <input className="order-2" name="check" type="checkbox" defaultValue={1} />
                        <span className="switch-label order-1">Pending Payments</span>
                    </label>
                </div>

            </div>
            <div className="card-body">
                <Table columns={columns}></Table>
            </div>
            <TablePagination />
        </div>
    )
}

const PaymentsPage = () => {
    return (
        <>
            <div className="container-fixed">
                <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
                    <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-xl font-medium leading-none text-gray-900">
                            Billing History
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
                            Central Hub for Personal Customization
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <a className="btn btn-sm btn-light" href="#">
                            Billing
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
    )
}



PaymentsPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};


export default PaymentsPage