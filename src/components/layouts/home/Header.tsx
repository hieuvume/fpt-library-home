import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import Topbar from "./topbar/Topbar";

function Header() {
  const { isAuthenticated, redirectToLogin, isAdmin, isLibrarian, isOwner } =
    useAuth();

  return (
    <header
      className="flex items-center shrink-0 bg-[--tw-header-bg] dark:bg-coal-500 h-[--tw-header-height]"
      data-sticky="true"
      data-sticky-class="transition-[height] fixed z-10 top-0 left-0 right-0 shadow-sm backdrop-blur-md bg-white/70 dark:bg-coal-500/70 dark:border-b dark:border-b-light"
      data-sticky-name="header"
      data-sticky-offset="100px"
      id="header"
    >
      {/* Container */}
      <div className="container-fixed flex lg:justify-between items-center gap-2.5">
        {/* Logo */}
        <div className="flex items-center gap-1 lg:w-[400px] grow lg:grow-0">
          <button
            className="btn btn-icon btn-light btn-clear btn-sm -ms-2.5 lg:hidden"
            data-drawer-toggle="#navbar"
          >
            <i className="ki-filled ki-menu"></i>
          </button>
          <div className="flex items-center gap-2">
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
            <h3 className="text-gray-900 text-lg font-medium hidden md:block">
              Readora
            </h3>
          </div>
          {/* Navs */}
          <div className="hidden lg:flex items-center">
            <div className="border-e border-gray-200 h-5 mx-4"></div>
            {/* Nav */}
            <div className="menu menu-default" data-menu="true">
              <div
                className="menu-item menu-item-dropdown"
                data-menu-item-offset="0, 10px"
                data-menu-item-placement="bottom-start"
                data-menu-item-toggle="dropdown"
                data-menu-item-trigger="hover"
              >
                <button className="menu-toggle text-gray-900 text-sm font-medium">
                  Readora
                  <span className="menu-arrow">
                    <i className="ki-filled ki-down"></i>
                  </span>
                </button>
                <div className="menu-dropdown w-48 py-2">
                  <div className="menu-item">
                    <Link href="/" className="menu-link" tabIndex={0}>
                      <span className="menu-icon">
                        <i className="ki-filled ki-profile-circle"></i>
                      </span>
                      <span className="menu-title">Home</span>
                    </Link>
                  </div>
                  {isAdmin() || isLibrarian() || isOwner() ? (
                    <div className="menu-item">
                      <Link
                        className="menu-link"
                        href="/dashboard"
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-setting-2"></i>
                        </span>
                        <span className="menu-title">Dashboard</span>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {/* End of Nav */}
          </div>
          {/* End of Navs */}
        </div>
        {/* End of Logo */}
        <HeaderSearch />
        {/* Topbar */}
        {isAuthenticated ? (
          <Topbar />
        ) : (
          <div className="flex items-center gap-2 lg:gap-3.5 lg:w-[400px] justify-end">
            <div className="flex items-center gap-3">
              <Link className="btn btn-sm btn-light" href="/auth/sign-up">
                Sign up
              </Link>
              <button className="btn btn-sm btn-dark" onClick={redirectToLogin}>
                Sign in
              </button>
            </div>
          </div>
        )}

        {/* End of Topbar */}
      </div>
      {/* End of Container */}
    </header>
  );
}

export default Header;
