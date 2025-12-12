import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RecentActivities() {
  const activities = [
    {
      title: "Bishop Crowther College Awareness Workshop – Awka",
      description:
        "We introduced their junior and senior students to the basics of cyber hygiene — strong passwords, safe browsing, and identifying online threats.The students were highly curious and eager to understand how to protect themselves online.",
      image: "/images/cyberillus.jpg",
    },
    {
      title: "Blossom Fount College Awareness Outreach – Awka",
      description:
        "Our session focused on real life examples of cyber risks and simple steps they can take to stay safe",
      image: "/images/cyberillus.jpg",
    },
    {
      title: "Gran Hermano College Security Clinic – Awka",
      description:
        "We trained them on responsible digital behaviour and how to identify suspicious online activities.",
      image: "/images/cyberillus.jpg",
    },
  ];

  return (
    <section className="w-full py-12 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold tracking-tight text-primary">
          Latest Activities
        </h2>
        <p className="text-base text-gray-600 max-w-2xl">
          During Cybersecurity Awareness month, our team visited multiple
          schools to educate students on digital safety, responsible online
          behaviour, and practical cyber hygiene.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((item, idx) => (
          <Card
            key={idx}
            className="border-none overflow-hidden shadow-none transition bg-transparent"
          >
            <CardContent className="p-0">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="py-5 lex flex-col gap-3 items-start">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
