import React from 'react'
import Image from 'next/image'
import { Container } from "@/components/shared/Container"
import { navItems } from '@/constants/navigation'
import NavItem from '@/components/shared/NavItem'

export const Footer = () => {
    return (
        <footer className="w-full border-t border-box-border py-10 bg-background">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">

                    <div className="flex items-center gap-3.5">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 overflow-hidden rounded-full border border-box-border shadow-sm">
                            <Image
                                src="/logo-ccomp.png"
                                alt="Logo CCOMP UNIR"
                                fill
                                quality={200}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-heading-1 text-xl sm:text-2xl tracking-tight leading-none">
                                CCOMP
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                                Coordenação de Computação | UNIR
                            </span>
                        </div>
                    </div>


                    <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end text-xs sm:text-sm text-body-custom font-medium">
                        {navItems.map((item) => (
                            <NavItem key={item.href} href={item.href} text={item.label} />
                        ))}
                    </nav>
                </div>


                <div className="mt-8 pt-6 border-t border-box-border/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} DACC — Universidade Federal de Rondônia.</p>
                    <p>Todos os direitos reservados.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;