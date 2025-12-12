import { GradientButton } from "../component/gradient-button";

export function Hero() {
  return (
    <section
      className="relative rounded-bl-[100px] rounded-br-[100px] h-[90vh] w-[98%] mx-auto overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/tech6project1.jpg)", // You might want a cybersecurity-themed image
      }}
    >
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />

      <div className="w-full lg:w-[60%] flex flex-col px-8 lg:px-24 lg:py-32 py-16 gap-6 relative z-10">
        <div className="flex flex-col items-start leading-none mb-4">
          <h1 className="lg:text-7xl text-4xl font-bold text-white tracking-tight">
            CYSAP<span className="text-white">.</span>
          </h1>
          <p className="text-xl font-medium text-white/90 tracking-widest mt-2">
            Africa
          </p>
        </div>

        <h2 className="text-xl font-medium text-white">
          A non-profit initiative dedicated to fostering a safer and more
          cyber-resilient digital environment across Africa.
        </h2>

        <ul className="space-y-3 text-white text-lg font-medium mt-4">
          <li className="pl-8 bg-[url('/icons/check-circle.svg')] bg-no-repeat bg-left bg-[length:24px]">
            Advance cybersecurity awareness
          </li>
          <li className="pl-8 bg-[url('/icons/check-circle.svg')] bg-no-repeat bg-left bg-[length:24px]">
            Broaden the cybersecurity talent pipeline
          </li>
          <li className="pl-8 bg-[url('/icons/check-circle.svg')] bg-no-repeat bg-left bg-[length:24px]">
            Drive economic growth through strategic collaborations
          </li>
        </ul>
      </div>

      {/* Optional: Stats overlay in bottom right */}
      <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 hidden lg:block">
        <div className="text-white text-center">
          <p className="text-2xl font-bold">Securing Africa's</p>
          <p className="text-lg">Digital Future</p>
        </div>
      </div>
    </section>
  );
}
