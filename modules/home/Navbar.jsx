"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";
import { MenuItems } from "./menuitems";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mobileAcademyOpen, setMobileAcademyOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const pathname = usePathname();

  const academySubItems = [
    { href: "/academy/computing-essentials", label: "Computing Essentials" },
    { href: "/academy/web-development", label: "Web Development" },
    { href: "/academy/cyber-security", label: "Cyber Security" },
  ];

  const servicesSubItems = [
    { href: "/services/software-development", label: "Software Devlopment" },
    { href: "/services/product-design", label: "Digital Product Design" },
    { href: "/services/cyber-security", label: "Cybouncer" },
  ];

  const navItems = [
    { href: "/academy", label: "Academy" },
    { href: "/services", label: "Services" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="w-full">
      <nav className="flex items-center justify-between lg:justify-start fixed w-full top-0 z-50 h-18 glass rounded-none px-4 lg:px-12">
        <div className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Digitanotion home"
          >
            <Image
              src="https://res.cloudinary.com/dnitzkowt/image/upload/v1760014135/digitalogo_bgvbai.png"
              alt="Digitanation Logo"
              className="scale-125"
              width={100}
              height={80}
            />
          </Link>
        </div>

        {/* Vertical slash separator */}
        <div className="h-8 w-1 ml-6 bg-white hidden md:flex " />

        <div className="hidden md:flex flex-1 ">
          <MenuItems />
        </div>

        <div className="md:hidden">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white inline-flex items-center justify-center w-10 h-10 rounded-md transition-transform duration-200 ease-in-out"
          >
            {isOpen ? (
              <IoMdClose
                size={24}
                className="transform transition-transform duration-200"
              />
            ) : (
              <AiOutlineMenu
                size={24}
                className="transform transition-transform duration-200"
              />
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
        servicesSubItems={servicesSubItems}
        mobileServicesOpen={mobileServicesOpen}
        setMobileServicesOpen={setMobileServicesOpen}
        isActive={isActive}
      />
    </header>
  );
}

export default Navbar;
