import Image from "next/image";
import Link from "next/link";
import { GradientButton } from "../component/gradient-button";

const schools = [
  {
    name: "Bishop Crowther College",
    text: "Bishop Crowther College is a growing secondary school known for its strong academic culture.We introduced their junior and senior students to the basics of cyber hygiene — strong passwords, safe browsing, and identifying online threats.The students were highly curious and eager to understand how to protect themselves online.",
    img: "/images/school.png",
  },
  {
    name: "Blossom Fount College",
    text: "Blossom Fount College is a diverse learning community with students actively involved in digital activities.Our session focused on real life examples of cyber risks and simple steps they can take to stay safe Their excitement and participation made the session deeply engaging.",
    img: "/images/school.png",
  },
  {
    name: "Gran Hermano College",
    text: "Gran Hermano College is  a tech friendly school with students who are already active online.We trained them on responsible digital behaviour and how to identify suspicious online activities.Their enthusiasm showed how ready they are to embrace a safer digital future.",
    img: "/images/school.png",
  },
];

export default function Cysap() {
  return (
    <section className="min-h-screen px-4 lg:px-16 py-24">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto gap-16 max-w-7xl">
        <div className="w-full h-full  flex flex-col justify-between items-left gap-4">
          <div className="w-full flex flex-col justify-between items-left gap-4">
            <div className="flex flex-col items-start leading-none">
              <h1 className="text-[64px] font-bold text-[#1E56F1] tracking-tight">
                CYSAP<span className="text-[#1E56F1]">.</span>
              </h1>
              <p className="text-base tracking-[0.4em] text-black mx-4">
                Africa
              </p>
            </div>
            <div className="lg:text-justify text-base lg:text-xl leading-relaxed">
              CySAP Africa is a non-profit initiative of Digitanotion LTD
              dedicated to fostering a safer and more cyber-resilient digital
              environment across Africa. This project aims to:
              <ul className="mt-3 space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#1E56F1] mr-3 flex-shrink-0"></span>
                  Advance cybersecurity awareness
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#1E56F1] mr-3 flex-shrink-0"></span>
                  Broaden the talent pipeline
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#1E56F1] mr-3 flex-shrink-0"></span>
                  Drive economic growth through collaborations
                </li>
              </ul>
            </div>
          </div>
          <GradientButton>
            <Link
              className="inline-flex items-center gap-2"
              aria-label={`Learn more about cysap africa`}
              href="/cysapafrica"
            >
              Learn More
              <span>→</span>
            </Link>
          </GradientButton>
        </div>
        <div className="w-full h-full flex flex-col items-start">
          <Image
            src="/images/tech6project1.jpg"
            alt="cysap"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 mt-12 max-w-7xl mx-auto">
        {schools.map((school, index) => (
          <div
            className="p-8 bg-primary/10 w-full max-w-[400px] flex flex-col gap-4 "
            key={index}
          >
            <Image
              src={school.img}
              alt={school.name}
              width={600}
              height={300}
              priority
            />
            <div>
              <h1 className="text-[#1E56F1] text-2xl">{school.name}</h1>
              <div className="text-justify text-sm">{school.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
