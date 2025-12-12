import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function UpcomingEvents() {
  const events = [
    {
      title: "Convene: Lagos 2025",
      date: "APR 22, 2025 • 2 MONTHS FROM NOW",
      description:
        "A cybersecurity event bringing together experts and innovators across Africa.",
      image: "/images/cyberillus2.jpg",
    },
    {
      title: "Cyber Awareness Bootcamp – Nairobi",
      date: "JUL 5, 2025 • 5 MONTHS FROM NOW",
      description:
        "A 2‑day intensive bootcamp to train students on core cybersecurity skills.",
      image: "/images/cyberillus2.jpg",
    },
  ];

  return (
    <section className="w-full py-16 flex flex-col gap-10">
      <h2 className="text-4xl font-bold text-primary">Upcoming Events</h2>
      <p className="text-gray-600 max-w-2xl">
        Join us throughout the year for cybersecurity workshops, awareness
        programs, and community‑driven events across Africa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((ev, idx) => (
          <Card
            key={idx}
            className="rounded-3xl overflow-hidden shadow-lg p-0 hover:shadow-xl transition"
          >
            <img
              src={ev.image}
              className="w-full h-48 object-cover"
              alt={ev.title}
            />
            <div className="p-6 flex flex-col gap-3">
              <p className="text-xs tracking-widest text-gray-500">{ev.date}</p>
              <h3 className="text-2xl font-semibold">{ev.title}</h3>
              <p className="text-gray-600">{ev.description}</p>
              <div className="flex gap-4 mt-4">
                <div className="rounded-xl px-6 py-2 shadow-lg hover:shadow-xl transition bg-primary cursor-pointer">
                  Learn More
                </div>
                <div className="rounded-full px-6">Register</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
