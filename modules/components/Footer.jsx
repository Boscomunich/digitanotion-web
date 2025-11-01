import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
            

export default function Footer() {
  return (
  <footer className="w-full glass rounded-none text-white py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8">

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <FiMapPin className="inline-block text-xl" /> Address
          </h3>
          <p className="text-sm leading-relaxed">
            Suite 6, Mgbajiaka Area, Digitanotion Limited,<br />
            Along Onisha - Enugu Expy,<br />
            Opposite East-End Hotel, Awka.<br />
            <span className="block mt-2 font-medium">Open from 9am to 4pm (WAT)</span>
          </p>
        </div>

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
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com/digitanotion" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-emerald-300 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/digitanotionsystems/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-emerald-300 text-xl">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/digitanotion" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-emerald-300 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.09 1.49 3.83 3.47 4.23-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59c-.77.34-1.6.57-2.47.68z"/></svg>
            </a>
            <a href="https://linkedin.com/company/digitanotion" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-emerald-300 text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/40 my-6" />

      <div className="text-center text-sm font-light">
        Copyright © 2025 Digitanotion. All rights reserved.
      </div>
    </footer>
  );
}
