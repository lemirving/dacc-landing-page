import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    text: string
    href: string
    className?: string
}

export const Button = ({ text, href, className = "" }: ButtonProps) => {
    const isExternal = href.startsWith('http://') || href.startsWith('https://')

    return (
        <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all shadow-sm ${className}`}
        >
            {text}
        </Link>
    )
}

export default Button