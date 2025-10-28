import React from "react";

export default function Footer() {
  return (
    <footer className="w-full glass text-white py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8">

        {/* Address */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-sm leading-relaxed">
            Digitanotion, Office 27, Tonimas Plaza,<br />
            B-Bus Stop, Ifite, Awka, Anambra State.
          </p>
        </div>

        {/* Support */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <p className="text-sm leading-relaxed">
            +234 80 7373 5836<br />
            <a
              href="mailto:hello@digitanotion.com.ng"
              className="hover:underline text-white"
            >
              hello@digitanotion.com.ng
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 my-6" />

      {/* Copyright */}
      <div className="text-center text-sm font-light">
        Copyright © 2025 Digitanotion. All rights reserved.
      </div>
    </footer>
  );
}
