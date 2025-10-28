import FAQ from "./faq";
import Image from 'next/image'

import { RiPoliceBadgeFill } from 'react-icons/ri';
import { HiBadgeCheck } from 'react-icons/hi';
import { HiAcademicCap } from 'react-icons/hi2';

export default function WebDevelopment() {
  return (
    <div className="box-border overflow-x-hidden">
			<Hero/>
			<Learn/>
			<Skills/>
			<Details/>
			<FAQ/>
			<hr className="text-gray-300"/>
			<Footer/>
		</div>
  );
}

function Hero() {
	return (
		<div className="py-5 px-5 box-border flex flex-col gap-1 relative h-100 md:h-80 md:px-10">
			<Image
				src="/images/web-development.jpg"
				alt="background"
				fill={true}
				sizes="100vw"
				style={{ objectFit: 'cover' }}
				className="brightness-80"
			/>
			<h1 className="text-white text-[40px] font-bold w-[100%] mb-auto z-5 md:w-180 md:text-[45px]">Web Development Specialization</h1>
			<h3 className="text-white text-sm md:text-md z-5">Learn skills that will enable you to protect Digital assets.</h3>
			<div className="z-5">
				<h2 className="text-white md:text-lg max-w-110">Specialize in Cyber security and become a <span className="text-brand">Cyber security</span> professional in 6 Months.</h2>
			</div>
		</div>
	)
}

function Learn() {
	return(
		<div className="flex flex-col py-5 gap-5 box-border bg-bg-secondary">
			<div>
				<h1 className="text-brand text-3xl px-5 md:px-16 font-bold">What you'll learn</h1>
			</div>
			<div className="flex flex-wrap gap-6 px-5 py-3 justify-evenly w-[100vw]">
				<LearnCard/>
				<LearnCard/>
				<LearnCard/>
			</div>
		</div>
	)
}

function Skills() {
	return(
		<div className="flex flex-col py-10 gap-5 box-border bg-background">
			<div>
				<h1 className="text-brand text-3xl px-5 md:px-16 font-bold md:text-center">Skills you'll learn</h1>
			</div>
			<ul className="flex flex-wrap gap-6 px-3 justify-center w-[100vw]">
				<li className="flex items-center border border-gray-200 rounded-lg gap-2 py-0.5 px-2"><HiBadgeCheck /><h3>Python</h3></li>
				<li className="flex items-center border border-gray-200 rounded-lg gap-2 py-0.5 px-2"><HiBadgeCheck /><h3>JavaScript</h3></li>
				<li className="flex items-center border border-gray-200 rounded-lg gap-2 py-0.5 px-2"><HiBadgeCheck /><h3>Problem Solving</h3></li>
				<li className="flex items-center border border-gray-200 rounded-lg gap-2 py-0.5 px-2"><HiBadgeCheck /><h3>Ethical Hacking</h3></li>
			</ul>
		</div>
	)
}

function Details() {
	return(
		<div className="flex flex-col py-10 gap-5 box-border bg-bg-secondary">
			<div>
				<h1 className="text-brand text-3xl px-5 md:px-16 font-bold">Details to know</h1>
			</div>
			<div className="flex flex-wrap gap-6 px-3 justify-evenly w-[100vw]">
				<DetailCard/>
				<DetailCard/>
				<DetailCard/>
			</div>
		</div>
	)
}

function Footer() {
	
	return(
		<div className="text-center py-4 px-6 box-border bg-bg-secondary">
			<p>Copyright @ Digitanotion Limited 2025.</p>
		</div>
	)
}

function LearnCard() {
	return(
		<div className="flex border border-gray-300 rounded-xl p-5 w-[100%] max-w-100 bg-background">
			<div>
				<p>You'll learn how to secure digital assets for organizations using professional Cyber security tools.</p>
			</div>
			<div className="m-auto">
				<RiPoliceBadgeFill className="text-[60px]" />
			</div>
		</div>
	)
}

function DetailCard() {
	return(
		<div className="flex flex-col border border-gray-300 rounded-xl p-5 w-100 bg-background">
			<div className="flex items-center gap-2">
				<HiAcademicCap /><h3 className="text-lg font-bold text-brand">Get Certified</h3>
			</div>
			<div>
				<p>You'll receive an authentic and verifiable certificate from Digitanotion Limited at the end of your enrollment in this program.</p>
			</div>
		</div>
	)
}

function Button({text, extraStyles}) {
	return(
		<button className={"py-1 px-15 border border-gray-300 bg-[rgba(255,255,255,0.3)] rounded-lg " + extraStyles}>
			{text}
		</button>
	)
}