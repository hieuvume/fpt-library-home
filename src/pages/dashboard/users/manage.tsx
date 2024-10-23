import axios from "axios";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Users } from "@/models/user";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { dashboardUserApi } from "@/api/user";

export default function UserManagePage() {
  const { data: users, isLoading } = useSWR(`users`, () =>
    dashboardUserApi.getUsers()
  );
  const [filteredUsers, setFilteredUsers] = useState<Users[]>([]);
  const [search, setSearch] = useState("");
  const [activeOnly, setActiveOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

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
            <a className="btn btn-sm btn-primary" href="#">
              Add Member
            </a>
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
                        <th className="w-[60px] text-center">
                          <input
                            className="checkbox checkbox-sm"
                            data-datatable-check="true"
                            type="checkbox"
                          />
                        </th>
                        <th className="min-w-[300px]">
                          <span className="sort asc">
                            <span className="sort-label text-gray-700 font-normal">
                              Member
                            </span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="min-w-[165px]">
                          <span className="sort">
                            <span className="sort-label text-gray-700 font-normal">
                              Username
                            </span>
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
                              Location
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
                          <td className="text-center">
                            <input
                              className="checkbox checkbox-sm"
                              data-datatable-row-check="true"
                              type="checkbox"
                              defaultValue={21}
                            />
                          </td>
                          <td>
                            <div className="flex items-center gap-2.5">
                              <div className="">
                                <img
                                  className="h-9 rounded-full"
                                  src="/static/metronic/tailwind/dist/assets/media/avatars/300-22.png"
                                />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <a
                                  className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                                  href="#"
                                >
                                  {user.full_name}
                                </a>
                                <span className="text-xs text-gray-700 font-normal">
                                  43 tasks
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-gray-800 font-normal">
                            {user.username}
                          </td>
                          <td>
                            <div className="flex flex-wrap gap-2.5 mb-2">
                              <span className="badge badge-sm badge-light badge-outline">
                                Chat
                              </span>
                              <span className="badge badge-sm badge-light badge-outline">
                                Tester
                              </span>
                            </div>
                          </td>
                          <td className="text-gray-800 font-normal">
                            {user.email}
                          </td>
                          <td>
                            <div className="flex items-center gap-1.5">
                              <img
                                alt="flag"
                                className="h-4 rounded-full"
                                src="/static/metronic/tailwind/dist/assets/media/flags/ukraine.svg"
                              />
                              <span className="leading-none text-gray-800 font-normal">
                                Ukraine
                              </span>
                            </div>
                          </td>
                          <td>
                            <span
                              className={`badge badge-sm badge-outline ${
                                user.status ? "badge-success" : "badge-error"
                              }`}
                            >
                              {user.status ? "Active" : "Inactive"}
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
                                      <span className="menu-title">
                                        Make a copy
                                      </span>
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
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={50}>50</option>
                    </select>
                    per page
                  </div>
                  <div className="flex items-center gap-4 order-1 md:order-2">
                    <span data-datatable-info="true">
                      {indexOfFirstUser + 1}-
                      {Math.min(indexOfLastUser, totalUsers)} of{" "}
                      {filteredUsers.length}
                    </span>
                    <div
                      className="pagination"
                      data-datatable-pagination="true"
                    >
                      <div className="pagination">
                        <button className="btn">
                          <i className="ki-outline ki-black-left" />
                        </button>
                        {pageNumbers.map((number) => (
                          <button
                            key={number}
                            // variant={`${currentPage === number ? "default" : "outline"}`}
                            onClick={() => setCurrentPage(number)}
                          >
                            {number}
                          </button>
                        ))}
                        <button className="btn">
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
    </>
  );
}
UserManagePage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
