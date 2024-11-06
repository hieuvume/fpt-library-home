import Link from "next/link";

function OwnerSidebar() {
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
        <Link className="dark:hidden" href="/">
          <img
            alt=""
            className="default-logo min-h-[22px] max-w-none"
            src="/media/app/default-logo.svg"
          />
          <img
            alt=""
            className="small-logo min-h-[22px] max-w-none"
            src="/media/app/mini-logo.svg"
          />
        </Link>
        <a className="hidden dark:block" href="html/demo1.html">
          <img
            alt=""
            className="default-logo min-h-[22px] max-w-none"
            src="/media/app/default-logo-dark.svg"
          />
          <img
            alt=""
            className="small-logo min-h-[22px] max-w-none"
            src="/media/app/mini-logo.svg"
          />
        </a>
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
            <div className="menu-item hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link
                className="menu-link gap-[10px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                href="/dashboard"
                tabIndex={0}
              >
                <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                  <i className="ki-filled ki-chart-simple text-lg"></i>
                </span>
                <span className="menu-title text-sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                  Dashboard
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerSidebar;
