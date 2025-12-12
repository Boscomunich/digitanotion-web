import { Hero } from "./hero";
import { InitiativesGrid } from "./initiative";
import RecentActivities from "./latest";
import { UpcomingEvents } from "./upcomming";

export default function CysapAfrica() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-[1500px] mx-auto lg:px-16 px-4">
        <RecentActivities />
        <UpcomingEvents />
        <InitiativesGrid />
      </div>
    </div>
  );
}
