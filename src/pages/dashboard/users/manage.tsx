import axios from "axios"
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Users } from "@/models/user"
import DashboardLayout from "@/components/layouts/DashboardLayout"
import { dashboardUserApi } from "@/api/user";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";


export default function UserManagePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: users, isLoading } = useSWR(`users`, () =>
    dashboardUserApi.getUsers()
  );
  const [filteredUsers, setFilteredUsers] = useState<Users[]>([])
  const [search, setSearch] = useState('')
  const [activeOnly, setActiveOnly] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(10)

  useEffect(() => {
    if (users) {
      filterUsers();
    }
  }, [search, activeOnly, users, usersPerPage]);

  const filterUsers = () => {
    if (!users) return;

    let filtered = users.filter((user) =>
      user.full_name.toLowerCase().includes(search.toLowerCase())
    );
    if (activeOnly) {
      filtered = filtered.filter((user) => user.status === true);
    }
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleUsersPerPageChange = (event) => {
    setUsersPerPage(Number(event.target.value)); // Chuyển đổi thành kiểu số nguyên
    setCurrentPage(1); // Reset lại trang hiện tại về 1 mỗi khi thay đổi số lượng người dùng trên trang
  };

  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  // Đảm bảo currentPage không vượt quá tổng số trang
  const adjustedCurrentPage =
    currentPage > totalPages ? totalPages : currentPage;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    Math.min(indexOfLastUser, totalUsers)
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Container */}
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-medium leading-none text-gray-900">
              Team Members({users?.length})
            </h1>
            <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
              Overview of all team members and roles.
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <a className="btn btn-sm btn-light" href="#">
              Import Members
            </a>
            <Button className="btn btn-sm btn-primary" onPress={onOpen}>
              Add Member
            </Button>
          </div>
        </div>
      </div>
      {/* End of Container */}
      {/* Container */}
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <div className="card card-grid min-w-full">
            <div className="card-header py-5 flex-wrap">
              <h3 className="card-title">Team Members</h3>
              <div className="flex gap-6">
                <div className="relative">
                  <i className="ki-filled ki-magnifier leading-none text-md text-gray-500 absolute top-1/2 left-0 -translate-y-1/2 ml-3"></i>
                  <input
                    className="input input-sm pl-8"
                    data-datatable-search="#members_table"
                    placeholder="Search Members"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <label className="switch switch-sm">
                  <input
                    className="order-2"
                    name="check"
                    type="checkbox"
                    defaultValue={1}
                    checked={activeOnly}
                    onChange={(e) => setActiveOnly(e.target.checked)}
                  />
                  <span className="switch-label order-1">Active Users</span>
                </label>
              </div>
            </div>
            <div className="card-body">
              <div
                data-datatable="true"
                data-datatable-page-size={10}
                className="datatable-initialized"
              >
                <div className="scrollable-x-auto">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    data-datatable-spinner="true"
                    style={{ display: "none" }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 font-medium leading-none text-2sm border border-gray-200 shadow-default rounded-md text-gray-500 bg-light">
                      <svg
                        className="animate-spin -ml-1 h-5 w-5 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx={12}
                          cy={12}
                          r={10}
                          stroke="currentColor"
                          strokeWidth={3}
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Loading...
                    </div>
                  </div>
                  <table
                    className="table table-border"
                    data-datatable-table="true"
                    id="members_table"
                  >
                    <thead>
                      <tr>
                        <th className="min-w-[300px]">
                          <span className="sort asc">
                            <span className="sort-label text-gray-700 font-normal">
                              Member
                            </span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="text-gray-700 font-normal min-w-[220px]">
                          Roles
                        </th>
                        <th className="min-w-[165px]">
                          <span className="sort">
                            <span className="sort-label text-gray-700 font-normal">
                              Email
                            </span>
                          </span>
                        </th>
                        <th className="min-w-[165px]">
                          <span className="sort">
                            <span className="sort-label text-gray-700 font-normal">
                              Address
                            </span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="min-w-[165px]">
                          <span className="sort">
                            <span className="sort-label text-gray-700 font-normal">
                              Status
                            </span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="min-w-[165px]">
                          <span className="sort">
                            <span className="sort-label text-gray-700 font-normal">
                              Recent activity
                            </span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="w-[60px]"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentUsers.map((user) => (
                        <tr>
                          <td>
                            <div className="flex items-center gap-2.5">
                              <div className="">
                                <img
                                  className="h-9 rounded-full"
                                  src={user.avatar_url}
                                />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <a
                                  className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                                  href="#"
                                >
                                  {user.full_name}
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="flex flex-wrap gap-2.5 mb-2">
                              <span className="badge badge-sm badge-light badge-outline">
                                Chat {user.role}
                              </span>
                            </div>
                          </td>
                          <td className="text-gray-800 font-normal">
                            {user.email}
                          </td>
                          <td>
                            <div className="flex items-center gap-1.5">
                              <span className="leading-none text-gray-800 font-normal">
                                {user.address}
                              </span>
                            </div>
                          </td>
                          <td>
                            <span className={`badge badge-sm badge-outline ${user.status ? 'badge-success' : 'badge-danger'}`}>
                              {user.status ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="text-gray-800 font-normal">
                            Today, 11:45 am
                          </td>
                          <td className="w-[60px]">
                            <div className="menu" data-menu="true">
                              <div
                                className="menu-item menu-item-dropdown"
                                data-menu-item-offset="0, 10px"
                                data-menu-item-placement="bottom-end"
                                data-menu-item-toggle="dropdown"
                                data-menu-item-trigger="click|lg:click"
                              >
                                <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                                  <i className="ki-filled ki-dots-vertical"></i>
                                </button>
                                <div
                                  className="menu-dropdown menu-default w-full max-w-[175px]"
                                  data-menu-dismiss="true"
                                >
                                  <div className="menu-item">
                                    <a className="menu-link" href="#">
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-search-list"></i>
                                      </span>
                                      <span className="menu-title">View</span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#">
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-file-up"></i>
                                      </span>
                                      <span className="menu-title">Export</span>
                                    </a>
                                  </div>
                                  <div className="menu-separator"></div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#">
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-pencil"></i>
                                      </span>
                                      <span className="menu-title">Edit</span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#">
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-copy"></i>
                                      </span>
                                      <span className="menu-title">Make a copy</span>
                                    </a>
                                  </div>
                                  <div className="menu-separator"></div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#">
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-trash"></i>
                                      </span>
                                      <span className="menu-title">Ban</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
                <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                  <div className="flex items-center gap-2 order-2 md:order-1">
                    Show
                    <select
                      className="select select-sm w-16"
                      data-datatable-size="true"
                      name="perpage"
                      value={usersPerPage.toString()}
                      onChange={handleUsersPerPageChange}
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={50}>50</option>
                    </select>
                    per page
                  </div>
                  <div className="flex items-center gap-4 order-1 md:order-2">
                    <span data-datatable-info="true">{indexOfFirstUser + 1}-{Math.min(indexOfLastUser, totalUsers)} of {filteredUsers.length}</span>
                    <div className="pagination" data-datatable-pagination="true">
                      <div className="pagination">
                        <button
                          className="btn"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <i className="ki-outline ki-black-left" />
                        </button>
                        {pageNumbers.map((number) => (
                          <button
                            key={number}
                            className={`btn ${currentPage === number ? "active" : ""}`}
                            onClick={() => setCurrentPage(number)}
                            disabled={currentPage === number}
                          >
                            {number}
                          </button>
                        ))}
                        <button
                          className="btn"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === pageNumbers.length}
                        >
                          <i className="ki-outline ki-black-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
            <form className="card">
              <div className="card-header">
                <h3 className="card-title">Invite People</h3>
              </div>
              <div className="card-body grid gap-5">
                <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                  <label className="form-label max-w-32">Email</label>
                  <input
                    className="input"
                    name="user_email"
                    placeholder=""
                    type="text"
                    defaultValue="jason@studio.io"
                  />
                </div>
                <div className="flex items-baseline flex-wrap gap-2.5">
                  <label className="form-label max-w-32">Role</label>
                  <div className="flex flex-col items-start grow gap-5">
                    <select className="select" name="user_role">
                      <option selected value={1}>
                        Member
                      </option>
                      <option value={2}>Editor</option>
                      <option value={3}>Designer</option>
                      <option value={4}>Admin</option>
                    </select>
                    <a className="btn btn-sm btn-light btn-outline" href="#">
                      <i className="ki-filled ki-plus-squared"></i>
                      Add more
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer justify-center">
                <a className="btn btn-sm btn-primary" href="#">
                  Invite People
                </a>
              </div>
            </form>
            <form className="card">
              <div className="card-header">
                <h3 className="card-title">Invite with Link</h3>
              </div>
              <div className="card-body grid gap-5">
                <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                  <label className="form-label max-w-32">Link</label>
                  <div className="flex flex-col items-start grow gap-5">
                    <div className="relative w-full">
                      <input
                        className="input"
                        name="user_email"
                        placeholder=""
                        type="text"
                        defaultValue="https://www.ktstudio.com/RSVP?c=12345XYZt"
                      />
                      <button className="btn btn-clear btn-light btn-icon btn-sm absolute right-0 top-2/4 -translate-y-2/4 me-1.5">
                        <i className="ki-filled ki-copy"></i>
                      </button>
                    </div>
                    <a className="btn btn-sm btn-light btn-outline" href="#">
                      <i className="ki-filled ki-arrows-circle"></i>
                      Reset Link
                    </a>
                  </div>
                </div>
                <p className="text-gray-800 text-2sm">
                  Click below to RSVP for our exclusive event. Limited spaces
                  available, so don't miss out. Reserve your spot now with this
                  special invitation link!
                </p>
              </div>
              <div className="card-footer justify-center">
                <a className="btn btn-sm btn-primary" href="#">
                  Invite People
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End of Container */}


      <div>
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
      </div>


    </>
  )
}
UserManagePage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
