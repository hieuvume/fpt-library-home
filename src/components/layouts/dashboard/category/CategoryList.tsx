import { dashboardCategoryApi } from "@/api/category";
import Table from "@/components/table/Table";
import TableHeader from "@/components/table/TableHeader";
import TablePagination from "@/components/table/TablePagination";
import { Category } from "@/models/category";
import { TableQueryProvider } from "@/provider/TableQueryProvider";
import Link from "next/link";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";
import { Column } from "react-table";

const columns: ReadonlyArray<Column<Category[]>> = [
  {
    Header: ({ column: { id } }) => <TableHeader title="Title" id={id} />,
    accessor: "title", // Thay đổi để khớp với dữ liệu trả về từ API
    Cell: ({ value }) => (
      <div className="flex items-center gap-2.5">
        <Link
          className="leading-none font-medium text-gray-900 hover:text-primary"
          href={`/books/${value?._id}`}
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="container-fixed col-span-1 lg:col-span-2">


      {/* Modal */}
      <div className="flex items-center gap-2.5">
        <Button className="btn btn-sm btn-primary" onPress={onOpen}>
          Add Member
        </Button>
      </div>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-stretch grow gap-5 lg:gap-7.5">
                  <div className="card pb-2.5">
                    <div className="card-header" id="basic_settings">
                      <h3 className="card-title"></h3>
                      <div className="flex items-center gap-2">
                        <label className="switch switch-sm">
                          <span className="switch-label">Public Profile</span>
                          <input
                            defaultChecked
                            name="check"
                            type="checkbox"
                            defaultValue={1}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="card-body grid gap-5">
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Photo</label>
                        <div className="flex items-center justify-between flex-wrap grow gap-2.5">
                          <span className="text-2sm">
                            150x150px JPEG, PNG Image
                          </span>
                          <div
                            className="image-input size-16"
                            data-image-input="true"
                          >
                            <input
                              accept=".png, .jpg, .jpeg"
                              name="avatar"
                              type="file"
                            />
                            <input name="avatar_remove" type="hidden" />
                            <div
                              className="btn btn-icon btn-icon-xs btn-light shadow-default absolute z-1 size-5 -top-0.5 -end-0.5 rounded-full"
                              data-image-input-remove=""
                              data-tooltip="#image_input_tooltip"
                              data-tooltip-trigger="hover"
                            >
                              <i className="ki-filled ki-cross"></i>
                            </div>
                            <span className="tooltip" id="image_input_tooltip">
                              Click to remove or revert
                            </span>
                            <div
                              className="image-input-placeholder rounded-full border-2 border-success image-input-empty:border-gray-300"
                              style={{
                                backgroundImage:
                                  "url(/static/metronic/tailwind/dist/assets/media/avatars/blank.png)"
                              }}
                            >
                              <div
                                className="image-input-preview rounded-full"
                                style={{
                                  backgroundImage:
                                    "url(/static/metronic/tailwind/dist/assets/media/avatars/300-2.png)"
                                }}
                              ></div>
                              <div className="flex items-center justify-center cursor-pointer h-5 left-0 right-0 bottom-0 bg-dark-clarity absolute">
                                <svg
                                  className="fill-light opacity-80"
                                  height={12}
                                  viewBox="0 0 14 12"
                                  width={14}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.6665 2.64585H11.2232C11.0873 2.64749 10.9538 2.61053 10.8382 2.53928C10.7225 2.46803 10.6295 2.36541 10.5698 2.24335L10.0448 1.19918C9.91266 0.931853 9.70808 0.707007 9.45438 0.550249C9.20068 0.393491 8.90806 0.311121 8.60984 0.312517H5.38984C5.09162 0.311121 4.799 0.393491 4.5453 0.550249C4.2916 0.707007 4.08701 0.931853 3.95484 1.19918L3.42984 2.24335C3.37021 2.36541 3.27716 2.46803 3.1615 2.53928C3.04584 2.61053 2.91234 2.64749 2.7765 2.64585H2.33317C1.90772 2.64585 1.49969 2.81486 1.19885 3.1157C0.898014 3.41654 0.729004 3.82457 0.729004 4.25002V10.0834C0.729004 10.5088 0.898014 10.9168 1.19885 11.2177C1.49969 11.5185 1.90772 11.6875 2.33317 11.6875H11.6665C12.092 11.6875 12.5 11.5185 12.8008 11.2177C13.1017 10.9168 13.2707 10.5088 13.2707 10.0834V4.25002C13.2707 3.82457 13.1017 3.41654 12.8008 3.1157C12.5 2.81486 12.092 2.64585 11.6665 2.64585ZM6.99984 9.64585C6.39413 9.64585 5.80203 9.46624 5.2984 9.12973C4.79478 8.79321 4.40225 8.31492 4.17046 7.75532C3.93866 7.19572 3.87802 6.57995 3.99618 5.98589C4.11435 5.39182 4.40602 4.84613 4.83432 4.41784C5.26262 3.98954 5.80831 3.69786 6.40237 3.5797C6.99644 3.46153 7.61221 3.52218 8.1718 3.75397C8.7314 3.98576 9.2097 4.37829 9.54621 4.88192C9.88272 5.38554 10.0623 5.97765 10.0623 6.58335C10.0608 7.3951 9.73765 8.17317 9.16365 8.74716C8.58965 9.32116 7.81159 9.64431 6.99984 9.64585Z"
                                    fill=""
                                  ></path>
                                  <path
                                    d="M7 8.77087C8.20812 8.77087 9.1875 7.7915 9.1875 6.58337C9.1875 5.37525 8.20812 4.39587 7 4.39587C5.79188 4.39587 4.8125 5.37525 4.8125 6.58337C4.8125 7.7915 5.79188 8.77087 7 8.77087Z"
                                    fill=""
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Name</label>
                        <input
                          className="input"
                          type="text"
                          defaultValue="Jason Tatum"
                        />
                      </div>
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">
                          Phone number
                        </label>
                        <input
                          className="input"
                          placeholder="Phone number"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Email</label>
                        <input
                          className="input"
                          type="text"
                          defaultValue="jason@studio.io"
                        />
                      </div>
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Address</label>
                        <input
                          className="input"
                          placeholder=""
                          type="text"
                          defaultValue="Avinguda Imaginària, 789"
                        />
                      </div>
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Country</label>
                        <select className="select">
                          <option>Spain</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">State</label>
                        <input
                          className="input"
                          placeholder="State"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">City</label>
                        <input
                          className="input"
                          type="text"
                          defaultValue="Barcelona"
                        />
                      </div>
                      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
                        <label className="form-label max-w-56">Postcode</label>
                        <input
                          className="input"
                          type="text"
                          defaultValue='08012'
                        />
                      </div>
                      <div className="flex justify-end">
                        <button className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Table */}
      <div className="flex flex-col gap-5 lg:gap-7.5">
        <div className="card card-grid min-w-full">
          <div className="card-header">
            <h3 className="card-title">Categories</h3>
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
