export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

export const navItems: NavItem[] = [
    { label: "Início", href: "#hero" },
    { label: "Cursos", href: "#cursos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Eventos", href: "#eventos" },
    { label: "Vida Acadêmica", href: "#vida-academica" },

];