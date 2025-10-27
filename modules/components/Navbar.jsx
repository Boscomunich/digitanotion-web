"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <header className="w-full">
            <nav className="flex items-center justify-between sticky top-0 z-50 glass ">
                <div className="flex items-center">
                    <Link href="/" className="inline-flex items-center" aria-label="Digitanotion home">
                        <img
                            src="https://res.cloudinary.com/dnitzkowt/image/upload/v1760014135/digitalogo_bgvbai.png"
                            alt="Digitanation Logo"
                            className="h-24 w-auto mx-2"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-6 poppins-semibold">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-bold ${isActive(item.href) ? 'text-white underline decoration-2 underline-offset-4' : 'text-white hover:opacity-90'}`}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    {/* Single toggle button — stays in the same place and toggles icon so it appears to morph between hamburger and close */}
                    <button
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white inline-flex items-center justify-center w-10 h-10 rounded-md transition-transform duration-200 ease-in-out"
                    >
                        {/* animate a small rotation/scale for visual feedback */}
                        {isOpen ? (
                            <IoMdClose size={24} className="transform transition-transform duration-200" />
                        ) : (
                            <AiOutlineMenu size={24} className="transform transition-transform duration-200" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile slide-over menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setIsOpen(false)}
                        aria-hidden
                    />

                    <div className="absolute right-0 top-0 h-full w-72 bg-white p-4 shadow-lg">
                        {/* header area inside slide-over (logo or title could go here) */}
                        <div className="flex items-center justify-between mb-6">
                            <div />
                        </div>

                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} onClick={() => setIsOpen(false)} className={`text-neutral-900 font-medium ${isActive(item.href) ? 'font-semibold' : ''}`} aria-current={isActive(item.href) ? 'page' : undefined}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
