import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ href, title }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <div
      className={`menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary ${
        isActive ? "here" : ""
      }`}
    >
      <Link
        className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
        href={href}
        tabIndex={0}
      >
        <span className="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default function ProfileTopBar() {
  const { logout } = useAuth();
  return (
    <>
      {" "}
      <div className="container-fixed" style={{ flexGrow: 0 }}>
        <div className="flex items-center flex-wrap md:flex-nowrap lg:items-end justify-between border-b border-b-gray-200 dark:border-b-coal-100 gap-3 lg:gap-6 mb-3 lg:mb-5">
          <div className="grid">
            <div className="scrollable-x-auto">
              <div className="menu gap-3" data-menu="true">
                <MenuItem href="/user/profile" title="Profiles" />
                <MenuItem href="/borrows" title="Borrows" />
                <MenuItem href="/payments" title="Payment" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end grow lg:grow-0 lg:pb-4 gap-2.5 mb-3 lg:mb-0">
            <Link
              href={"/search"}
              className="dropdown-toggle btn btn-sm btn-primary"
            >
              <i className="ki-filled ki-filter-search"></i>
              Search
            </Link>
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
                  <button className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-filled ki-moon"></i>
                    </span>
                    <span className="menu-title">Dark Mode</span>
                    <label className="switch switch-sm">
                      <input
                        data-theme-state="dark"
                        data-theme-toggle="true"
                        name="check"
                        type="checkbox"
                        defaultValue={1}
                      />
                    </label>
                  </button>
                </div>
                <div className="menu-item">
                  <button className="menu-link" onClick={logout}>
                    <span className="menu-icon">
                      <i className="ki-filled ki-information-2"></i>
                    </span>
                    <span className="menu-title">Log out</span>
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
