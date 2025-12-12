import { AlumniGrid } from "./grid";
import { AlumniHero } from "./hero";

export default function Alumni() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <AlumniHero />
      <AlumniGrid />
    </main>
  );
}
