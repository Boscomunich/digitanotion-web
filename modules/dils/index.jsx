import { CyberAIExpo } from "./cyber-expo-ai";
import { FeaturesShowcase } from "./features";
import { Hero } from "./hero";
import { HowItWorks } from "./how";
import { PricingPlans } from "./pricing";
import { ProgramOverview } from "./program";

export default function DILS() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Hero />
      <ProgramOverview />
      <PricingPlans />
      <FeaturesShowcase />
      <HowItWorks />
      <CyberAIExpo />
    </main>
  );
}
