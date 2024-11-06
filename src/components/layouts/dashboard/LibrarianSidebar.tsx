import Image from "next/image";
import Link from "next/link";

function LibrarianSidebar() {
  return (
    <div
      className="sidebar dark:bg-coal-600 bg-light border-r border-r-gray-200 dark:border-r-coal-100 fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0"
      data-drawer="true"
      data-drawer-class="drawer drawer-start top-0 bottom-0"
      data-drawer-enable="true|lg:false"
      id="sidebar"
    >
      <div
        className="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0"
        id="sidebar_header"
      >
            <Link href="/">
              <Image
                alt=""
                width={30}
                height={30}
                className="dark:hidden min-h-[30px]"
                src="/logo.png"
              />

              <Image
                alt=""
                width={30}
                height={30}
                className="hidden dark:inline-block min-h-[30px]"
                src="/logo-white.png"
              />
            </Link>
   
        <button
          className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4"
          data-toggle="body"
          data-toggle-class="sidebar-collapse"
          id="sidebar_toggle"
        >
          <i className="ki-filled ki-black-left-line toggle-active:rotate-180 transition-all duration-300"></i>
        </button>
      </div>
      <div
        className="sidebar-content flex grow shrink-0 py-5 pr-2"
        id="sidebar_content"
      >
        <div
          className="scrollable-y-hover grow shrink-0 flex pl-2 lg:pl-5 pr-1 lg:pr-3"
          data-scrollable="true"
          data-scrollable-dependencies="#sidebar_header"
          data-scrollable-height="auto"
          data-scrollable-offset="0px"
          data-scrollable-wrappers="#sidebar_content"
          id="sidebar_scrollable"
        >
          <div
            className="menu flex flex-col grow gap-0.5"
            data-menu="true"
            data-menu-accordion-expand-all="false"
            id="sidebar_menu"
          >

            <div className="menu-item pt-2.25 pb-px">
              <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
                LIBRARIAN
              </span>
            </div>

            <div className="menu-item hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link
                className="menu-link gap-[10px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                href="/dashboard/librarian"
                tabIndex={0}
              >
                <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                  <i className="ki-filled ki-users text-lg"></i>
                </span>
                <span className="menu-title text-sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                  Borrow Books
                </span>
              </Link>
            </div>

            <div className="menu-item hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link
                className="menu-link gap-[10px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                href="/dashboard/payments"
                tabIndex={0}
              >
                <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                  <i className="ki-filled ki-users text-lg"></i>
                </span>
                <span className="menu-title text-sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                  Payments
                </span>
              </Link>
            </div>

            <div className="menu-item hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link
                className="menu-link gap-[10px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                href="/dashboard/users/manage"
                tabIndex={0}
              >
                <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                  <i className="ki-filled ki-users text-lg"></i>
                </span>
                <span className="menu-title text-sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                  User Management
                </span>
              </Link>
            </div>

            <div className="menu-item hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link
                className="menu-link gap-[10px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                href="/dashboard/category/list"
                tabIndex={0}
              >
                <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                  <i className="ki-filled ki-category text-lg"></i>
                </span>
                <span className="menu-title text-sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                  Category Management
                </span>
              </Link>
            </div>
            <div className="menu-item hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link
                className="menu-link gap-[10px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                href="/dashboard/membership"
                tabIndex={0}
              >
                <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                  <i className="ki-filled ki-category text-lg"></i>
                </span>
                <span className="menu-title text-sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                  Memberships Management
                </span>
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default LibrarianSidebar;