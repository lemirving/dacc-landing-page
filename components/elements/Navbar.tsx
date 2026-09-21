'use client'
import Link from 'next/link'
import {Container} from '@/components/shared/Container'
import Image from 'next/image'
import NavItem from '@/components/shared/NavItem'
import BtnLink from '@/components/shared/BtnLink'
import {useThemeStore} from '@/store/ThemeStore'
import {useState, useEffect} from 'react'

export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean; // Caso queira colocar um link externo (ex: Instagram ou PDF)
}

export const navItems: NavItem[] = [
    {label: "Início", href: "#hero"},
    {label: "Sobre", href: "#sobre"},
    {label: "Projetos", href: "#projetos"},
    {label: "Vida Estudantil", href: "#vida-estudantil"},
    {label: "Professores", href: "#professores"},
    {label: "Outros", href: "#outros"},
];
export const Navbar = () => {
    const {toggleTheme, theme} = useThemeStore()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <header className={"absolute inset-x-0 top-0 z-50 py-6"}>
            <Container>
                <nav className={"w-full flex justify-between gap-6 relative"}>
                    {/* Logo */}
                    <div className={"min-w-max inline-flex relative"}>
                        <Link href={"/"} className={"relative flex items-center gap-3"}>
                            <Image
                                src="/icon.svg"
                                width={40}
                                height={40}
                                alt="DACC Logo"
                            />
                            <div className={"inline-flex text-lg font-extrabold text-heading-1"}>DACC</div>
                        </Link>
                    </div>
                    {/* Menu Items */}
                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-background lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto">
                        <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-5 gap-x-10 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                            {navItems.map((item) => (
                                <NavItem href={item.href} text={item.label} key={item.href} />
                            ))}
                        </ul>
                        <div className={"lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-box-border lg:border-0 px-6 lg:px-0"}>
                            <BtnLink text={"Saber mais"} href={"#cta"} className={""}/>
                        </div>
                    </div>
                    <div className={"min-w-max flex items-center gap-x-3 "}>
                        <button onClick={toggleTheme} className="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                {!mounted || theme !== 'dark' ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0H3m15.364 6.364l-1.591-1.591M6.758 6.758L5.167 5.167m12.728 0l-1.591 1.591M6.758 17.242l-1.591 1.591M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

