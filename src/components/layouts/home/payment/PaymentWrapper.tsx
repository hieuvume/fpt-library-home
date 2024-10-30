import { paymentApi } from "@/api/payment"
import DateCell from "@/components/table/cell/DateCell";
import Table from "@/components/table/Table"
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination"
import { Payment } from "@/models/payment";
import { TableQueryProvider } from "@/provider/TableQueryProvider"
import { Column } from "react-table";
import PaymentStatusCell from "./cell/PaymentStatusCell";
import PaymentMethodCell from "./cell/PaymentMethodCell";
import CurrencyCell from "@/components/table/cell/CurrencyCell";
import IDCell from "@/components/table/cell/IDCell";
import PaymentActionCell from "./cell/PaymentActionCell";
import { ObjectDataProvider, useObjectData } from "@/provider/ObjectDataProvider";
import PaymentGuideModal from "./modal/PaymentGuideModal";
import { useEffect } from "react";
import { KTModal } from "@/metronic/core";
import { useRouter } from "next/router";

const columns: ReadonlyArray<Column<Payment>> = [
  {
    Header: ({ column: { id } }) => <TableHeader title="" id={id} className="w-14" />,
    id: "id",
    Cell: IDCell
  },
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
    Header: ({ column: { id } }) => <TableHeader title="Note" id={id} />,
    accessor: "details",
    Cell: ({ value }) => <span className="text-gray-500">{value}</span>,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="Date" id={id} sortable />,
    accessor: "created_at",
    Cell: DateCell,
  },
  {
    Header: ({ column: { id } }) => <TableHeader title="" id={id} className="w-8" />,
    id: "action",
    Cell: ({ row: { original } }) => (<PaymentActionCell payment={original} />),
  },
];


const PaymentTable = () => {
  const { setData } = useObjectData<string>()
  const router = useRouter()

  useEffect(() => {
    if (router.query?.paymentId) {
      setData(router.query.paymentId as string);
      KTModal.openModal("payment-guide")
      // remove query param
      router.replace(router.pathname, undefined, { scroll: false })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.paymentId, setData])
  return (
    <div className="card card-grid min-w-full">
      <div className="card-header">
        <h3 className="card-title">Billing and Invoicing</h3>
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
  )
}

const PaymentWrapper = () => {
  return (
    <ObjectDataProvider>
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <TableQueryProvider
            fetcher={paymentApi.histories}
            requestKey="payments"
            limit={20}
          >
            <PaymentTable />
            <PaymentGuideModal />
          </TableQueryProvider>
        </div>
      </div>
    </ObjectDataProvider>
  )
}

export default PaymentWrapper