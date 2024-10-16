export default function ProfilePage() {

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      .hero-bg {\n\t\tbackground-image: url('/static/metronic/tailwind/dist/assets/media/images/2600x1200/bg-1.png');\n\t}\n\t.dark .hero-bg {\n\t\tbackground-image: url('/static/metronic/tailwind/dist/assets/media/images/2600x1200/bg-1-dark.png');\n\t}\n     "
                }}
            />
            <div className="bg-center bg-cover bg-no-repeat hero-bg">
                {/* Container */}
                <div className="container-fixed">
                    <div className="flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:pt-5 lg:pb-10">
                        <img
                            className="rounded-full border-3 border-success size-[100px] shrink-0"
                            src="/static/metronic/tailwind/dist/assets/media/avatars/300-1.png"
                        />
                        <div className="flex items-center gap-1.5">
                            <div className="text-lg leading-5 font-semibold text-gray-900">
                                Jenny Klabber
                            </div>
                            <svg
                                className="text-primary"
                                fill="none"
                                height={16}
                                viewBox="0 0 15 16"
                                width={15}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.5425 6.89749L13.5 5.83999C13.4273 5.76877 13.3699 5.6835 13.3312 5.58937C13.2925 5.49525 13.2734 5.39424 13.275 5.29249V3.79249C13.274 3.58699 13.2324 3.38371 13.1527 3.19432C13.0729 3.00494 12.9565 2.83318 12.8101 2.68892C12.6638 2.54466 12.4904 2.43073 12.2998 2.35369C12.1093 2.27665 11.9055 2.23801 11.7 2.23999H10.2C10.0982 2.24159 9.99722 2.22247 9.9031 2.18378C9.80898 2.1451 9.72371 2.08767 9.65249 2.01499L8.60249 0.957487C8.30998 0.665289 7.91344 0.50116 7.49999 0.50116C7.08654 0.50116 6.68999 0.665289 6.39749 0.957487L5.33999 1.99999C5.26876 2.07267 5.1835 2.1301 5.08937 2.16879C4.99525 2.20747 4.89424 2.22659 4.79249 2.22499H3.29249C3.08699 2.22597 2.88371 2.26754 2.69432 2.34731C2.50494 2.42709 2.33318 2.54349 2.18892 2.68985C2.04466 2.8362 1.93073 3.00961 1.85369 3.20013C1.77665 3.39064 1.73801 3.5945 1.73999 3.79999V5.29999C1.74159 5.40174 1.72247 5.50275 1.68378 5.59687C1.6451 5.691 1.58767 5.77627 1.51499 5.84749L0.457487 6.89749C0.165289 7.19 0.00115967 7.58654 0.00115967 7.99999C0.00115967 8.41344 0.165289 8.80998 0.457487 9.10249L1.49999 10.16C1.57267 10.2312 1.6301 10.3165 1.66878 10.4106C1.70747 10.5047 1.72659 10.6057 1.72499 10.7075V12.2075C1.72597 12.413 1.76754 12.6163 1.84731 12.8056C1.92709 12.995 2.04349 13.1668 2.18985 13.3111C2.3362 13.4553 2.50961 13.5692 2.70013 13.6463C2.89064 13.7233 3.0945 13.762 3.29999 13.76H4.79999C4.90174 13.7584 5.00275 13.7775 5.09687 13.8162C5.191 13.8549 5.27627 13.9123 5.34749 13.985L6.40499 15.0425C6.69749 15.3347 7.09404 15.4988 7.50749 15.4988C7.92094 15.4988 8.31748 15.3347 8.60999 15.0425L9.65999 14C9.73121 13.9273 9.81647 13.8699 9.9106 13.8312C10.0047 13.7925 10.1057 13.7734 10.2075 13.775H11.7075C12.1212 13.775 12.518 13.6106 12.8106 13.3181C13.1031 13.0255 13.2675 12.6287 13.2675 12.215V10.715C13.2659 10.6132 13.285 10.5122 13.3237 10.4181C13.3624 10.324 13.4198 10.2387 13.4925 10.1675L14.55 9.10999C14.6953 8.96452 14.8104 8.79176 14.8887 8.60164C14.9671 8.41152 15.007 8.20779 15.0063 8.00218C15.0056 7.79656 14.9643 7.59311 14.8847 7.40353C14.8051 7.21394 14.6888 7.04197 14.5425 6.89749ZM10.635 6.64999L6.95249 10.25C6.90055 10.3026 6.83864 10.3443 6.77038 10.3726C6.70212 10.4009 6.62889 10.4153 6.55499 10.415C6.48062 10.4139 6.40719 10.3982 6.33896 10.3685C6.27073 10.3389 6.20905 10.2961 6.15749 10.2425L4.37999 8.44249C4.32532 8.39044 4.28169 8.32793 4.25169 8.25867C4.22169 8.18941 4.20593 8.11482 4.20536 8.03934C4.20479 7.96387 4.21941 7.88905 4.24836 7.81934C4.27731 7.74964 4.31999 7.68647 4.37387 7.63361C4.42774 7.58074 4.4917 7.53926 4.56194 7.51163C4.63218 7.484 4.70726 7.47079 4.78271 7.47278C4.85816 7.47478 4.93244 7.49194 5.00112 7.52324C5.0698 7.55454 5.13148 7.59935 5.18249 7.65499L6.56249 9.05749L9.84749 5.84749C9.95296 5.74215 10.0959 5.68298 10.245 5.68298C10.394 5.68298 10.537 5.74215 10.6425 5.84749C10.6953 5.90034 10.737 5.96318 10.7653 6.03234C10.7935 6.1015 10.8077 6.1756 10.807 6.25031C10.8063 6.32502 10.7908 6.39884 10.7612 6.46746C10.7317 6.53608 10.6888 6.59813 10.635 6.64999Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex flex-wrap justify-center gap-1 lg:gap-4.5 text-sm">
                            <div className="flex gap-1.25 items-center">
                                <i className="ki-filled ki-dribbble text-gray-500 text-sm"></i>
                                <span className="text-gray-600 font-medium">KeenThemes</span>
                            </div>
                            <div className="flex gap-1.25 items-center">
                                <i className="ki-filled ki-geolocation text-gray-500 text-sm"></i>
                                <span className="text-gray-600 font-medium">SF, Bay Area</span>
                            </div>
                            <div className="flex gap-1.25 items-center">
                                <i className="ki-filled ki-sms text-gray-500 text-sm"></i>
                                <a
                                    className="text-gray-600 font-medium hover:text-primary"
                                    href="mailto: jenny@kteam.com"
                                >
                                    jenny@kteam.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Container */}
            </div>
            {/* Container */}
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
                                    <div className="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabIndex={0}>
                                        <span className="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
                                            Profiles
                                        </span>
                                        <span className="menu-arrow">
                                            <i className="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary"></i>
                                        </span>
                                    </div>
                                    <div className="menu-dropdown menu-default py-2 min-w-[200px]">
                                        <div className="menu-item">
                                            <a
                                                className="menu-link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/default"
                                                tabIndex={0}
                                            >
                                                <span className="menu-title">Default</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a
                                                className="menu-link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/creator"
                                                tabIndex={0}
                                            >
                                                <span className="menu-title">Creator</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a
                                                className="menu-link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/company"
                                                tabIndex={0}
                                            >
                                                <span className="menu-title">Company</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a
                                                className="menu-link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/nft"
                                                tabIndex={0}
                                            >
                                                <span className="menu-title">NFT</span>
                                            </a>
                                        </div>
                                        <div className="menu-item active">
                                            <a
                                                className="menu-link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/blogger"
                                                tabIndex={0}
                                            >
                                                <span className="menu-title">Blogger</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a
                                                className="menu-link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/crm"
                                                tabIndex={0}
                                            >
                                                <span className="menu-title">CRM</span>
                                            </a>
                                        </div>
                                        <div
                                            className="menu-item menu-item-dropdown"
                                            data-menu-item-offset="-10px, 0"
                                            data-menu-item-overflow="true"
                                            data-menu-item-placement="right-start"
                                            data-menu-item-toggle="dropdown"
                                            data-menu-item-trigger="click|lg:hover"
                                        >
                                            <div className="menu-link" tabIndex={0}>
                                                <span className="menu-title">More</span>
                                                <span className="menu-arrow">
                                                    <i className="ki-filled ki-down text-2xs [.menu-dropdown_&]:-rotate-90"></i>
                                                </span>
                                            </div>
                                            <div className="menu-dropdown menu-default py min-w-[200px]">
                                                <div className="menu-item">
                                                    <a
                                                        className="menu-link"
                                                        href="/metronic/tailwind/demo9/public-profile/profiles/gamer"
                                                        tabIndex={0}
                                                    >
                                                        <span className="menu-title">Gamer</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a
                                                        className="menu-link"
                                                        href="/metronic/tailwind/demo9/public-profile/profiles/feeds"
                                                        tabIndex={0}
                                                    >
                                                        <span className="menu-title">Feeds</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a
                                                        className="menu-link"
                                                        href="/metronic/tailwind/demo9/public-profile/profiles/plain"
                                                        tabIndex={0}
                                                    >
                                                        <span className="menu-title">Plain</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a
                                                        className="menu-link"
                                                        href="/metronic/tailwind/demo9/public-profile/profiles/modal"
                                                        tabIndex={0}
                                                    >
                                                        <span className="menu-title">Modal</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary menu-item-dropdown"
                                    data-menu-item-placement="bottom-start"
                                    data-menu-item-toggle="dropdown"
                                    data-menu-item-trigger="click|lg:hover"
                                >
                                    <div className="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabIndex={0}>
                                        <span className="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
                                            Projects
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
                                                href="/metronic/tailwind/demo9/public-profile/projects/3-columns"
                                                tabIndex={0}
                                            >
                                                <span className="menu-title">3 Columns</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a
                                                className="menu-link"
                                                href="/metronic/tailwind/demo9/public-profile/projects/2-columns"
                                                tabIndex={0}
                                            >
                                                <span className="menu-title">2 Columns</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
                                    <a
                                        className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                                        href="/metronic/tailwind/demo9/public-profile/works"
                                        tabIndex={0}
                                    >
                                        <span className="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                                            Works
                                        </span>
                                    </a>
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
                                    <div className="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabIndex={0}>
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
            {/* End of Container */}
            {/* Container */}
            <div className="container-fixed">
                {/* begin: grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
                    <div className="col-span-1">
                        <div className="grid gap-5 lg:gap-7.5">
                            <div className="card">
                                <div className="card-body">
                                    <div className="flex flex-wrap justify-center gap-2 py-1">
                                        <div className="flex flex-col items-center gap-1.5">
                                            <span className="text-gray-900 text-2xl lg:text-2.5xl font-semibold">
                                                397
                                            </span>
                                            <span className="text-gray-700 text-sm font-normal">
                                                Topics
                                            </span>
                                        </div>
                                        <span className="sm:ml-8 sm:pl-8 border-l border-l-gray-200"></span>
                                        <div className="flex flex-col items-center gap-1.5">
                                            <span className="text-gray-900 text-2x lg:text-2.5xl font-semibold">
                                                8.2k
                                            </span>
                                            <span className="text-gray-700 text-sm">Upvotes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Profile</h3>
                                </div>
                                <div className="card-body">
                                    <p className="text-sm text-gray-800 leading-5.5 mb-4">
                                        Experienced and creative professional with a passion great as
                                        for problem-solving and a commitment to excellence.
                                    </p>
                                    <div className="grid gap-y-3.5">
                                        <div className="flex items-center gap-2.5">
                                            <i className="ki-filled ki-abstract-41 text-base text-gray-500"></i>
                                            <a
                                                className="text-sm leading-none text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                KeenThemes
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <i className="ki-filled ki-crown-2 text-base text-gray-500"></i>
                                            <a
                                                className="text-sm leading-none text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                Author
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <i className="ki-filled ki-briefcase text-base text-gray-500"></i>
                                            <a
                                                className="text-sm leading-none text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                UI/UX Desiger
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <i className="ki-filled ki-sms text-base text-gray-500"></i>
                                            <a
                                                className="text-sm leading-none text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                enny@kteam.com
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <i className="ki-filled ki-abstract-39 text-base text-gray-500"></i>
                                            <a
                                                className="text-sm leading-none text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                https://keenthemes.com
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <i className="ki-filled ki-facebook text-base text-gray-500"></i>
                                            <a
                                                className="text-sm leading-none text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                keenthemes
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <i className="ki-filled ki-youtube text-base text-gray-500"></i>
                                            <a
                                                className="text-sm leading-none text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                keenthemes
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Community Badges</h3>
                                </div>
                                <div className="card-body pb-7.5">
                                    <div className="flex items-center flex-wrap gap-3 lg:gap-4">
                                        <div className="relative size-[50px] shrink-0">
                                            <svg
                                                className="w-full h-full stroke-primary-clarity fill-primary-light"
                                                fill="none"
                                                height={48}
                                                viewBox="0 0 44 48"
                                                width={44}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                                    fill=""
                                                ></path>
                                                <path
                                                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                                    stroke=""
                                                ></path>
                                            </svg>
                                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                                <i className="ki-filled ki-abstract-39 text-1.5xl ps-px text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="relative size-[50px] shrink-0">
                                            <svg
                                                className="w-full h-full stroke-brand-clarity fill-brand-light"
                                                fill="none"
                                                height={48}
                                                viewBox="0 0 44 48"
                                                width={44}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                                    fill=""
                                                ></path>
                                                <path
                                                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                                    stroke=""
                                                ></path>
                                            </svg>
                                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                                <i className="ki-filled ki-abstract-44 text-1.5xl ps-px text-brand"></i>
                                            </div>
                                        </div>
                                        <div className="relative size-[50px] shrink-0">
                                            <svg
                                                className="w-full h-full stroke-success-clarity fill-success-light"
                                                fill="none"
                                                height={48}
                                                viewBox="0 0 44 48"
                                                width={44}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                                    fill=""
                                                ></path>
                                                <path
                                                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                                    stroke=""
                                                ></path>
                                            </svg>
                                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                                <i className="ki-filled ki-abstract-25 text-1.5xl ps-px text-success"></i>
                                            </div>
                                        </div>
                                        <div className="relative size-[50px] shrink-0">
                                            <svg
                                                className="w-full h-full stroke-info-clarity fill-info-light"
                                                fill="none"
                                                height={48}
                                                viewBox="0 0 44 48"
                                                width={44}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                                    fill=""
                                                ></path>
                                                <path
                                                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                                    stroke=""
                                                ></path>
                                            </svg>
                                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                                <i className="ki-filled ki-delivery-24 text-1.5xl ps-px text-info"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Collaborate</h3>
                                </div>
                                <div className="card-body">
                                    <p className="text-sm text-gray-800 leading-5.5">
                                        Experienced UI/UX designer seeking new opportunities.
                                    </p>
                                </div>
                                <div className="card-footer justify-center">
                                    <a
                                        className="btn btn-link"
                                        href="/metronic/tailwind/demo9/public-profile/works"
                                    >
                                        View details
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Skills</h3>
                                </div>
                                <div className="card-body">
                                    <div className="flex flex-wrap gap-2.5 mb-2">
                                        <span className="badge badge-sm badge-gray-200">
                                            Web Design
                                        </span>
                                        <span className="badge badge-sm badge-gray-200">
                                            Code Review
                                        </span>
                                        <span className="badge badge-sm badge-gray-200">Figma</span>
                                        <span className="badge badge-sm badge-gray-200">
                                            Product Development
                                        </span>
                                        <span className="badge badge-sm badge-gray-200">Webflow</span>
                                        <span className="badge badge-sm badge-gray-200">AI</span>
                                        <span className="badge badge-sm badge-gray-200">noCode</span>
                                        <span className="badge badge-sm badge-gray-200">
                                            Management
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex flex-col gap-5 lg:gap-7.5">
                            <div className="card">
                                <div className="card-body px-10 py-7.5 lg:pr-12.5">
                                    <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
                                        <div className="flex flex-col gap-3">
                                            <h2 className="text-1.5xl font-semibold text-gray-900">
                                                Unlock Creative
                                                <br />
                                                Partnerships on Our Blog
                                            </h2>
                                            <p className="text-sm text-gray-700 leading-5.5">
                                                Explore exciting collaboration opportunities with our blog.
                                                We're open to partnerships, guest posts, and more. Join us
                                                to share your insights and grow your audience.
                                            </p>
                                        </div>
                                        <img
                                            alt="image"
                                            className="dark:hidden max-h-[160px]"
                                            src="/static/metronic/tailwind/dist/assets/media/illustrations/1.svg"
                                        />
                                        <img
                                            alt="image"
                                            className="light:hidden max-h-[160px]"
                                            src="/static/metronic/tailwind/dist/assets/media/illustrations/1-dark.svg"
                                        />
                                    </div>
                                </div>
                                <div className="card-footer justify-center">
                                    <a
                                        className="btn btn-link"
                                        href="/metronic/tailwind/demo9/network/get-started"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Jenny’s Posts</h3>
                                    <a
                                        className="btn btn-link"
                                        href="/metronic/tailwind/demo9/public-profile/profiles/feeds"
                                    >
                                        View All
                                    </a>
                                </div>
                                <div className="card-body p-5 lg:p-7.5 lg:pb-7">
                                    <div className="flex flex-no-wrap scrollable-x gap-5">
                                        <div className="card shadow-none w-[280px] border-0 mb-4">
                                            <div
                                                className="rounded-t-xl w-[280px] h-[240px] bg-cover bg-center"
                                                style={{
                                                    backgroundImage:
                                                        'url("/static/metronic/tailwind/dist/assets/media/images/600x400/14.jpg")'
                                                }}
                                            ></div>
                                            <div className="card-border card-rounded-b grid gap-1.5 px-5 py-4">
                                                <a
                                                    className="font-medium text-brand text-2sm hover:text-primary"
                                                    href="#"
                                                >
                                                    Software
                                                </a>
                                                <a
                                                    className="font-medium text-gray-900 text-lg leading-6 mb-1.5 hover:text-primary"
                                                    href="#"
                                                >
                                                    Maximizing Efficiency with Modern Software
                                                </a>
                                                <time className="flex items-center gap-1.5 text-2sm text-gray-700 leading-none">
                                                    <i className="ki-filled ki-time text-lg text-gray-500"></i>
                                                    4 hours ago
                                                </time>
                                            </div>
                                        </div>
                                        <div className="card shadow-none w-[280px] border-0 mb-4">
                                            <div
                                                className="rounded-t-xl w-[280px] h-[240px] bg-cover bg-center"
                                                style={{
                                                    backgroundImage:
                                                        'url("/static/metronic/tailwind/dist/assets/media/images/600x400/15.jpg")'
                                                }}
                                            ></div>
                                            <div className="card-border card-rounded-b grid gap-1.5 px-5 py-4">
                                                <a
                                                    className="font-medium text-brand text-2sm hover:text-primary"
                                                    href="#"
                                                >
                                                    Work-Life
                                                </a>
                                                <a
                                                    className="font-medium text-gray-900 text-lg leading-6 mb-1.5 hover:text-primary"
                                                    href="#"
                                                >
                                                    Balancing Work and Life: Strategies for Success
                                                </a>
                                                <time className="flex items-center gap-1.5 text-2sm text-gray-700 leading-none">
                                                    <i className="ki-filled ki-time text-lg text-gray-500"></i>
                                                    2 days ago
                                                </time>
                                            </div>
                                        </div>
                                        <div className="card shadow-none w-[280px] border-0 mb-4">
                                            <div
                                                className="rounded-t-xl w-[280px] h-[240px] bg-cover bg-center"
                                                style={{
                                                    backgroundImage:
                                                        'url("/static/metronic/tailwind/dist/assets/media/images/600x400/16.jpg")'
                                                }}
                                            ></div>
                                            <div className="card-border card-rounded-b grid gap-1.5 px-5 py-4">
                                                <a
                                                    className="font-medium text-brand text-2sm hover:text-primary"
                                                    href="#"
                                                >
                                                    Technology
                                                </a>
                                                <a
                                                    className="font-medium text-gray-900 text-lg leading-6 mb-1.5 hover:text-primary"
                                                    href="#"
                                                >
                                                    Exploring the Latest Technological
                                                </a>
                                                <time className="flex items-center gap-1.5 text-2sm text-gray-700 leading-none">
                                                    <i className="ki-filled ki-time text-lg text-gray-500"></i>
                                                    A week ago
                                                </time>
                                            </div>
                                        </div>
                                        <div className="card shadow-none w-[280px] border-0 mb-4">
                                            <div
                                                className="rounded-t-xl w-[280px] h-[240px] bg-cover bg-center"
                                                style={{
                                                    backgroundImage:
                                                        'url("/static/metronic/tailwind/dist/assets/media/images/600x400/11.jpg")'
                                                }}
                                            ></div>
                                            <div className="card-border card-rounded-b grid gap-1.5 px-5 py-4">
                                                <a
                                                    className="font-medium text-brand text-2sm hover:text-primary"
                                                    href="#"
                                                ></a>
                                                <a
                                                    className="font-medium text-gray-900 text-lg leading-6 mb-1.5 hover:text-primary"
                                                    href="#"
                                                ></a>
                                                <time className="flex items-center gap-1.5 text-2sm text-gray-700 leading-none">
                                                    <i className="ki-filled ki-time text-lg text-gray-500"></i>
                                                </time>
                                            </div>
                                        </div>
                                        <div className="card shadow-none w-[280px] border-0 mb-4">
                                            <div
                                                className="rounded-t-xl w-[280px] h-[240px] bg-cover bg-center"
                                                style={{
                                                    backgroundImage:
                                                        'url("/static/metronic/tailwind/dist/assets/media/images/600x400/12.jpg")'
                                                }}
                                            ></div>
                                            <div className="card-border card-rounded-b grid gap-1.5 px-5 py-4">
                                                <a
                                                    className="font-medium text-brand text-2sm hover:text-primary"
                                                    href="#"
                                                ></a>
                                                <a
                                                    className="font-medium text-gray-900 text-lg leading-6 mb-1.5 hover:text-primary"
                                                    href="#"
                                                ></a>
                                                <time className="flex items-center gap-1.5 text-2sm text-gray-700 leading-none">
                                                    <i className="ki-filled ki-time text-lg text-gray-500"></i>
                                                </time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Jenny’s Replies</h3>
                                    <a
                                        className="btn btn-link"
                                        href="/metronic/tailwind/demo9/public-profile/profiles/feeds"
                                    >
                                        View All
                                    </a>
                                </div>
                                <div className="card-body pb-7">
                                    <div className="flex flex-col gap-5">
                                        <div className="border-l-2 border-brand">
                                            <div className="flex gap-3 items-center ps-3 mb-0.5">
                                                <span className="text-2xs text-gray-600">10 Jan, 24</span>
                                                <div className="rounded-full w-1.5 h-1.5 bg-gray-300 gap-1.5"></div>
                                                <div className="flex gap-1 items-center">
                                                    <i className="ki-filled ki-heart text-base text-gray-500"></i>
                                                    <span className="text-2sm text-gray-600">24</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-800 leading-5.5 ps-3">
                                                Experienced UI/UX designer seeking new opportunities.
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-primary">
                                            <div className="flex gap-3 items-center ps-3 mb-0.5">
                                                <span className="text-2xs text-gray-600">23 Jan, 24</span>
                                                <div className="rounded-full w-1.5 h-1.5 bg-gray-300 gap-1.5"></div>
                                                <div className="flex gap-1 items-center">
                                                    <i className="ki-filled ki-heart text-base text-gray-500"></i>
                                                    <span className="text-2sm text-gray-600">3</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-800 leading-5.5 ps-3">
                                                Include the name of the author of the blog post. This helps
                                                to build trust and credibility with readers.
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-warning">
                                            <div className="flex gap-3 items-center ps-3 mb-0.5">
                                                <span className="text-2xs text-gray-600">4 Feb, 24</span>
                                                <div className="rounded-full w-1.5 h-1.5 bg-gray-300 gap-1.5"></div>
                                                <div className="flex gap-1 items-center">
                                                    <i className="ki-filled ki-heart text-base text-gray-500"></i>
                                                    <span className="text-2sm text-gray-600">89</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-800 leading-5.5 ps-3">
                                                Avoid using all caps or excessive punctuation.
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-success">
                                            <div className="flex gap-3 items-center ps-3 mb-0.5">
                                                <span className="text-2xs text-gray-600">17 Mar, 24</span>
                                                <div className="rounded-full w-1.5 h-1.5 bg-gray-300 gap-1.5"></div>
                                                <div className="flex gap-1 items-center">
                                                    <i className="ki-filled ki-heart text-base text-gray-500"></i>
                                                    <span className="text-2sm text-gray-600">32</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-800 leading-5.5 ps-3">
                                                You can use this example as a starting point to design your
                                                own blog post cards. Be sure to experiment with different
                                                layouts, fonts, and colors both visually appealing and
                                                informative.
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-danger">
                                            <div className="flex gap-3 items-center ps-3 mb-0.5">
                                                <span className="text-2xs text-gray-600">9 Apr, 24</span>
                                                <div className="rounded-full w-1.5 h-1.5 bg-gray-300 gap-1.5"></div>
                                                <div className="flex gap-1 items-center">
                                                    <i className="ki-filled ki-heart text-base text-gray-500"></i>
                                                    <span className="text-2sm text-gray-600">57</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-800 leading-5.5 ps-3">
                                                Use high-quality images and graphics to capture the visual
                                                appeal of your cards.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Activity</h3>
                                    <div className="flex items-center gap-2">
                                        <label className="switch">
                                            <span className="switch-label">
                                                Auto refresh:
                                                <span className="switch-on:hidden">Off</span>
                                                <span className="hidden switch-on:inline">On</span>
                                            </span>
                                            <input
                                                defaultChecked
                                                name="check"
                                                type="checkbox"
                                                defaultValue={1}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="flex flex-col">
                                        <div className="flex items-start relative">
                                            <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                            <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                                <i className="ki-filled ki-people text-base"></i>
                                            </div>
                                            <div className="pl-2.5 mb-7 text-md grow">
                                                <div className="flex flex-col">
                                                    <div className="text-sm text-gray-800">
                                                        Posted a new article
                                                        <a
                                                            className="text-sm font-medium link"
                                                            href="/metronic/tailwind/demo9/public-profile/profiles/blogger"
                                                        >
                                                            Top 10 Tech Trends
                                                        </a>
                                                    </div>
                                                    <span className="text-xs text-gray-600">
                                                        Today, 9:00 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start relative">
                                            <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                            <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                                <i className="ki-filled ki-entrance-left text-base"></i>
                                            </div>
                                            <div className="pl-2.5 mb-7 text-md grow">
                                                <div className="flex flex-col">
                                                    <div className="text-sm text-gray-800">
                                                        I had the privilege of interviewing an industry expert
                                                        for an
                                                        <a
                                                            className="text-sm link"
                                                            href="/metronic/tailwind/demo9/public-profile/profiles/blogger"
                                                        >
                                                            upcoming blog post
                                                        </a>
                                                    </div>
                                                    <span className="text-xs text-gray-600">
                                                        2 days ago, 4:07 PM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start relative">
                                            <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                            <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                                <i className="ki-filled ki-share text-base"></i>
                                            </div>
                                            <div className="pl-2.5 mb-7 text-md grow">
                                                <div className="flex flex-col">
                                                    <div className="text-sm text-gray-800">
                                                        I couldn't resist sharing a sneak peek of our
                                                        <a
                                                            className="text-sm link"
                                                            href="/metronic/tailwind/demo9/public-profile/profiles/blogger"
                                                        >
                                                            upcoming content
                                                        </a>
                                                    </div>
                                                    <span className="text-xs text-gray-600">
                                                        5 days ago, 4:07 PM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start relative">
                                            <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                            <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                                <i className="ki-filled ki-directbox-default text-base"></i>
                                            </div>
                                            <div className="pl-2.5 mb-7 text-md grow">
                                                <div className="flex flex-col pb-2.5">
                                                    <span className="text-sm text-gray-800">
                                                        Attending the virtual blogging conference was an
                                                        enriching experience
                                                    </span>
                                                    <span className="text-xs text-gray-600">
                                                        2 days ago, 4:07 PM
                                                    </span>
                                                </div>
                                                <div className="card shadow-none">
                                                    <div className="card-body lg:py-4">
                                                        <div className="flex justify-center py-4">
                                                            <img
                                                                alt="image"
                                                                className="dark:hidden max-h-[160px]"
                                                                src="/static/metronic/tailwind/dist/assets/media/illustrations/3.svg"
                                                            />
                                                            <img
                                                                alt="image"
                                                                className="light:hidden max-h-[160px]"
                                                                src="/static/metronic/tailwind/dist/assets/media/illustrations/3-dark.svg"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <div className="text-md font-medium text-gray-900 text-center">
                                                                Blogging Conference
                                                            </div>
                                                            <div className="flex items-center justify-center gap-1">
                                                                <a
                                                                    className="text-2sm font-semibold link"
                                                                    href="/metronic/tailwind/demo9/public-profile/profiles/company"
                                                                >
                                                                    Axio new release
                                                                </a>
                                                                <span className="text-2sm text-gray-700 mr-2">
                                                                    email campaign
                                                                </span>
                                                                <span className="badge badge-sm badge-success badge-outline">
                                                                    Public
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start relative">
                                            <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                            <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                                <i className="ki-filled ki-coffee text-base"></i>
                                            </div>
                                            <div className="pl-2.5 mb-7 text-md grow">
                                                <div className="flex flex-col">
                                                    <div className="text-sm text-gray-900">
                                                        Reaching the milestone of
                                                        <a
                                                            className="text-sm font-medium link"
                                                            href="/metronic/tailwind/demo9/public-profile/profiles/feeds"
                                                        >
                                                            10,000 followers
                                                        </a>
                                                        on the blog was a dream come true
                                                    </div>
                                                    <span className="text-xs text-gray-600">
                                                        5 days ago, 4:07 PM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start relative">
                                            <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                                <i className="ki-filled ki-cup text-base"></i>
                                            </div>
                                            <div className="pl-2.5 text-md grow">
                                                <div className="flex flex-col">
                                                    <div className="text-sm text-gray-800">
                                                        We recently
                                                        <a
                                                            className="text-sm font-medium link"
                                                            href="/metronic/tailwind/demo9/public-profile/profiles/nft"
                                                        >
                                                            celebrated
                                                        </a>
                                                        the blog's 1-year anniversary
                                                    </div>
                                                    <span className="text-xs text-gray-600">
                                                        3 months ago, 4:07 PM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer justify-center">
                                    <a
                                        className="btn btn-link"
                                        href="/metronic/tailwind/demo9/public-profile/activity"
                                    >
                                        All-time Activities
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end: grid */}
            </div>
            {/* End of Container */}
            {/* Footer */}
            <footer className="footer">
                {/* Container */}
                <div className="container-fixed">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-5">
                        <div className="flex order-2 md:order-1 gap-2 font-normal text-2sm">
                            <span className="text-gray-500">2024©</span>
                            <a
                                className="text-gray-600 hover:text-primary"
                                href="https://keenthemes.com"
                            >
                                Keenthemes Inc.
                            </a>
                        </div>
                        <nav className="flex order-1 md:order-2 gap-4 font-normal text-2sm text-gray-600">
                            <a
                                className="hover:text-primary"
                                href="https://keenthemes.com/metronic/tailwind/docs"
                            >
                                Docs
                            </a>
                            <a
                                className="hover:text-primary"
                                href="https://1.envato.market/Vm7VRE"
                            >
                                Purchase
                            </a>
                            <a
                                className="hover:text-primary"
                                href="https://keenthemes.com/metronic/tailwind/docs/getting-started/license"
                            >
                                FAQ
                            </a>
                            <a className="hover:text-primary" href="https://devs.keenthemes.com">
                                Support
                            </a>
                            <a
                                className="hover:text-primary"
                                href="https://keenthemes.com/metronic/tailwind/docs/getting-started/license"
                            >
                                License
                            </a>
                        </nav>
                    </div>
                </div>
                {/* End of Container */}
            </footer>
            {/* End of Footer */}
        </>

    )

}