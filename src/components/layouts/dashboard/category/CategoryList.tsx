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

const columns: ReadonlyArray<Column<Category>> = [
  {
    Header: ({ column: { id } }) => <TableHeader title="Title" id={id} />,
    accessor: "title", // Thay đổi để khớp với dữ liệu trả về từ API
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
    Cell: ({ value }) => <span>{value}</span>,
  },
  // Các cột khác nếu có, như Due, Status, Created
];

export function CategoriesList() {
  const formRef = useRef(null); // Tạo ref cho form
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleAddClick = () => {
    // Cuộn xuống form khi nhấn nút
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCreateCategory = async () => {
    try {
      dashboardCategoryApi.createCategory(formData);
      setFormData({ title: "", description: "" }); // Clear form data
      alert("Category added successfully!");
      // Optionally, refresh the data to reflect the new category in the table
    } catch (error) {
      console.error("Failed to add category:", error);
      alert("Failed to add category");
    }
  };

  return (
    <>
      <div className="container-fixed col-span-1 lg:col-span-2">
        <div className="flex items-center gap-2.5">
          <Button className="btn btn-sm btn-primary" onClick={handleAddClick}>
            Add Member
          </Button>
        </div>
        {/* Table */}
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
        </div>
        <div
          ref={formRef}
          className="flex flex-col items-stretch grow gap-5 lg:gap-7.5"
        >
          <div className="card pb-2.5">
            <div className="card-header" id="basic_settings">
              <h3 className="card-title"></h3>
            </div>
            <div className="card-body grid gap-5">
              <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label className="form-label max-w-56">Title</label>
                <input
                  className="input"
                  type="text"
                  placeholder="title must be longer than or equal to 5 characters"
                  defaultValue=""
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label className="form-label max-w-56">Description</label>
                <input
                  className="input"
                  placeholder="description must have 10-100 characters"
                  type="text"
                  defaultValue=""
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="btn btn-primary"
                  onClick={handleCreateCategory}
                >
                  Create new Category
                </button>
              </div>
            </div>
          </div>
        </div>
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
