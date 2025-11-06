import Testimonials from './testimonials'
import Link from 'next/link'
import Image from 'next/image'

import { FaLocationDot } from 'react-icons/fa6';
import { FaBusinessTime } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BiTimer } from 'react-icons/bi';

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
		<div className="py-5 px-5 box-border flex flex-col gap-1 relative h-100 md:h-80 md:px-10">
			<Image
				src="/images/hero-bg.jpg"
				alt="background"
				fill={true}
				sizes="100vw"
				preload="true"
				style={{ objectFit: 'cover' }}
				className="brightness-80"
			/>
			<h1 className="text-white text-3xl font-bold w-[100%] mb-auto z-5 md:w-180 md:text-[45px]">Looking for where to gain essential Tech skills to advance your career?</h1>
			<h3 className="text-white text-sm md:text-md z-5">Look no further because <span className="text-brand text-bold">Digitanotion</span> got you covered.</h3>
			<div className="z-5">
				<h2 className="text-white md:text-lg">We offer all the courses you need to have a successful career in tech.</h2>
				<h2 className="text-white md:text-lg">Register a course to get started.</h2>
			</div>
		</div>
	)
}

function Courses() {
	
	return(
		<div className="flex flex-col py-6 gap-8 box-border bg-bg-secondary pb-10" id="courses-section">
			<div>
				<h1 className="text-brand text-3xl px-5 md:px-10 font-bold">Register Courses</h1>
			</div>
			<div className="flex flex-wrap gap-x-6 px-4 gap-y-10 justify-evenly w-[100%]">
				{
					courses.map((course, index) => (
						<Link key={index} href={course.url}>
							<CourseCard course={course}/>
						</Link>
					))
				}
			</div>
		</div>
	)
}

function CourseCard(props) {

	const { url, location, image, date, title, bonus1, bonus2, bonus3, duration, price } = props.course;

	return(
		<div className="border border-gray-300 bg-background rounded-xl p-2 w-75 relative transition-transform hover:scale-105 hover:shadow-lg">
			<div className="flex gap-1 px-1 py-0.5 -top-4 -left-3.5 text-xs bg-background border border-gray-300 rounded-lg absolute">
				<FaLocationDot />
				<p>{location}</p>
			</div>
			<div>
				<div className="h-30 w-[100%] p-2 box-border text-xs rounded-lg overflow-hidden relative">
					<Image
						src={image}
						alt="background"
						fill={true}
						sizes="100vw"
						style={{ objectFit: 'cover', zIndex: 0 }}
						className="brightness-80"
					/>
					<div className="w-max flex items-center gap-1 px-0.5 text-xs border border-green-500 rounded-lg ml-auto absolute right-2">
						<BiTimer className="text-white text-lg" />
						<p className="text-xs text-white">Starts on {date}</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-1 px-2 py-1">
				<h2 className="text-xl font-bold">{title}</h2>
				<div>
					<ul className="text-xs">
						<li>+ {bonus1}</li>
						<li>+ {bonus2}</li>
						<li>+ {bonus3}</li>
					</ul>
				</div>
				<p className="text-xs">Duration: {duration}</p>
				<h3 className="font-bold">Price: #{price}</h3>
			</div>
		</div>
	)
}

function Button({text, extraStyles, location}) {
	return(
		<button href={location} className={"block text-center py-1 px-15 border border-gray-300 bg-[rgba(255,255,255,0.3)] rounded-lg " + extraStyles}>
			{text}
		</button>
	)
}