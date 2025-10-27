"use client";
// WebDevSection.jsx
import React from "react";
import { SERVICES } from "./servicesdata";
import ServicesFilter from "./servicesfilter";
import ServicesSection from "./servicessection";

export default function WebDevSection() {
  const [active, setActive] = React.useState(SERVICES[0].key);
  const current = React.useMemo(
    () => SERVICES.find((s) => s.key === active) ?? SERVICES[0],
    [active]
  );

  return (
    <div className="w-full">
      {/* Filter (mobile-first; stays centered; wraps on small screens) */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-6">
        <ServicesFilter activeKey={active} onChange={setActive} />
      </div>

      {/* Section with glass card + shared background */}
      <ServicesSection service={current} />
    </div>
  );
}
