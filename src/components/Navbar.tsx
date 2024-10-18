import Link from "next/link";

function Navbar() {
  return (
    <div
      className="bg-[--tw-navbar-bg] dark:bg-[--tw-navbar-bg-dark] hidden lg:flex lg:items-stretch border-y border-gray-300 dark:border-t-light dark:border-light mb-5 lg:mb-10"
      data-drawer="true"
      data-drawer-class="drawer drawer-start fixed z-10 top-0 bottom-0 w-full mr-5 max-w-[250px] p-5 lg:p-0 overflow-auto"
      data-drawer-enable="true|lg:false"
      id="navbar"
    >
      {/* Container */}
      <div className="container-fixed flex flex-wrap justify-between items-center gap-2 px-0 lg:px-7.5">
        {/* Mega Menu */}
        <div
          className="menu items-stretch flex-col lg:flex-row gap-5 lg:gap-7.5 grow lg:grow-0"
          data-menu="true"
          id="mega_menu"
        >
          <div className="menu-item active">
            <Link
              className="menu-link lg:py-3.5 border-b border-b-transparent menu-item-active:border-b-gray-800 text-gray-800 menu-item-hover:text-gray-900 menu-item-active:text-gray-900 menu-item-here:border-b-gray-800 menu-item-here:text-gray-900"
              href="/book/2211"
            >
              <span className="menu-title font-medium text-gray-800 text-sm">
                Boards
              </span>
            </Link>
          </div>
          <div
            className="menu-item menu-item-dropdown"
            data-menu-item-placement="bottom-start"
            data-menu-item-toggle="accordion|lg:dropdown"
            data-menu-item-trigger="click|lg:hover"
          >
            <div className="menu-link lg:py-3.5 border-b border-b-transparent menu-item-active:border-b-gray-800 text-gray-800 menu-item-hover:text-gray-900 menu-item-active:text-gray-900 menu-item-here:border-b-gray-800 menu-item-here:text-gray-900">
              <span className="menu-title font-medium text-gray-800 text-sm">
                Profiles
              </span>
              <span className="menu-arrow flex lg:hidden">
                <i className="ki-filled ki-plus text-2xs text-gray-600 menu-item-show:hidden"></i>
                <i className="ki-filled ki-minus text-2xs text-gray-600 hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div className="w-full gap-0 lg:max-w-[875px] menu-dropdown">
              <div className="pt-4 pb-2 lg:p-7.5">
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
                  <div className="menu menu-default menu-fit flex-col">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                      Profiles
                    </h3>
                    <div className="grid lg:grid-cols-2 lg:gap-5">
                      <div className="flex flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/default"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-badge"></i>
                            </span>
                            <span className="menu-title grow-0">Default</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/creator"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-coffee"></i>
                            </span>
                            <span className="menu-title grow-0">Creator</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/company"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-abstract-41"></i>
                            </span>
                            <span className="menu-title grow-0">Company</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/nft"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-bitcoin"></i>
                            </span>
                            <span className="menu-title grow-0">NFT</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/blogger"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-message-text"></i>
                            </span>
                            <span className="menu-title grow-0">Blogger</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/crm"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-devices"></i>
                            </span>
                            <span className="menu-title grow-0">CRM</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/gamer"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-ghost"></i>
                            </span>
                            <span className="menu-title grow-0">Gamer</span>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/feeds"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-book"></i>
                            </span>
                            <span className="menu-title grow-0">Feeds</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/plain"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-files"></i>
                            </span>
                            <span className="menu-title grow-0">Plain</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/modal"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-mouse-square"></i>
                            </span>
                            <span className="menu-title grow-0">Modal</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-financial-schedule"></i>
                            </span>
                            <span className="menu-title grow-0">
                              Freelancer
                            </span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-technology-4"></i>
                            </span>
                            <span className="menu-title grow-0">Developer</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-users"></i>
                            </span>
                            <span className="menu-title grow-0">Team</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-calendar-tick"></i>
                            </span>
                            <span className="menu-title grow-0">Events</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu menu-default menu-fit flex-col">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                      Other Pages
                    </h3>
                    <div className="grid lg:grid-cols-2 lg:gap-5">
                      <div className="flex flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/projects/3-columns"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-element-6"></i>
                            </span>
                            <span className="menu-title grow-0">
                              Projects - 3 Columns
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/projects/2-columns"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-element-4"></i>
                            </span>
                            <span className="menu-title grow-0">
                              Projects - 2 Columns
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/works"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-office-bag"></i>
                            </span>
                            <span className="menu-title grow-0">Works</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/teams"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-people"></i>
                            </span>
                            <span className="menu-title grow-0">Teams</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/network"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-icon"></i>
                            </span>
                            <span className="menu-title grow-0">Network</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/activity"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-chart-line-up-2"></i>
                            </span>
                            <span className="menu-title grow-0">Activity</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/campaigns/card"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-element-11"></i>
                            </span>
                            <span className="menu-title grow-0">
                              Campaigns - Card
                            </span>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/campaigns/list"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-kanban"></i>
                            </span>
                            <span className="menu-title grow-0">
                              Campaigns - List
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/public-profile/empty"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-file-sheet"></i>
                            </span>
                            <span className="menu-title grow-0">
                              Empty Page
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-document"></i>
                            </span>
                            <span className="menu-title grow-0">Documents</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-award"></i>
                            </span>
                            <span className="menu-title grow-0">Badges</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-gift"></i>
                            </span>
                            <span className="menu-title grow-0">Awards</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                <div className="flex flex-col gap-1.5">
                  <div className="text-md font-semibold text-gray-900 leading-none">
                    Read to Get Started ?
                  </div>
                  <div className="text-2sm fomt-medium text-gray-600">
                    Take your docs to the next level of Metronic
                  </div>
                </div>
                <a className="btn btn-sm btn-dark" href="#">
                  Read Documentation
                </a>
              </div>
            </div>
          </div>
          <div
            className="menu-item menu-item-dropdown"
            data-menu-item-offset="-158px, 0"
            data-menu-item-overflow="true"
            data-menu-item-placement="bottom-start"
            data-menu-item-toggle="accordion|lg:dropdown"
            data-menu-item-trigger="click|lg:hover"
          >
            <div className="menu-link lg:py-3.5 border-b border-b-transparent menu-item-active:border-b-gray-800 text-gray-800 menu-item-hover:text-gray-900 menu-item-active:text-gray-900 menu-item-here:border-b-gray-800 menu-item-here:text-gray-900">
              <span className="menu-title font-medium text-gray-800 text-sm">
                Account
              </span>
              <span className="menu-arrow flex lg:hidden">
                <i className="ki-filled ki-plus text-2xs text-gray-600 menu-item-show:hidden"></i>
                <i className="ki-filled ki-minus text-2xs text-gray-600 hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div className="flex-col lg:flex-row gap-0 w-full lg:max-w-[1240px] menu-dropdown">
              <div className="lg:w-[250px] mt-2 lg:mt-0 lg:border-r lg:border-r-gray-200 rounded-xl lg:rounded-l-xl lg:rounded-r-none shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-r-coal-100">
                <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                  General Pages
                </h3>
                <div className="menu menu-default menu-fit flex-col">
                  <div className="menu-item">
                    <a
                      className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                      href="/metronic/tailwind/demo9/account/integrations"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-technology-2"></i>
                      </span>
                      <span className="menu-title grow-0">Integrations</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                      href="/metronic/tailwind/demo9/account/notifications"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-notification-1"></i>
                      </span>
                      <span className="menu-title grow-0">Notifications</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                      href="/metronic/tailwind/demo9/account/api-keys"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-key"></i>
                      </span>
                      <span className="menu-title grow-0">API Keys</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                      href="/metronic/tailwind/demo9/account/appearance"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-eye"></i>
                      </span>
                      <span className="menu-title grow-0">Appearance</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                      href="/metronic/tailwind/demo9/account/invite-a-friend"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-user-tick"></i>
                      </span>
                      <span className="menu-title grow-0">Invite a Friend</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                      href="/metronic/tailwind/demo9/account/activity"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-support"></i>
                      </span>
                      <span className="menu-title grow-0">Activity</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                      href="#"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-verify"></i>
                      </span>
                      <span className="menu-title grow-0">Brand</span>
                      <span className="menu-badge">
                        <span className="badge badge-xs">Soon</span>
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                      href="#"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-euro"></i>
                      </span>
                      <span className="menu-title grow-0">Get Paid</span>
                      <span className="menu-badge">
                        <span className="badge badge-xs">Soon</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                <div className="grid lg:grid-cols-5 gap-5">
                  <div className="flex flex-col">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                      Account Home
                    </h3>
                    <div className="menu menu-default menu-fit flex-col">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/home/get-started"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Get Started</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/home/user-profile"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            User Profile
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/home/company-profile"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Company Profile
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/home/settings-sidebar"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            With Sidebar
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/home/settings-enterprise"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Enterprise</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/home/settings-plain"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Plain</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/home/settings-modal"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Modal</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                      Billing
                    </h3>
                    <div className="menu menu-default menu-fit flex-col">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/billing/basic"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Basic Billing
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/billing/enterprise"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Enterprise</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/billing/plans"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Plans</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/billing/history"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Billing History
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="#" tabIndex={0}>
                          <span className="menu-title grow-0">Tax Info</span>
                          <span className="menu-badge">
                            <span className="badge badge-xs">Soon</span>
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="#" tabIndex={0}>
                          <span className="menu-title grow-0">Invoices</span>
                          <span className="menu-badge">
                            <span className="badge badge-xs">Soon</span>
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="#" tabIndex={0}>
                          <span className="menu-title grow-0">Gateaways</span>
                          <span className="menu-badge">
                            <span className="badge badge-xs">Soon</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                      Security
                    </h3>
                    <div className="menu menu-default menu-fit flex-col">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/security/get-started"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Get Started</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/security/overview"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Security Overview
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/security/allowed-ip-addresses"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            IP Addresses
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/security/privacy-settings"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Privacy Settings
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/security/device-management"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Device Management
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/security/backup-and-recovery"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Backup &amp; Recovery
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/security/current-sessions"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Current Sessions
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/security/security-log"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Security Log
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                      Members &amp; Roles
                    </h3>
                    <div className="menu menu-default menu-fit flex-col">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/team-starter"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Teams Starter
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/teams"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Teams</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/team-info"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Team Info</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/members-starter"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Members Starter
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/team-members"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Team Members
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/import-members"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Import Members
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/roles"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Roles</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/permissions-toggle"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Persmissions - Toggler
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/members/permissions-check"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Persmissions - Check
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                      Other Pages
                    </h3>
                    <div className="menu menu-default menu-fit flex-col">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/integrations"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Integrations
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/notifications"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Notifications
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/api-keys"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">API Keys</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/appearance"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Appearance</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/invite-a-friend"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">
                            Invite a Friend
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="/metronic/tailwind/demo9/account/activity"
                          tabIndex={0}
                        >
                          <span className="menu-title grow-0">Activity</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="menu-item menu-item-dropdown"
            data-menu-item-offset="-50px, 0"
            data-menu-item-overflow="true"
            data-menu-item-placement="bottom-start"
            data-menu-item-toggle="accordion|lg:dropdown"
            data-menu-item-trigger="click|lg:hover"
          >
            <div className="menu-link lg:py-3.5 border-b border-b-transparent menu-item-active:border-b-gray-800 text-gray-800 menu-item-hover:text-gray-900 menu-item-active:text-gray-900 menu-item-here:border-b-gray-800 menu-item-here:text-gray-900">
              <span className="menu-title font-medium text-gray-800 text-sm">
                Network
              </span>
              <span className="menu-arrow flex lg:hidden">
                <i className="ki-filled ki-plus text-2xs text-gray-600 menu-item-show:hidden"></i>
                <i className="ki-filled ki-minus text-2xs text-gray-600 hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div className="flex-col gap-0 w-full lg:max-w-[670px] menu-dropdown">
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col gap-5 lg:w-[250px] mt-2 lg:mt-0 lg:border-r lg:border-r-gray-200 rounded-xl lg:rounded-none lg:rounded-tl-xl shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-r-coal-100">
                  <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 h-3.5">
                    General Pages
                  </h3>
                  <div className="menu menu-default menu-fit flex-col">
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="#"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-flag"></i>
                        </span>
                        <span className="menu-title grow-0">Get Started</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="#"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-users"></i>
                        </span>
                        <span className="menu-title grow-0">Colleagues</span>
                        <span className="menu-badge">
                          <span className="badge badge-xs">Soon</span>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="#"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-heart"></i>
                        </span>
                        <span className="menu-title grow-0">Donators</span>
                        <span className="menu-badge">
                          <span className="badge badge-xs">Soon</span>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="#"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-abstract-21"></i>
                        </span>
                        <span className="menu-title grow-0">Leads</span>
                        <span className="menu-badge">
                          <span className="badge badge-xs">Soon</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                  <div className="grid lg:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-5">
                      <h3 className="flex items-center gap-1.5 text-sm text-gray-800 font-semibold leading-none pl-2.5 h-3.5">
                        User Cards
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-cards/mini-cards"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Mini Cards
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-cards/author"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Team Members
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-cards/nft"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Authors</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-cards/social"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">NFT Users</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-title grow-0">
                              Social Users
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-title grow-0">Gamers</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <h3 className="flex items-center gap-1.5 text-sm text-gray-800 font-semibold leading-none pl-2.5 h-3.5">
                        User Base
                        <span className="left-auto badge badge-xs badge-primary badge-outline">
                          Datatables
                        </span>
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-table/team-crew"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Team Crew</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-table/app-roster"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              App Roster
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-table/market-authors"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Market Authors
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-table/saas-users"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              SaaS Users
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-table/store-clients"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Store Clients
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/network/user-table/visitors"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Visitors</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                <div className="flex flex-col gap-1.5">
                  <div className="text-md font-semibold text-gray-900 leading-none">
                    Read to Get Started ?
                  </div>
                  <div className="text-2sm fomt-medium text-gray-600">
                    Take your docs to the next level of Metronic
                  </div>
                </div>
                <a className="btn btn-sm btn-dark" href="#">
                  Read Documentation
                </a>
              </div>
            </div>
          </div>
          <div
            className="menu-item menu-item-dropdown"
            data-menu-item-offset="-100px, 0"
            data-menu-item-overflow="true"
            data-menu-item-placement="bottom-start"
            data-menu-item-toggle="accordion|lg:dropdown"
            data-menu-item-trigger="click|lg:hover"
          >
            <div className="menu-link lg:py-3.5 border-b border-b-transparent menu-item-active:border-b-gray-800 text-gray-800 menu-item-hover:text-gray-900 menu-item-active:text-gray-900 menu-item-here:border-b-gray-800 menu-item-here:text-gray-900">
              <span className="menu-title font-medium text-gray-800 text-sm">
                Auth
              </span>
              <span className="menu-arrow flex lg:hidden">
                <i className="ki-filled ki-plus text-2xs text-gray-600 menu-item-show:hidden"></i>
                <i className="ki-filled ki-minus text-2xs text-gray-600 hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div className="flex-col gap-0 w-full lg:max-w-[670px] menu-dropdown">
              <div className="flex flex-col lg:flex-row">
                <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                  <div className="grid lg:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Classic Layout
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/classic/sign-in"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Sign In</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/classic/sign-up"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Sign Up</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/classic/2fa"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">2FA</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/classic/check-email"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Check Email
                            </span>
                          </a>
                        </div>
                        <div className="menu-item pt-1">
                          <span className="text-gray-600 font-medium text-2sm p-2.5">
                            Reset Password
                          </span>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/classic/reset-password/enter-email"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Enter Email
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/classic/reset-password/check-email"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Check Email
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/classic/reset-password/change-password"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Change Password
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/classic/reset-password/password-changed"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Password is Changed
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Branded Layout
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/branded/sign-in"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Sign In</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/branded/sign-up"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Sign Up</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/branded/2fa"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">2FA</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/branded/check-email"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Check Email
                            </span>
                          </a>
                        </div>
                        <div className="menu-item pt-1">
                          <span className="text-gray-600 font-medium text-2sm p-2.5">
                            Reset Password
                          </span>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/branded/reset-password/enter-email"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Enter Email
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/branded/reset-password/check-email"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Check Email
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/branded/reset-password/change-password"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Change Password
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="/metronic/tailwind/demo9/authentication/branded/reset-password/password-changed"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Password is Changed
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[250px] mb-4 lg:mb-0 lg:border-l lg:border-l-gray-200 rounded-xl lg:rounded-r-xl lg:rounded-l-none shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-l-coal-100">
                  <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-5">
                    Other Pages
                  </h3>
                  <div className="menu menu-default menu-fit flex-col">
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="/metronic/tailwind/demo9/authentication/welcome-message"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-like-2"></i>
                        </span>
                        <span className="menu-title grow-0">
                          Welcome Message
                        </span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="/metronic/tailwind/demo9/authentication/account-deactivated"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-shield-cross"></i>
                        </span>
                        <span className="menu-title grow-0">
                          Account Deactivated
                        </span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="/metronic/tailwind/demo9/authentication/error-404"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-message-question"></i>
                        </span>
                        <span className="menu-title grow-0">Error 404</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="/metronic/tailwind/demo9/authentication/error-500"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-information"></i>
                        </span>
                        <span className="menu-title grow-0">Error 500</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                <div className="flex flex-col gap-1.5">
                  <div className="text-md font-semibold text-gray-900 leading-none">
                    Read to Get Started ?
                  </div>
                  <div className="text-2sm fomt-medium text-gray-600">
                    Take your docs to the next level of Metronic
                  </div>
                </div>
                <a className="btn btn-sm btn-dark" href="#">
                  Read Documentation
                </a>
              </div>
            </div>
          </div>
          <div
            className="menu-item menu-item-dropdown"
            data-menu-item-offset="0,0|lg:-20px, 0"
            data-menu-item-overflow="true"
            data-menu-item-placement="bottom-start"
            data-menu-item-toggle="dropdown"
            data-menu-item-trigger="click|lg:hover"
          >
            <div className="menu-link lg:py-3.5 border-b border-b-transparent menu-item-active:border-b-gray-800 text-gray-800 menu-item-hover:text-gray-900 menu-item-active:text-gray-900 menu-item-here:border-b-gray-800 menu-item-here:text-gray-900">
              <span className="menu-title font-medium text-gray-800 text-sm">
                Help
              </span>
              <span className="menu-arrow flex lg:hidden">
                <i className="ki-filled ki-plus text-2xs text-gray-600 menu-item-show:hidden"></i>
                <i className="ki-filled ki-minus text-2xs text-gray-600 hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div className="menu-dropdown menu-default py-2.5 w-full max-w-[220px]">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="https://keenthemes.com/metronic/tailwind/docs/getting-started/installation"
                  tabIndex={0}
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-coffee"></i>
                  </span>
                  <span className="menu-title grow-0">Getting Started</span>
                </a>
              </div>
              <div
                className="menu-item menu-item-dropdown"
                data-menu-item-placement="right-start"
                data-menu-item-toggle="dropdown"
                data-menu-item-trigger="click|lg:hover"
              >
                <div className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-filled ki-information"></i>
                  </span>
                  <span className="menu-title">Support Forum</span>
                  <span className="menu-arrow">
                    <i className="ki-filled ki-right text-3xs"></i>
                  </span>
                </div>
                <div className="menu-dropdown menu-default w-full max-w-[175px] lg:max-w-[220px]">
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="https://devs.keenthemes.com"
                      tabIndex={0}
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-questionnaire-tablet"></i>
                      </span>
                      <span className="menu-title grow-0">All Questions</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="https://devs.keenthemes.com/popular"
                      tabIndex={0}
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-star"></i>
                      </span>
                      <span className="menu-title grow-0">
                        Popular Questions
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="https://devs.keenthemes.com/question/create"
                      tabIndex={0}
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-message-question"></i>
                      </span>
                      <span className="menu-title grow-0">Ask Question</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="https://keenthemes.com/metronic/tailwind/docs/getting-started/license"
                  tabIndex={0}
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-subtitle"></i>
                  </span>
                  <span className="menu-title">Licenses &amp; FAQ</span>
                  <span className="menu-badge" data-tooltip="#menu_tooltip_3">
                    <i className="ki-filled ki-information-2 text-gray-500 text-md"></i>
                  </span>
                  <div className="tooltip" id="menu_tooltip_3">
                    Learn more about licenses
                  </div>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="https://keenthemes.com/metronic/tailwind/docs"
                  tabIndex={0}
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-questionnaire-tablet"></i>
                  </span>
                  <span className="menu-title grow-0">Documentation</span>
                </a>
              </div>
              <div className="menu-separator"></div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="https://keenthemes.com/contact"
                  tabIndex={0}
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-share"></i>
                  </span>
                  <span className="menu-title grow-0">Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End of Mega Menu */}
      </div>
      {/* End of Container */}
    </div>
  );
}

export default Navbar;
