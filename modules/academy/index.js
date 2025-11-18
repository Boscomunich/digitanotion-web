
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
		image: "/images/cyber-security.jpg",
		date: "1st Nov, 2025",
		title: "Cyber Security",
		bonus1: "Professional Certificates",
		bonus2: "Hands-on Experience",
		bonus3: "Mentorship",
		duration: "3 Months",
		price: "360,000"
	},
	{ 
		url: "academy/web-development",
		location: "Onsite",
		image: "/images/web-development.jpg",
		date: "1st Nov, 2025",
		title: "Web Development",
		bonus1: "Professional Certificates",
		bonus2: "Hands-on Experience",
		bonus3: "Mentorship",
		duration: "3 Months",
		price: "120,000"
	},
	{ 
		url: "academy/computing-essentials",
		location: "Onsite",
		image: "/images/computing-essentials.jpg",
		date: "1st Nov, 2025",
		title: "Computing Essentials",
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
		<div className="box-border flex flex-col gap-1 relative bg-transparent-bg ">
			<Image
				src="/images/hero-bg.jpg"
				alt="background"
				fill={true}
				sizes="100vw"
				priority
				style={{ objectFit: 'cover' }}
			/>
			<div className="bg-transparent-bg absolute h-full w-full"></div>
			<h1 className="mt-10 mx-5 md:mx-10 text-brand-text text-[40px] font-bold mb-4 z-5 md:w-180 md:text-[45px]">Looking for where to gain essential Tech skills to advance your career?</h1>
			<hr className="mx-5 md:mx-10 z-5 mb-15 text-brand-text"/>
			<h3 className="mx-5 md:mx-10 text-brand-text md:text-lg z-5">Look no further because <span className="text-brand text-bold">Digitanotion</span> got you covered.</h3>
			<div className="mb-10 mx-5 md:mx-10 z-5">
				<h2 className="text-brand-text md:text-lg">We offer all the courses you need to have a successful career in tech.</h2>
				<h2 className="text-brand-text md:text-lg">Register a course to get started.</h2>
			</div>
		</div>
	)
}

function Courses() {
	
	return(
		<div className="flex flex-col py-10 px-5 md:px-10 box-border bg-bg-secondary py-10" id="courses-section">
			<div>
				<h1 className="text-brand text-3xl font-bold">Register Courses</h1>
			</div>
			<hr className="mt-2 mb-10"/>
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
