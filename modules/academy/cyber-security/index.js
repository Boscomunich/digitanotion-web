
import FAQ from "./faq";
import Image from 'next/image';
import Button from '../button'

import { RiPoliceBadgeFill } from 'react-icons/ri';
import { HiBadgeCheck } from 'react-icons/hi';
import { HiAcademicCap } from 'react-icons/hi2';

export default function CyberSecurity() {
  return (
    <div className="box-border overflow-x-hidden">
			<Hero/>
			<Learn/>
			<Skills/>
			<Details/>
			<FAQ/>
		</div>
  );
}

function Hero() {
	const registerText = encodeURIComponent(`
		I would like to express my interest in enrolling in the Cyber Security Course.
		
		My details are as follows:
		- Full Name: [Your Name]
		-	Email Address: [Your Email]
		-	Contact Number: [Your Phone Number]
		-	Additional Information (if any): [optional]
	`);
	return (
		<div className="box-border flex flex-col gap-1 relative">
			<Image
				src="/images/cyber-security.jpg"
				alt="background"
				fill={true}
				priority
				sizes="100vw"
				style={{ objectFit: 'cover' }}
			/>
			<div className="bg-transparent-bg absolute h-full w-full"></div>
			<h1 className="my-10 mx-5 md:mx-10 text-brand-text text-[40px] font-bold mb-4 z-5 md:w-180 md:text-[45px]">Cyber Security Specialization</h1>
			<hr className="mx-5 md:mx-10 z-5 mb-15 text-brand-text"/>
			<div className="my-10 mx-5 md:mx-10 z-5 flex flex-col md:flex-row gap-3 md:gap-6 md:justify-between md:items-center">
				<div className="w-full">
					<h3 className="text-brand-text md:text-lg">Learn skills that will enable you to protect Digital assets.</h3>
					<div>
						<h2 className="text-brand-text md:text-lg max-w-110">Specialize in Cyber security and become a <span className="text-brand">Cyber security</span> professional in 6 Months.</h2>
					</div>
				</div>
				<div>
					<a href={`mailto:hello@digitanotion.com.ng?subject=Registeration%20for%20Computing%20Essentials%20Course&body=${registerText}`} className='mt-4'>
						<Button text="Register on E-mail" extraStyles="bg-gray-800/70 w-full py-2 mb-3 md:w-80 text-white"/>
					</a>
					<a href={`https://wa.me/2348073735836?text=${registerText}`}>
						<Button text="Register on Whatsapp" extraStyles="bg-green-700/70 w-full mb-4 py-2 md:w-80 text-white"/>
					</a>
				</div>
			</div>
		</div>
	)
}

function Learn() {
	return(
		<div className="flex flex-col py-10 px-5 md:px-10 box-border bg-bg-secondary">
			<div>
				<h1 className="text-brand text-3xl font-bold">What you'll learn</h1>
			</div>
			<hr className="mt-2 mb-10"/>
			<div className="flex flex-wrap gap-6 justify-between w-full">
				<LearnCard/>
				<LearnCard/>
				<LearnCard/>
			</div>
		</div>
	)
}

function Skills() {
	return(
		<div className="flex flex-col px-5 md:px-10 py-10 box-border bg-background">
			<div>
				<h1 className="text-brand text-3xl font-bold md:text-center">Skills you'll learn</h1>
			</div>
			<hr className="mt-2 mb-10"/>
			<ul className="flex flex-wrap gap-4 md:gap-8 justify-center w-full">
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
		<div className="flex flex-col py-10 px-5 md:px-10 box-border bg-bg-secondary">
			<div>
				<h1 className="text-brand text-3xl font-bold">Details to know</h1>
			</div>
			<hr className="mt-2 mb-10"/>
			<div className="flex flex-wrap gap-6 justify-between w-full">
				<DetailCard/>
				<DetailCard/>
				<DetailCard/>
			</div>
		</div>
	)
}

function LearnCard() {
	return(
		<div className="flex gap-2 border border-gray-300 rounded-xl p-5 w-full sm:w-[47%] lg:w-[30%] bg-background">
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
		<div className="flex flex-col border border-gray-300 rounded-xl p-5 w-full sm:w-[47%] lg:w-[30%] bg-background">
			<div className="flex items-center gap-2">
				<HiAcademicCap /><h3 className="text-lg font-bold text-brand">Get Certified</h3>
			</div>
			<div>
				<p>You'll receive an authentic and verifiable certificate from Digitanotion Limited at the end of your enrollment in this program.</p>
			</div>
		</div>
	)
}