
import Testimonials from './testimonials'
import Link from 'next/link'
import Image from 'next/image'
import CourseCard from './course-card'

import { FaBusinessTime } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let courses = [
	{ 
		url: "academy/cyber-security",
		location: "Onsite",
		image: "/images/cyber-security.png",
		date: "1st Nov, 2025",
		title: "Cyber Security",
		text: "Cyber Security is the act of protecting IT systems, analyzing threats, finding vulnerabilities and developing security protocols.",
		interests: "Securing IT systems, Fighting hackers, protecting networks and data from cyber threats.",
		bonus1: "Professional Certificates",
		bonus2: "Hands-on Experience",
		bonus3: "Mentorship",
		duration: "3 Months",
		price: "360,000"
	},
	{ 
		url: "academy/web-development",
		location: "Onsite",
		image: "/images/web-development.png",
		date: "1st Nov, 2025",
		title: "Web Development",
		text: "Web Development is the act of protecting IT systems, analyzing threats, finding vulnerabilities and developing security protocols.",
		interests: "Building scalable systems, Creating new things, Thinking critically to solve problems.",
		bonus1: "Professional Certificates",
		bonus2: "Hands-on Experience",
		bonus3: "Mentorship",
		duration: "3 Months",
		price: "120,000"
	},
	{ 
		url: "academy/computing-essentials",
		location: "Onsite",
		image: "/images/computing-essentials.png",
		date: "1st Nov, 2025",
		title: "Computing Essentials",
		text: "Computing Essentials is the act of protecting IT systems, analyzing threats, finding vulnerabilities and developing security protocols.",
		interests: "Using computer to perform tasks, Curious about what you can do with a computer, new into computing.",
		bonus1: "Professional Certificates",
		bonus2: "Hands-on Experience",
		bonus3: "Mentorship",
		duration: "3 Months",
		price: "60,000"
	}
]


export default function AcademyPage() {
  return (
    <div className="box-border overflow-x-hidden">
			<Hero/>
			<Courses/>
			<Testimonials/>
		</div>
  );
}


function Hero() {
	return (
		<div className="box-border flex flex-col gap-1 relative bg-background overflow-hidden">
			<Image
				src="/images/hero-bg.jpg"
				alt="Background Image"
				fill={true}
				sizes="2000px"
				priority
				style={{ objectFit: 'cover' }}
			/>
			<div className="absolute h-full w-full bg-transparent-bg"></div>
			<h1 className="mt-10 mx-5 md:mx-10 text-foreground text-[40px] font-bold mb-4 z-5 md:w-180 md:text-[45px]">Looking for where to gain essential Tech skills to advance your career?</h1>
			<h3 className="mx-5 md:mx-10 text-brand-text md:text-lg z-5">Look no further because <span className="font-bold">Digitanotion</span> got you covered.</h3>
			<div className="mb-10 mx-5 md:mx-10 z-5">
				<h2 className="text-brand-text md:text-lg">We offer all the courses you need to have a successful career in tech.</h2>
				<h2 className="text-brand-text md:text-lg">Register a course to get started.</h2>
			</div>
		</div>
	)
}

function Courses() {
	
	return(
		<div className="flex flex-col gap-4 py-10 px-5 md:px-10 box-border bg-bg-secondary py-10" id="courses-section">
			<div>
				<h1 className="text-brand text-3xl font-bold">Register Courses</h1>
			</div>
			<div className="flex flex-wrap gap-6 justify-between px-4 gap-y-10 mt-5 w-full">
				{
					courses.map(( course, index ) => (
						<Link key={index} href={course.url} className="w-full sm:w-[47%] lg:w-[30%]">
							<CourseCard course={course}/>
						</Link>
					))
				}
			</div>
		</div>
	)
}
