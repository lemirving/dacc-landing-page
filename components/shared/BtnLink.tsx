import React from 'react'
import Link from 'next/link'

interface BtnLinkProps {
    href: string;
    text: string;
    className?: string;
}

const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 border-none outline-none cursor-pointer transition-colors duration-300 shadow-md ${className}`}
        >
            <span className="relative z-10">{text}</span>
        </Link>
    )
}

export default BtnLink