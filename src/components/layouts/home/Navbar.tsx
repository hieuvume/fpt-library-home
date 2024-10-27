import { NAVBAR_MENU } from "@/config/navbar";
import DropdownMenu from "./navbar/DropdownMenu";
import MenuLink from "./navbar/MenuLink";

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
          {NAVBAR_MENU.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <DropdownMenu item={item} />
              ) : (
                <div className="menu-item">
                  <MenuLink title={item.title} href={item.href || "#"} />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* End of Mega Menu */}
      </div>
      {/* End of Container */}
    </div>
  );
}

export default Navbar;
