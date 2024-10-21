import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuLinkProps {
    title: string;
    href: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ title, href }) => {

    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <div className={`menu-item ${isActive ? 'active' : ''}`}>
            <Link
                className="menu-link lg:py-3.5 border-b border-b-transparent menu-item-active:border-b-gray-800 text-gray-800 menu-item-hover:text-gray-900 menu-item-active:text-gray-900 menu-item-here:border-b-gray-800 menu-item-here:text-gray-900"
                href={href}
            >
                <span className="menu-title font-medium text-gray-800 text-sm">
                    {title}
                </span>
            </Link>
        </div>
    );
};

export default MenuLink;