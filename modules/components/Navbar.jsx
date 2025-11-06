"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Sidebar from "./Sidebar";

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [mobileAcademyOpen, setMobileAcademyOpen] = React.useState(false);
    const pathname = usePathname();

    const academySubItems = [
        { href: '/academy/computing-essentials', label: 'Computing Essentials' },
        { href: '/academy/web-development', label: 'Web Development' },
        { href: '/academy/cyber-security', label: 'Cyber Security' },
    ];

    const navItems = [
        { href: '/academy', label: 'Academy' },
        { href: '/services', label: 'Services' },
    ];

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <header className="w-full">
            <nav className="flex items-center justify-between fixed w-full top-0 z-50 glass rounded-none px-4">
                <div className="flex items-center">
                    <Link href="/" className="inline-flex items-center" aria-label="Digitanotion home">
                        <img
                            src="https://res.cloudinary.com/dnitzkowt/image/upload/v1760014135/digitalogo_bgvbai.png"
                            alt="Digitanation Logo"
                            className="h-24 w-auto mx-2"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-center space-x-6 poppins-semibold">
                    {navItems.map((item) => (
                        item.href === '/academy' ? (
                            <div key={item.href} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`font-bold px-2 ${isActive(item.href) ? 'text-white underline decoration-2 underline-offset-4' : 'text-white hover:opacity-90'}`}
                                    aria-current={isActive(item.href) ? 'page' : undefined}
                                >
                                    {item.label}
                                </Link>

                                <div className="absolute left-0 w-52 glass rounded-md shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto delay-150 group-hover:delay-0 transition-opacity duration-200 ease-in-out">
                                    {academySubItems.map((sub) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`font-bold px-2 ${isActive(item.href) ? 'text-white underline decoration-2 underline-offset-4' : 'text-white hover:opacity-90'}`}
                                aria-current={isActive(item.href) ? 'page' : undefined}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://facebook.com/digitanotion" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-emerald-300 transition border-2 rounded-md p-1">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/digitanotionsystems/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-emerald-300 transition border-2 rounded-md p-1">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/digitanotion" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-emerald-300 transition border-2 rounded-md p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.09 1.49 3.83 3.47 4.23-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59c-.77.34-1.6.57-2.47.68z"/></svg>
                    </a>
                </div>

                <div className="md:hidden">
                    <button
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white inline-flex items-center justify-center w-10 h-10 rounded-md transition-transform duration-200 ease-in-out"
                    >
                        {isOpen ? (
                            <IoMdClose size={24} className="transform transition-transform duration-200" />
                        ) : (
                            <AiOutlineMenu size={24} className="transform transition-transform duration-200" />
                        )}
                    </button>
                </div>
            </nav>

            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                mobileAcademyOpen={mobileAcademyOpen}
                setMobileAcademyOpen={setMobileAcademyOpen}
                navItems={navItems}
                academySubItems={academySubItems}
                isActive={isActive}
            />
        </header>
    );
}

export default Navbar;
