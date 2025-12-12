import Testimonials from "./testimonials";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "./course-card";
import { CertificateValidationSection } from "./validate-certificate";

let courses = [
  {
    url: "academy/cyber-security",
    location: "Onsite",
    image: "/images/cyber-security.png",
    date: "1st Nov, 2025",
    title: "Cyber Security",
    text: "Cyber Security is the act of protecting IT systems, analyzing threats, finding vulnerabilities and developing security protocols.",
    interests:
      "Securing IT systems, Fighting hackers, protecting networks and data from cyber threats.",
    bonus1: "Professional Certificates",
    bonus2: "Hands-on Experience",
    bonus3: "Mentorship",
    duration: "3 Months",
    price: "360,000",
  },
  {
    url: "academy/web-development",
    location: "Onsite",
    image: "/images/web-development.png",
    date: "1st Nov, 2025",
    title: "Web Development",
    text: "Web Development is the act of protecting IT systems, analyzing threats, finding vulnerabilities and developing security protocols.",
    interests:
      "Building scalable systems, Creating new things, Thinking critically to solve problems.",
    bonus1: "Professional Certificates",
    bonus2: "Hands-on Experience",
    bonus3: "Mentorship",
    duration: "3 Months",
    price: "120,000",
  },
  {
    url: "academy/computing-essentials",
    location: "Onsite",
    image: "/images/computing-essentials.png",
    date: "1st Nov, 2025",
    title: "Computing Essentials",
    text: "Computing Essentials is the act of protecting IT systems, analyzing threats, finding vulnerabilities and developing security protocols.",
    interests:
      "Using computer to perform tasks, Curious about what you can do with a computer, new into computing.",
    bonus1: "Professional Certificates",
    bonus2: "Hands-on Experience",
    bonus3: "Mentorship",
    duration: "3 Months",
    price: "60,000",
  },
];

export default function AcademyPage() {
  return (
    <div className="box-border overflow-x-hidden">
      <Hero />
      <Courses />
      <CertificateValidationSection />
      <Testimonials />
    </div>
  );
}

function Hero() {
  return (
    <div className="box-border flex flex-col gap-1 relative bg-background overflow-hidden min-h-[500px] px-8 lg:px-32">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Background Image"
        fill={true}
        sizes="2000px"
        priority
        style={{ objectFit: "cover" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 pt-10 pb-10 max-w-4xl">
        <h1 className="text-white text-[40px] font-bold mb-4 md:text-[55px] md:leading-tight">
          Looking for where to gain essential Tech skills to advance your
          career?
        </h1>

        <h3 className="text-white/90 md:text-xl mb-6">
          Look no further because{" "}
          <span className="font-bold text-white">Digitanotion</span> got you
          covered.
        </h3>

        <div className="space-y-2 mb-8">
          <h2 className="text-white/90 md:text-xl">
            We offer all the courses you need to have a successful career in
            tech.
          </h2>
          <h2 className="text-white/90 md:text-xl">
            Register a course to get started.
          </h2>
        </div>

        {/* Optional CTA Button */}
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
          Explore Courses
        </button>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <div
      className="flex flex-col gap-4 md:px-10 box-border bg-bg-secondary py-10 px-8 lg:px-32"
      id="courses-section "
    >
      <div>
        <h1 className="text-brand text-3xl font-bold">Register Courses</h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-between px-4 gap-y-10 mt-5 w-full">
        {courses.map((course, index) => (
          <Link
            key={index}
            href={course.url}
            className="w-full sm:w-[47%] lg:w-[30%]"
          >
            <CourseCard course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
}
