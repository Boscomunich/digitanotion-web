"use client"
import React from 'react';
import Link from 'next/link';

export default function Sidebar({
  isOpen,
  setIsOpen,
  mobileAcademyOpen,
  setMobileAcademyOpen,
  navItems = [],
  academySubItems = [],
  isActive = () => false,
}) {
  return (
    <div className={`fixed inset-0 z-40 md:hidden ${isOpen ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden
      />

      <div className={`absolute right-0 top-0 h-full w-80 bg-white p-4 pt-24 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-6">
          <div />
        </div>

        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            item.href === '/academy' ? (
              <li key={item.href}>
                <button
                  onClick={() => setMobileAcademyOpen(!mobileAcademyOpen)}
                  aria-expanded={mobileAcademyOpen}
                  className={`w-full text-left inline-flex items-center justify-between gap-2 text-neutral-900 font-medium ${isActive(item.href) ? 'font-semibold' : ''} glass px-3 py-2 rounded-md`}
                >
                  <span>{item.label}</span>
                  <span className={`${mobileAcademyOpen ? 'rotate-180' : ''} transform transition-transform`}>
                    ▼
                  </span>
                </button>

                {mobileAcademyOpen && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2">
                    {academySubItems.map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href} onClick={() => { setIsOpen(false); setMobileAcademyOpen(false); }} className="text-neutral-700 text-sm">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)} className={`text-neutral-900 font-medium ${isActive(item.href) ? 'font-semibold' : ''}`} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            )
          ))}
        </ul>

        <div className="my-10 space-y-3 ">
          <div className="bg-white p-2 rounded-lg shadow-sm overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761846803/ChatGPT_Image_Oct_27__2025__08_30_25_PM-removebg-preview_1_kobgd3.png"
              alt="Academy preview 1"
              className="w-full h-30 object-cover rounded-md"
            />
            <p className="text-sm text-neutral-700 mt-3 text-center px-2">Explore our academy courses — beginner friendly modules to start your learning journey.</p>

            <Link
              href="/services/techproject"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-block w-full text-center px-3 py-2 rounded-md text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition"
            >
              Learn more
            </Link>
          </div>

          <div className="bg-white p-2 rounded-lg shadow-sm overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761846615/ChatGPT_Image_Oct_27__2025__08_37_46_PM-removebg-preview_aomvcv.png"
              alt="Academy preview 2"
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="text-sm text-neutral-700 mt-3 text-center px-2">Hands-on projects and practical lessons to build real skills you can show.</p>
          </div>

          <div className="bg-white p-2 rounded-lg shadow-sm overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761846597/ChatGPT_Image_Oct_27__2025__08_32_59_PM-removebg-preview_wx1rqg.png"
              alt="Academy preview 3"
              className="w-full h-20 object-cover rounded-md"
            />
            <p className="text-sm text-neutral-700 mt-3 text-center px-2">Career support and guidance — pathways to internships and job-ready portfolios.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
