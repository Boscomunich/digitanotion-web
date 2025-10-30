import Testimonials from './testimonials'
import Link from 'next/link'
import Image from 'next/image'

//Import Icons form React icons/customerCare
import { FaLocationDot } from 'react-icons/fa6';
import { FaBusinessTime } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BiTimer } from 'react-icons/bi';

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
			<hr className="text-brand"/>
			<Testimonials/>
			<Contact/>
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
			<h3 className="text-white text-sm md:text-md z-5">Look no further because <span className="text-brand">Digitanotion</span> got you covered.</h3>
			<div className="z-5">
				<h2 className="text-white md:text-lg">We offer all the courses you need to have a successful career in tech.</h2>
				<h2 className="text-white md:text-lg">Register a course to get started.</h2>
			</div>
		</div>
	)
}

function Courses() {
	
	return(
		<div className="flex flex-col py-5 gap-10 box-border" id="courses-section">
			<div>
				<h1 className="text-brand text-3xl px-5 md:px-10 font-bold">Register Courses</h1>
			</div>
			<div className="flex flex-wrap gap-x-6 px-4 gap-y-10 justify-evenly w-[100%] bg-background">
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

function Contact() {
	
	return(
		<div className="flex flex-col py-5 px-5 md:px-10 gap-5 box-border bg-bg-secondary">
			<div>
				<h1 className="text-brand text-3xl font-bold">Reach Out</h1>
			</div>
			<div className="flex flex-wrap gap-x-auto gap-y-8 justify-between">
				<div className="min-w-70 max-w-160">
					<ul className="flex flex-col pl-2 md:pl-4 gap-4">
						<li className="flex gap-4 items-center"><FaLocationDot className="text-foreground text-lg" /><p>Suite 6, Mgbajiaka Area, Digitanotion Limited, Along Onisha - Enugu Expy, Opposite East-End Hotel, Awka.</p></li>
						<li className="flex gap-4 items-center"><FaBusinessTime className="text-foreground text-lg" /><p>Open from 9am to 4pm (WAT)</p></li>
						<li className="flex gap-4 items-center"><IoMdMail className="text-foreground text-lg" /><a href="mailto:hello@digitanotion.com.ng">hello@digitanotion.com.ng</a></li>
						<li className="flex gap-4 items-center"><FaPhoneAlt className="text-foreground text-lg" /><a href="call:+2348073735836">+234 807 373 5836</a></li>
						<li className="flex gap-4 items-center"><RiCustomerService2Fill className="text-foreground text-lg" /><p>Customer Care</p></li>
						<li><div className="flex gap-6">
							<Image src='/icons/facebook.svg' alt="icon" height="15" width="15" />
							<Image src='/icons/instagram.svg' alt="icon" height="15" width="15" />
							<Image src='/icons/x.svg' alt="icon" height="15" width="15" className="fill-foreground stroke-foreground" />
							<Image src='/icons/linkedIn.svg' alt="icon" height="15" width="15" />
						</div></li>
					</ul>
				</div>
				<div className="w-100">
					<form action="POST" className="flex flex-col gap-3 w-fill" >
						<input type="text" className="bg-background text-fg-secondary py-2 px-3 w-fill rounded-lg" placeholder="Enter your Name" required />
						<input type="email" className="bg-background text-fg-secondary py-2 px-3 w-fill rounded-lg" placeholder="Enter your E-mail address" required/>
						<textarea type="textbox" className="bg-background text-fg-secondary h-25 py-2 w-fill px-3 rounded-lg" placeholder="Enter your Message..." required></textarea>
						<button type="submit" className="bg-brand py-2 flex items-center justify-center w-fill uppercase text-background font-bold rounded-lg transition-transform hover:scale-102 hover:shadow-lg">Send</button>
					</form>
				</div>
			</div>
		</div>
	)
}

function CourseCard(props) {

	const { url, location, image, date, title, bonus1, bonus2, bonus3, duration, price } = props.course;

	return(
		<div className="border border-gray-300 bg-bg-secondary rounded-xl p-2 w-75 relative transition-transform hover:scale-105 hover:shadow-lg">
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