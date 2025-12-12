import Careers from "@/modules/home/career";
import HomeHero from "../modules/home/homehero";
import ServicesSection from "@/modules/home/services";
import Cysap from "@/modules/home/cysap";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <ServicesSection />
      <Careers />
      <Cysap />
    </div>
  );
}
