import { RotatingCard } from "./rotating-card";

export function InitiativesGrid() {
  const initiatives = [
    {
      image: "/images/cyberillus2.jpg",
      text: "Cybersecurity Awareness Month initiatives across Africa.",
    },
    {
      image: "/images/cyberillus2.jpg",
      text: "Our seasonal cybersecurity conferences and summits.",
    },
    {
      image: "/images/cyberillus2.jpg",
      text: "Programs helping students join Africa's cyber workforce.",
    },
    {
      image: "/images/cyberillus2.jpg",
      text: "Helping small businesses secure their digital ecosystems.",
    },
  ];

  return (
    <section className="w-full py-16 flex flex-col gap-10">
      <h2 className="text-4xl font-bold text-primary">Our Initiatives</h2>
      <p className="text-gray-600 max-w-2xl">
        Discover the core programs driving cybersecurity awareness, education,
        and innovation across Africa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {initiatives.map((init, idx) => (
          <RotatingCard key={idx} image={init.image} text={init.text} />
        ))}
      </div>
    </section>
  );
}
