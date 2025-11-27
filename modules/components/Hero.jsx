import React from "react";

const heroImage =
  "https://res.cloudinary.com/dnitzkowt/image/upload/v1761558908/uk-black-tech-dfmsZyFVi_I-unsplash_xpzgvr.jpg";

function Hero() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white poppins-semibold ">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-32 h-72 w-72 rounded-full bg-gradient-to-r from-orange-500 to-red-600 opacity-20 blur-3xl"
        ></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-red-500 to-orange-400 opacity-20 blur-3xl"
        ></div>

        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-4 lg:px-8 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-2 min-h-[60vh] lg:min-h-[70vh] items-center place-items-center">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
                Secure. Scalable. Beautiful. <br className="hidden md:block" />
                <span className="text-orange-600">
                  Digital products built end-to-end.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg ">
                Digitanotion Limited is your go-to partner for{" "}
                <span className="font-semibold text-neutral-900">
                  cybersecurity
                </span>
                ,
                <span className="font-semibold text-neutral-900">
                  software development
                </span>
                , and
                <span className="font-semibold text-neutral-900">
                  {" "}
                  digital skills training
                </span>
                . We turn cutting-edge ideas into secure, practical solutions
                for real businesses. Whether we're building mobile apps and
                websites or fortifying cyber defenses, our services are tailored
                to your needs. Our training programs nurture the next generation
                of tech talent with simplicity and timely results.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/2348080035596?text=Hello%20my%20name%20is%20......%20I%20want%20to%20ask%20a%20few%20questions%20about%20the%20services%20you%20offer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-xl glass px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  Start a Project on WhatsApp
                  <svg
                    className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
                  🔐 Cybersecurity
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
                  💻 Software Development
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
                  🎓 Training & Internships
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center w-full">
              <div
                className="relative w-full max-w-4xl h-96 lg:h-[520px] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(${heroImage?.src ?? heroImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="pointer-events-none absolute -left-6 -top-6 select-none">
                  <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-orange-500/30">
                    Cyber Excellence
                  </span>
                </div>
                <div className="pointer-events-none absolute -right-4 -bottom-5 select-none">
                  <span className="inline-flex items-center rounded-lg border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                    Secured Products
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 mt-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-neutral-900">
              Power
            </div>
            <div className="mt-1 text-sm text-neutral-600">
              Up to 99.9% API Uptime on Render
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-neutral-900">
              Product
            </div>
            <div className="mt-1 text-sm text-neutral-600">
              Product-first UIs built for real-world impact
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-neutral-900">
              Performance
            </div>
            <div className="mt-1 text-sm text-neutral-600">
              Lighthouse-friendly builds
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
