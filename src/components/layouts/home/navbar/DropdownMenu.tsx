// DropdownMenu.tsx
import React, { Fragment, useState } from "react";
import MenuLink from "./MenuLink";
import { MenuItem } from "@/config/navbar";
import Link from "next/link";

interface DropdownMenuProps {
  item: MenuItem;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
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
          {item.title}
        </span>
        <span className="menu-arrow flex lg:hidden">
          <i className="ki-filled ki-plus text-2xs text-gray-600 menu-item-show:hidden"></i>
          <i className="ki-filled ki-minus text-2xs text-gray-600 hidden menu-item-show:inline-flex"></i>
        </span>
      </div>
      <div className="menu-dropdown menu-default py-2.5 w-full max-w-[220px]">
        {item.items?.map((subItem, index) => (
          <Fragment key={`sub-${index}`}>
            {subItem.items ? (
              <div
                className="menu-item menu-item-dropdown"
                data-menu-item-placement="right-start"
                data-menu-item-toggle="dropdown"
                data-menu-item-trigger="click|lg:hover"
              >
                <div className="menu-link">
                  <span className="menu-icon">
                    <i className={subItem.icon}></i>
                  </span>
                  <span className="menu-title">{subItem.title}</span>
                  <span className="menu-arrow">
                    <i className="ki-filled ki-right text-3xs"></i>
                  </span>
                </div>
                <div className="menu-dropdown menu-default w-full max-w-[175px] lg:max-w-[220px]">
                  {subItem.items.map((subSubItem, index) => (
                    <div className="menu-item" key={`sub-sub-${index}`}>
                      <Link
                        className="menu-link"
                        href={subSubItem.href || "#"}
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className={subSubItem.icon}></i>
                        </span>
                        <span className="menu-title grow-0">{subSubItem.title}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="menu-item">
                <Link
                  className="menu-link"
                  href={subItem.href || "#"}
                  tabIndex={0}
                >
                  <span className="menu-icon">
                    <i className={subItem.icon}></i>
                  </span>
                  <span className="menu-title grow-0">{subItem.title}</span>
                </Link>
              </div>
            )}
          </Fragment>
        ))}


      </div>
    </div>
  );
};

export default DropdownMenu;
