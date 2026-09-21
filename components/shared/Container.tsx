import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-5 ${className}`}>
            {children}
        </div>
    );
};