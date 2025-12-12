"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Single Explore Flyout with three stacked sections
const ExploreFlyout = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full -left-32 pt-2 z-50"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-6 w-[900px]">
              {/* Three sections stacked vertically */}
              <div className="grid grid-cols-4 gap-8">
                {/* Services Column */}
                <div className="flex flex-col">
                  {/* Services Link Group Name */}
                  <motion.h4
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b border-gray-200"
                  >
                    Services
                  </motion.h4>

                  {/* Services Hero Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    className="mb-6"
                  >
                    <Link href="/services">
                      <div className="relative rounded-lg p-6 flex flex-col justify-end h-48 overflow-hidden">
                        {/* Dark tinted background image */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src="/images/web-development.jpg" // Replace with your image path
                            alt="Professional Services Background"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-white mb-3">
                            Professional Services
                          </h3>
                          <p className="text-sm text-gray-200 leading-relaxed">
                            End-to-end digital solutions.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Services Links */}
                  <ul className="space-y-2 flex-grow">
                    {servicesItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.03,
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          x: 4,
                          transition: { duration: 0.15, ease: "easeInOut" },
                        }}
                      >
                        <Link
                          href={item.href}
                          className="block p-px rounded-lg"
                        >
                          <div className="text-sm text-gray-600 hover:text-gray-900">
                            {item.label}
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Academy Column */}
                <div className="flex flex-col">
                  {/* Academy Link Group Name */}
                  <motion.h4
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.2 }}
                    className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b border-gray-200"
                  >
                    Academy
                  </motion.h4>

                  {/* Academy Hero Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="mb-6"
                  >
                    <Link href="/academy">
                      <div className="relative rounded-lg p-6 flex flex-col justify-end h-48 overflow-hidden">
                        {/* Dark tinted background image */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src="/images/academy.jpg" // Replace with your image path
                            alt="Professional Services Background"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-white mb-3">
                            Digitanotion Academy
                          </h3>
                          <p className="text-sm text-gray-200 leading-relaxed">
                            Equip your team with skills to build secure,
                            resilient systems faster.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Academy Links */}
                  <ul className="space-y-2 flex-grow">
                    {academyItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.03,
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          x: 4,
                          transition: { duration: 0.15, ease: "easeInOut" },
                        }}
                      >
                        <Link
                          href={item.href}
                          className="block p-px rounded-lg"
                        >
                          <div className="text-sm text-gray-600 hover:text-gray-900">
                            {item.label}
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Programme Column */}
                <div className="flex flex-col">
                  {/* Programme Link Group Name */}
                  <motion.h4
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.2 }}
                    className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b border-gray-200"
                  >
                    Programme
                  </motion.h4>

                  {/* Programme Hero Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.2 }}
                    className="mb-6"
                  >
                    <Link href="/cysapafrica">
                      <div className="relative rounded-lg p-6 flex flex-col justify-end h-48 overflow-hidden">
                        {/* Dark tinted background image */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src="/images/tech-community.jpg" // Replace with your image path
                            alt="Professional Services Background"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-white mb-3">
                            Special Programs
                          </h3>
                          <p className="text-sm text-gray-200 leading-relaxed">
                            Flagship initiatives like Tech6Project
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Programme Links */}
                  <ul className="space-y-2 flex-grow">
                    {programmeItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.03,
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          x: 4,
                          transition: { duration: 0.15, ease: "easeInOut" },
                        }}
                      >
                        <Link
                          href={item.href}
                          className="block p-px rounded-lg"
                        >
                          <div className="text-sm text-gray-600 hover:text-gray-900">
                            {item.label}
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Alumini Column */}
                <div className="flex flex-col">
                  {/* Services Link Group Name */}
                  <motion.h4
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b border-gray-200"
                  >
                    Alumni
                  </motion.h4>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    className="mb-6"
                  >
                    <Link href="/alumni">
                      <div className="relative rounded-lg p-6 flex flex-col justify-end h-48 overflow-hidden">
                        {/* Dark tinted background image */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src="/images/web-development.jpg" // Replace with your image path
                            alt="Professional Services Background"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-white mb-3">
                            Digitanotion Alumni
                          </h3>
                          <p className="text-sm text-gray-200 leading-relaxed">
                            See some of our past pupils at digitanotion
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Nav Trigger (button style)
const NavTrigger = ({ children, isOpen }) => {
  return (
    <div
      className={cn(
        "flex items-center py-2 rounded-md text-lg uppercase font-[900] cursor-pointer select-none text-gray-100"
      )}
    >
      {children}
      <ChevronDown
        className={cn("size-8 transition-transform", isOpen && "rotate-180")}
      />
    </div>
  );
};

// Main Menu
export function MenuItems() {
  const [openMenu, setOpenMenu] = React.useState(null);
  const timeoutRef = React.useRef(null);

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <nav className="relative flex items-center gap-6 px-6">
      <div className="flex items-center gap-2">
        {/* Explore (combined flyout) */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("explore")}
          onMouseLeave={handleMouseLeave}
        >
          <NavTrigger isOpen={openMenu === "explore"}>Explore</NavTrigger>
          <ExploreFlyout isOpen={openMenu === "explore"} />
        </div>
      </div>
    </nav>
  );
}

// --- Data ---
const academyItems = [
  { href: "/academy/computing-essentials", label: "Computing Essentials" },
  { href: "/academy/web-development", label: "Web Development" },
  { href: "/academy/cyber-security", label: "Cyber Security" },
];

const servicesItems = [
  { href: "/services/software-development", label: "Software Development" },
  { href: "/services/cyber-security", label: "CyBouncer" },
  { href: "/services/software-development", label: "Mobile App Development" },
  { href: "/services/cyber-security", label: "Cyber Security Services" },
  { href: "/services/product-design", label: "Digital Product Design" },
];

const programmeItems = [
  { href: "/cysapafrica", label: "Cysap Africa" },
  {
    href: "/dils",
    label: "Digitantion Innovation Lab for Schools (DILS)",
  },
];
