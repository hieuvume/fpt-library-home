
export interface MenuItem {
    title: string;
    href?: string;
    icon?: string;
    items?: MenuItem[];
  }

export const NAVBAR_MENU: MenuItem[] = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Plans',
        href: '/plans'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Contact',
        href: '/contact'
    },
]