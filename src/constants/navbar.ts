export interface NavbarItem {
    id: number;
    name: string;
    link: string;
}

export const navbar: NavbarItem[] = [
    { id: 0, name: 'Главная', link: '/' },
    { id: 1, name: 'Меню', link: '/menu' },
    { id: 2, name: 'VIP-комнаты', link: '/rooms' },
    { id: 3, name: 'Галерея', link: '/gallery' },
    { id: 4, name: 'Партнеры', link: '/partners' },
    { id: 5, name: 'Статьи', link: '/articles' },
    { id: 6, name: 'Контакты', link: '/contacts' },
];