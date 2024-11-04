import { borrowRecordApi } from "@/api/borrow-record";
import CurrencyCell from "@/components/table/cell/CurrencyCell";
import DateCell from "@/components/table/cell/DateCell";
import Table from "@/components/table/Table";
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination";
import { KTModal } from "@/metronic/core";
import { BorrowRecord } from "@/models/borrow-record";
import {
  ObjectDataProvider,
  useObjectData,
} from "@/provider/ObjectDataProvider";
import { TableQueryProvider } from "@/provider/TableQueryProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Column } from "react-table";
import BorrowBookCell from "./cell/BorrowBookCell";
import BorrowStatusCell from "./cell/BorrowStatusCell";
import BorrowGuideModal from "./modal/BorrowGuideModal";
import BorrowActionCell from "./cell/BorrowActionCell";

const columns: ReadonlyArray<Column<BorrowRecord>> = [
  {
    Header: ({ column: { id } }) => <TableHeader title="Book" id={id} />,
    accessor: "book_title",
    Cell: BorrowBookCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Due" id={id} sortable />
    ),
    accessor: "due_date",
    Cell: DateCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Status" id={id} sortable />
    ),
    accessor: "status",
    Cell: BorrowStatusCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Penatly" id={id} sortable />
    ),
    accessor: "penatly_total",
    Cell: CurrencyCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="Created" id={id} sortable />
    ),
    accessor: "borrow_date",
    Cell: DateCell,
  },
  {
    Header: ({ column: { id } }) => (
      <TableHeader title="" id={id} className="w-8" />
    ),
    id: "action",
    Cell: BorrowActionCell,
  },
];

const BorrowsTable = () => {
  const { setData } = useObjectData<string>();
  const router = useRouter();

  useEffect(() => {
    if (router.query?.borrowId) {
      setData(router.query.borrowId as string);
      KTModal.openModal("borrow-guide");
      // remove query param
      router.replace(router.pathname, undefined, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.borrowId, setData]);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header">
        <h3 className="card-title">Borrows</h3>
      </div>
      <div className="card-body">
        <Table columns={columns}></Table>
      </div>
      <TablePagination />
    </div>
  );
};

const BorrowsWrapper = () => {
  return (
    <ObjectDataProvider>
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <TableQueryProvider
            fetcher={borrowRecordApi.histories}
            requestKey="borrows"
            limit={20}
            defaultSort={{ field: "borrow_date", order: "desc" }}
          >
            <BorrowsTable />
            <BorrowGuideModal />
          </TableQueryProvider>
        </div>
      </div>
    </ObjectDataProvider>
  );
};

export default BorrowsWrapper;
