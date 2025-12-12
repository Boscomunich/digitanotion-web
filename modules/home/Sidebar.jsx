"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({
  isOpen,
  setIsOpen,
  mobileAcademyOpen,
  setMobileAcademyOpen,
  mobileServicesOpen,
  setMobileServicesOpen,
  navItems = [],
  academySubItems = [],
  servicesSubItems = [],
  isActive = () => false,
}) {
  return (
    <div
      className={`fixed inset-0 z-40 md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden
      />

      <div
        className={`absolute overflow-scroll right-0 top-0 h-full w-80 bg-background p-4 pt-18 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div />
        </div>

        <ul className="flex flex-col gap-4">
          {navItems.map((item) => {
            // Determine if this item should have Academy dropdown
            const isAcademyItem = item.label.toLowerCase().includes("academy");
            // Determine if this item should have Services dropdown
            const isServicesItem =
              item.label.toLowerCase().includes("service") ||
              item.label.toLowerCase().includes("service");

            return (
              <li key={item.href}>
                {isAcademyItem ? (
                  // Academy dropdown
                  <>
                    <button
                      onClick={() => setMobileAcademyOpen(!mobileAcademyOpen)}
                      aria-expanded={mobileAcademyOpen}
                      className={`w-full text-left inline-flex items-center justify-between gap-2 text-foreground font-medium ${
                        isActive(item.href) ? "font-semibold" : ""
                      } glass px-3 py-2 rounded-md`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`${
                          mobileAcademyOpen ? "rotate-180" : ""
                        } transform transition-transform`}
                      >
                        ▼
                      </span>
                    </button>

                    {mobileAcademyOpen && (
                      <ul className="mt-2 ml-4 flex flex-col gap-2">
                        {academySubItems.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileAcademyOpen(false);
                              }}
                              className="text-fg-secondary text-sm hover:text-foreground transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : isServicesItem ? (
                  // Services dropdown
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                      className={`w-full text-left inline-flex items-center justify-between gap-2 text-foreground font-medium ${
                        isActive(item.href) ? "font-semibold" : ""
                      } glass px-3 py-2 rounded-md`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`${
                          mobileServicesOpen ? "rotate-180" : ""
                        } transform transition-transform`}
                      >
                        ▼
                      </span>
                    </button>

                    {mobileServicesOpen && (
                      <ul className="mt-2 ml-4 flex flex-col gap-2">
                        {servicesSubItems.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="text-fg-secondary text-sm hover:text-foreground transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  // Regular link (no dropdown)
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full block text-left text-foreground font-medium ${
                      isActive(item.href) ? "font-semibold" : ""
                    } glass px-3 py-2 rounded-md`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="my-10 space-y-3">
          <div className="bg-bg-secondary border border-white/20 p-2 rounded-lg shadow-sm overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761846803/ChatGPT_Image_Oct_27__2025__08_30_25_PM-removebg-preview_1_kobgd3.png"
              alt="Academy preview 1"
              className="w-full h-30 object-cover rounded-md"
              height={500}
              width={500}
            />
            <p className="text-sm text-fg-secondary mt-3 text-center px-2">
              Explore our academy courses — beginner friendly modules to start
              your learning journey.
            </p>

            <Link
              href="/academy"
              onClick={() => {
                setIsOpen(false);
                setMobileAcademyOpen(false);
              }}
              className="mt-3 inline-block w-full text-center px-3 py-2 rounded-md text-sm font-medium text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition"
            >
              Learn more
            </Link>
          </div>

          <div className="bg-bg-secondary border border-white/20 p-2 rounded-lg shadow-sm overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761846615/ChatGPT_Image_Oct_27__2025__08_37_46_PM-removebg-preview_aomvcv.png"
              alt="Academy preview 2"
              className="w-full h-40 object-cover rounded-md"
              height={500}
              width={500}
            />
            <p className="text-sm text-fg-secondary mt-3 text-center px-2">
              Hands-on projects and practical lessons to build real skills you
              can show.
            </p>
            <Link
              href="/cysapafrica"
              onClick={() => {
                setIsOpen(false);
                setMobileAcademyOpen(false);
              }}
              className="mt-3 inline-block w-full text-center px-3 py-2 rounded-md text-sm font-medium text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition"
            >
              Learn more
            </Link>
          </div>

          <div className="bg-bg-secondary border border-white/20 p-2 rounded-lg shadow-sm overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761846597/ChatGPT_Image_Oct_27__2025__08_32_59_PM-removebg-preview_wx1rqg.png"
              alt="Academy preview 3"
              className="w-full h-20 object-cover rounded-md"
              height={500}
              width={500}
            />
            <p className="text-sm text-fg-secondary mt-3 text-center px-2">
              Career support and guidance — pathways to internships and
              job-ready portfolios.
            </p>
            <Link
              href="/dils"
              onClick={() => {
                setIsOpen(false);
                setMobileAcademyOpen(false);
              }}
              className="mt-3 inline-block w-full text-center px-3 py-2 rounded-md text-sm font-medium text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
