import Hero from "./hero";
import CyberSecurityServices from "./services";

export default function CyberSecurity() {
  return (
    <section className="min-h-screen">
      <div className="bg-primary/10">
        <div className="mx-auto px-4 lg:px-8 min-h-[90vh] flex flex-col justify-center max-w-[1500px]">
          <Hero />
        </div>
      </div>
      <CyberSecurityServices />
    </section>
  );
}
