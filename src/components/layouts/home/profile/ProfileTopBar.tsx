import Link from "next/link";

export default function ProfileTopBar() {
  return (
    <>
      {" "}
      <div className="container-fixed">
        <div className="flex items-center flex-wrap md:flex-nowrap lg:items-end justify-between border-b border-b-gray-200 dark:border-b-coal-100 gap-3 lg:gap-6 mb-5 lg:mb-10">
          <div className="grid">
            <div className="scrollable-x-auto">
              <div className="menu gap-3" data-menu="true">
                <div
                  className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary here menu-item-dropdown"
                  data-menu-item-placement="bottom-start"
                  data-menu-item-toggle="dropdown"
                  data-menu-item-trigger="click|lg:hover"
                >
                  <Link
                    className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                    tabIndex={0}
                    href={"/user/profile"}
                  >
                    <span className="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
                      Profiles
                    </span>
                  </Link>
                </div>
                <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
                  <Link
                    className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                    href="/membership"
                    tabIndex={0}
                  >
                    <span className="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                      Membership
                    </span>
                  </Link>
                </div>
                <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
                  <a
                    className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                    href="/metronic/tailwind/demo9/public-profile/teams"
                    tabIndex={0}
                  >
                    <span className="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                      Teams
                    </span>
                  </a>
                </div>
                <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
                  <a
                    className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                    href="/metronic/tailwind/demo9/public-profile/network"
                    tabIndex={0}
                  >
                    <span className="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                      Network
                    </span>
                  </a>
                </div>
                <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
                  <a
                    className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                    href="/metronic/tailwind/demo9/public-profile/activity"
                    tabIndex={0}
                  >
                    <span className="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                      Activity
                    </span>
                  </a>
                </div>
                <div
                  className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary menu-item-dropdown"
                  data-menu-item-placement="bottom-start"
                  data-menu-item-toggle="dropdown"
                  data-menu-item-trigger="click|lg:hover"
                >
                  <div
                    className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                    tabIndex={0}
                  >
                    <span className="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
                      More
                    </span>
                    <span className="menu-arrow">
                      <i className="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary"></i>
                    </span>
                  </div>
                  <div
                    className="menu-dropdown menu-default py-2 min-w-[200px]"
                    style={{}}
                  >
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="/metronic/tailwind/demo9/public-profile/campaigns/card"
                        tabIndex={0}
                      >
                        <span className="menu-title">Campaigns - Card</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="/metronic/tailwind/demo9/public-profile/campaigns/list"
                        tabIndex={0}
                      >
                        <span className="menu-title">Campaigns - List</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="/metronic/tailwind/demo9/public-profile/empty"
                        tabIndex={0}
                      >
                        <span className="menu-title">Empty</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end grow lg:grow-0 lg:pb-4 gap-2.5 mb-3 lg:mb-0">
            <button className="dropdown-toggle btn btn-sm btn-primary">
              <i className="ki-filled ki-users"></i>
              Connect
            </button>
            <button className="btn btn-sm btn-icon btn-light">
              <i className="ki-filled ki-messages"></i>
            </button>
            <div
              className="dropdown"
              data-dropdown="true"
              data-dropdown-placement="bottom-end"
              data-dropdown-trigger="click"
            >
              <button className="dropdown-toggle btn btn-sm btn-icon btn-light">
                <i className="ki-filled ki-dots-vertical"></i>
              </button>
              <div className="dropdown-content menu-default w-full max-w-[220px]">
                <div className="menu-item" data-dropdown-dismiss="true">
                  <button
                    className="menu-link"
                    data-modal-toggle="#share_profile_modal"
                  >
                    <span className="menu-icon">
                      <i className="ki-filled ki-coffee"></i>
                    </span>
                    <span className="menu-title">Share Profile</span>
                  </button>
                </div>
                <div className="menu-item" data-dropdown-dismiss="true">
                  <a
                    className="menu-link"
                    data-modal-toggle="#give_award_modal"
                    href="#"
                  >
                    <span className="menu-icon">
                      <i className="ki-filled ki-award"></i>
                    </span>
                    <span className="menu-title">Give Award</span>
                  </a>
                </div>
                <div className="menu-item" data-dropdown-dismiss="true">
                  <button className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-filled ki-chart-line"></i>
                    </span>
                    <span className="menu-title">Stay Updated</span>
                    <label className="switch switch-sm">
                      <input name="check" type="checkbox" defaultValue={1} />
                    </label>
                  </button>
                </div>
                <div className="menu-item" data-dropdown-dismiss="true">
                  <button
                    className="menu-link"
                    data-modal-toggle="#report_user_modal"
                  >
                    <span className="menu-icon">
                      <i className="ki-filled ki-information-2"></i>
                    </span>
                    <span className="menu-title">Report User</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
