import {React,ReactNode} from 'react'
import Link from 'next/link'

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = ({ onClick, children, className = "" }: ButtonProps) => {
    return (
        <button className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border g-blue-800 ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default BtnLink