// ServicesFilter.jsx
import React from "react";
import { SERVICES } from "../services/servicesdata";

const ACTIVE_COLOR = "#fb8507";

export default function ServicesFilter({
  activeKey,
  onChange,
  className = "",
}) {
  return (
    <div
      className={`w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`}
    >
      {SERVICES.map((svc) => {
        const active = activeKey === svc.key;
        return (
          <button
            key={svc.key}
            type="button"
            onClick={() => onChange?.(svc.key)}
            aria-pressed={active}
            className={[
              "px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
              active
                ? "text-white focus:ring-[color:var(--active)]"
                : "text-neutral-800 bg-white/85 hover:bg-white focus:ring-neutral-300",
            ].join(" ")}
            style={{
              "--active": ACTIVE_COLOR,
              backgroundColor: active ? ACTIVE_COLOR : undefined,
            }}
          >
            {svc.name}
          </button>
        );
      })}
    </div>
  );
}
