import Image from "next/image";
import PortfolioSection from "./project";
import { GradientButton } from "../component/gradient-button";
import Link from "next/link";

export default function WebDesign() {
  return (
    <div className="min-h-screen">
      <div className="rounded-[100%_0%_100%_0%/0%_23%_77%_100%] bg-primary/80 w-full h-auto flex flex-col lg:flex-row gap-16 lg:justify-evenly px-8 lg:px-24 lg:py-32 py-16">
        <div className="w-full lg:w-[45%]">
          <Image
            src="/images/tech6project1.jpg"
            alt="web-design"
            width={700}
            height={700}
          />
        </div>
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          <h1 className="lg:text-7xl text-4xl font-bold text-white tracking-tight mb-8">
            Premium Digital Product Design Agency
          </h1>
          <h2 className="text-xl font-medium text-[#1E56F1]">
            Partner with our award-winning digital product design team to create
            intuitive, user-centered experiences that drive engagement,
            retention, and business growth.
          </h2>
          <ul className="space-y-2 text-[#1E56F1] text-xl font-medium">
            <li className="pl-6 bg-[url('/icons/arrow.svg')] bg-no-repeat bg-left bg-[length:32px]">
              User-Centered Product Strategy
            </li>
            <li className="pl-6 bg-[url('/icons/arrow.svg')] bg-no-repeat bg-left bg-[length:32px]">
              Interactive Prototyping & Testing
            </li>
            <li className="pl-6 bg-[url('/icons/arrow.svg')] bg-no-repeat bg-left bg-[length:32px]">
              Scalable Design Systems
            </li>
          </ul>
          <Link href="/services/software-development/request-quote">
            <GradientButton>Request Service</GradientButton>
          </Link>
        </div>
      </div>
      <PortfolioSection />
    </div>
  );
}
