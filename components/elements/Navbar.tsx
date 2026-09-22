'use client'
import Link from 'next/link'
import { Container } from '@/components/shared/Container'
import Image from 'next/image'
import NavItem from '@/components/shared/NavItem'
import BtnLink from '@/components/shared/BtnLink'
import { useThemeStore } from '@/store/ThemeStore'
import { useState, useEffect } from 'react'
import { navItems } from '@/constants/navigation'

export const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore()
    const [mounted, setMounted] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    const toggleNavbar = () => {
        setNavOpen((open) => !open)
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="absolute inset-x-0 top-0 z-50 py-4 lg:py-5">
            <Container>
                <nav className="w-full flex justify-between items-center gap-6 relative">
                    <div className="min-w-max inline-flex relative z-10">
                        <Link href="/" className="relative flex items-center gap-3 group">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full border border-box-border bg-box-bg flex items-center justify-center transition-colors group-hover:border-primary/50">
                                <Image
                                    src="/logo-ccomp.png"
                                    alt="Logo Oficial CCOMP UNIR"
                                    fill
                                    sizes="(max-width: 640px) 48px, 56px"
                                    quality={95}
                                    className="object-contain p-1"
                                />
                            </div>
                            <span className="inline-flex text-lg font-extrabold text-heading-1 tracking-tight">
                                CCOMP
                            </span>
                        </Link>
                    </div>

                    <div className={`
                        flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                        absolute top-full left-0 lg:static lg:top-0 
                        bg-background/95 dark:bg-background/98 backdrop-blur-md lg:bg-transparent 
                        border border-box-border lg:border-0 rounded-2xl lg:rounded-none 
                        mt-3 lg:mt-0 p-6 lg:p-0
                        shadow-xl lg:shadow-none transition-all duration-200 ease-in-out
                        ${navOpen ? "flex z-40 opacity-100 translate-y-0" : "hidden lg:flex pointer-events-none lg:pointer-events-auto"}
                    `}>
                        <ul className="flex flex-col lg:flex-row gap-y-4 gap-x-8 text-base lg:text-lg text-heading-2 w-full lg:justify-center lg:items-center font-medium">
                            {navItems.map((item) => (
                                <div key={item.href} onClick={() => setNavOpen(false)}>
                                    <NavItem href={item.href} text={item.label} />
                                </div>
                            ))}
                        </ul>

                        <div className="lg:min-w-max flex items-center sm:w-max w-full pt-5 lg:pt-0 border-t border-box-border lg:border-0 mt-5 lg:mt-0">
                            <BtnLink text="Saber mais" href="https://ccomputacao.unir.br/" className="w-full sm:w-auto text-center" />
                        </div>
                    </div>

                    <div className="min-w-max flex items-center gap-x-3 z-10">
                        <button
                            onClick={toggleTheme}
                            aria-label="Alternar tema"
                            className="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-2.5 border border-box-border cursor-pointer hover:bg-box-bg transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 lg:w-6 lg:h-6"
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

                        <button
                            onClick={toggleNavbar}
                            aria-label="Abrir menu"
                            className="lg:hidden outline-none flex relative text-heading-2 rounded-xl p-2 border border-box-border cursor-pointer hover:bg-box-bg transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                {navOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;