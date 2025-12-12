"use client";

import { useRef, useEffect, useState } from "react";
import LeftContent from "./left-content";
import RightContent from "./right-content";
import PortfolioSectionLight from "../product-designing/project";
import MobileDevelopment from "../mobile-development";

export default function SoftwareDevelopmentService() {
  const sectionRef = useRef(null);
  const rightContentRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (!isDesktop || !rightContentRef.current) return;

    const rightHeight = rightContentRef.current.scrollHeight;
    const screenHeight = window.innerHeight;
    const totalHeight = screenHeight + (rightHeight - screenHeight);

    if (sectionRef.current) {
      sectionRef.current.style.minHeight = `${totalHeight}px`;
    }
  }, [isDesktop]);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!sectionRef.current || !rightContentRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const rightContentHeight = rightContentRef.current.scrollHeight;
      const containerHeight = window.innerHeight;
      const maxScroll = rightContentHeight - containerHeight;

      if (sectionRect.top <= 0 && sectionRect.bottom > window.innerHeight) {
        const distanceFromTop = Math.abs(sectionRect.top);
        const scrollAmount = Math.min(distanceFromTop, maxScroll);
        setTranslateY(-scrollAmount);
      } else if (sectionRect.top > 0) {
        setTranslateY(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full px-8 lg:px-16"
        style={{
          minHeight: isDesktop ? "calc(100vh + 800px)" : "auto",
        }}
      >
        <div className="flex flex-col items-start lg:flex-row lg:sticky lg:top-8 lg:h-screen overflow-visible">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 lg:h-screen flex items-start justify-center border-b lg:border-r">
            <LeftContent />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 lg:h-screen flex items-start justify-center ">
            <div
              ref={rightContentRef}
              className="flex-1"
              style={{
                transform: isDesktop ? `translateY(${translateY}px)` : "none",
                transition: "none",
              }}
            >
              <RightContent />
            </div>
          </div>
        </div>
      </section>
      <MobileDevelopment />
      <PortfolioSectionLight />
    </>
  );
}
