import React from 'react'
import Link from 'next/link'

interface NavItemProps {
    href: string;
    text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
    return (
        <li>
            <Link
                href={href}
                className="duration-300 font-bold ease-linear hover:text-primary py-3"
            >
                {text}
            </Link>
        </li>
    )
}

export default NavItem