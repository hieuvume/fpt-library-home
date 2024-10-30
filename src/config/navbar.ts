
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
    {
        title: 'Help',
        items: [
            {
                title: 'Getting Started',
                href: '/help/getting-started',
                icon: 'ki-filled ki-coffee',
            },
            {
                title: 'FAQ',
                href: '/help/faq',
                icon: 'ki-filled ki-subtitle',
            },
            {
                title: 'Contact Us',
                href: '/help/contact',
                icon: 'ki-filled ki-share',
            }
        ]
    }
]