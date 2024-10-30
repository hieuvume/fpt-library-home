function Sidebar() {
    return <div
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
            <a className="dark:hidden" href="html/demo1.html">
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
            </a>
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
                    <div className="menu-item">
                        <div
                            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                            tabIndex={0}
                        >
                            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <i className="ki-filled ki-profile-circle text-lg"></i>
                            </span>
                            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
                               Loans
                            </span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div
                            className="menu-label gap-[10px] pl-[10px] pr-[10px] py-[6px] border border-transparent"
                            tabIndex={0}
                        >
                            <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                                <i className="ki-filled ki-handcart text-lg"></i>
                            </span>
                            <span className="menu-title text-sm font-semibold text-gray-700">
                                eCommerce
                            </span>
                            <span className="menu-badge mr-[-10px]">
                                <span className="badge badge-xs">Soon</span>
                            </span>
                        </div>
                    </div>
                    <div className="menu-item pt-2.25 pb-px">
                        <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
                            Miscellaneous
                        </span>
                    </div>
                    <div className="menu-item">
                        <div
                            className="menu-label gap-[10px] pl-[10px] pr-[10px] py-[6px] border border-transparent"
                            tabIndex={0}
                        >
                            <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                                <i className="ki-filled ki-some-files text-lg"></i>
                            </span>
                            <span className="menu-title text-sm font-semibold text-gray-700">
                                Modals
                            </span>
                            <span className="menu-badge mr-[-10px]">
                                <span className="badge badge-xs">Soon</span>
                            </span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div
                            className="menu-label gap-[10px] pl-[10px] pr-[10px] py-[6px] border border-transparent"
                            tabIndex={0}
                        >
                            <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
                                <i className="ki-filled ki-note-2 text-lg"></i>
                            </span>
                            <span className="menu-title text-sm font-semibold text-gray-700">
                                Wizards
                            </span>
                            <span className="menu-badge mr-[-10px]">
                                <span className="badge badge-xs">Soon</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar