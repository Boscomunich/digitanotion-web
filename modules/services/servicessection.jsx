// ServicesSection.jsx
import React from "react";
import { WHATSAPP_BASE } from "../services/servicesdata";
// Use external Cloudinary image as fallback instead of local asset
const fallbackImage =
  "https://res.cloudinary.com/dnitzkowt/image/upload/v1761558908/uk-black-tech-dfmsZyFVi_I-unsplash_xpzgvr.jpg";
import ProgressiveImage from "./ProgressiveImage";
import Link from "next/link";

const ACTIVE_COLOR = "#fb8507";

export default function ServicesSection({
  service,
  backgroundUrl = "https://res.cloudinary.com/dnitzkowt/image/upload/v1760018613/ChatGPT_Image_Oct_9_2025_09_49_14_AM_mibsao.png",
}) {
  const waText = encodeURIComponent(service?.waMessage ?? "");
  const waHref = `${WHATSAPP_BASE}?text=${waText}`;

  return (
    <section className="w-full">
      {/* Mobile-first background container */}
      <div
        className="w-full min-h-[520px] bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Glass card */}
          <div className="rounded-2xl border border-white/30 bg-white/25 backdrop-blur-md shadow-xl p-4 sm:p-8 flex flex-col sm:flex-row items-center gap-8 lg:gap-10">
            {/* Image column */}
            {/* Always render an image placeholder for the card; fall back to shared placeholders */}
            <div className="w-full sm:w-1/2 lg:w-3/5 flex-shrink-0">
              <ProgressiveImage
                desktopSrc={service?.imageDesktop ?? fallbackImage}
                mobileSrc={
                  service?.imageMobile ?? service?.imageDesktop ?? fallbackImage
                }
                alt={`Illustration for ${service?.name ?? "service"}`}
                width={1000}
                height={800}
                sizes="(min-width:1024px) 60vw, 100vw"
                className="w-full max-w-[1000px] h-auto object-cover rounded-lg shadow-md mx-auto sm:mx-0"
              />
            </div>

            {/* Text column */}
            <div className="flex-1 lg:pl-8 xl:pl-12">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-3 sm:mb-4">
                {service?.headline}
              </h1>
              <p className="text-neutral-900/90 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                {service?.blurb}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-white font-medium shadow hover:shadow-md transition"
                  style={{ backgroundColor: ACTIVE_COLOR }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
