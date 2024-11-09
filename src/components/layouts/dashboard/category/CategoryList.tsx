import { useRef, useState } from "react";
import { dashboardCategoryApi } from "@/api/category";
import Table from "@/components/table/Table";
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination";
import { Category } from "@/models/category";
import { TableQueryProvider } from "@/provider/TableQueryProvider";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Column } from "react-table";
import { CardModal } from "@/components/modal/CardModal";
import CategoryModal from "./CategoryModal";


export function CategoriesList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategories, setSelecteCategories] = useState<string | null>(null);
  const openModal = (categoriId: string) => {
    setSelecteCategories(categoriId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelecteCategories(null);
  };
  const columns: ReadonlyArray<Column<Category>> = [
    {
      Header: ({ column: { id } }) => <TableHeader title="Title" id={id} />,
      accessor: "title",
      Cell: ({ value, row: { original } }) => (
        <div className="flex items-center gap-2.5">
          <Link
            className="leading-none font-medium text-gray-900 hover:text-primary"
            href={`/books/${original?._id}`}
          >
            {value}
          </Link>
        </div>
      ),
    },
    {
      Header: ({ column: { id } }) => <TableHeader title="Description" id={id} />,
      accessor: "description",
      Cell: ({ value }) => <span >{value}</span>,
    },
    {
      Header: ({ column: { id } }) => <TableHeader title="Action" id={id} />,
      accessor: '_id',
      Cell: ({ value }) => (
        <button className="btn btn-sm btn-light btn-active-light-primary" onClick={() => openModal(value)}>Edit</button>
      ),
    },

  ];


  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-7.5">
        <div className="card card-grid min-w-full">
          <div className="card-header">
            <h3 className="card-title">Categories</h3>
          </div>
          <div className="card-body">
            <Table columns={columns}></Table>
          </div>
          <TablePagination />
        </div>
        {isModalOpen && (
          <CategoryModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            selectedCategories={selectedCategories}
          />
        )}
      </div>
    </>
  );
}

export default function CategoryWrapper() {
  return (
    <TableQueryProvider
      requestKey={"category"}
      fetcher={dashboardCategoryApi.getCategories}
      limit={10}
    >
      <CategoriesList />

    </TableQueryProvider>
  );
}
