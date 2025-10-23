import FAQ from "./faq";
import Image from 'next/image'

export default function CyberSecurity() {
  return (
    <div className="box-border">
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
		<div className="py-5 px-5 box-border flex flex-col gap-1 relative h-180 md:h-120 md:px-10">
			<Image
				src="/images/cyber-security.jpg"
				alt="background"
				fill={true}
				sizes="100vw"
				style={{ objectFit: 'cover', zIndex: -1}}
				className="brightness-80"
			/>
			<h1 className="text-white text-[40px] font-bold w-[100%] mb-auto md:w-180 md:text-[45px]">Cyber Security Specialization</h1>
			<h3 className="text-white text-sm md:text-md">Learn skills that will enable you to protect Digital assets.</h3>
			<div>
				<h2 className="text-white md:text-lg max-w-110">Specialize in Cyber security and become a <span className="text-brand">Cyber security</span> professional in 6 Months.</h2>
			</div>
			<Button text="Enroll Now" extraStyles="text-brand w-fill text-center md:w-80 mt-3 transition-transform hover:scale-105 hover:shadow-lg"/>
		</div>
	)
}

function Learn() {
	return(
		<div className="flex flex-col py-5 gap-5 box-border bg-gray-100">
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
		<div className="flex flex-col py-10 gap-5 box-border bg-white">
			<div>
				<h1 className="text-brand text-3xl px-5 md:px-16 font-bold md:text-center">Skills you'll learn</h1>
			</div>
			<ul className="flex flex-wrap gap-6 px-3 justify-center w-[100vw]">
				<li className="flex items-center border border-gray-200 rounded-lg gap-2 py-0.5 px-2"><img src="/icons/dot.svg" alt="icon"/><h3>Python</h3></li>
				<li className="flex items-center border border-gray-200 rounded-lg gap-2 py-0.5 px-2"><img src="/icons/dot.svg" alt="icon"/><h3>JavaScript</h3></li>
				<li className="flex items-center border border-gray-200 rounded-lg gap-2 py-0.5 px-2"><img src="/icons/dot.svg" alt="icon"/><h3>Problem Solving</h3></li>
				<li className="flex items-center border border-gray-200 rounded-lg gap-2 py-0.5 px-2"><img src="/icons/dot.svg" alt="icon"/><h3>Ethical Hacking</h3></li>
			</ul>
		</div>
	)
}

function Details() {
	return(
		<div className="flex flex-col py-10 gap-5 box-border bg-gray-100">
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
		<div className="text-center py-4 px-6 box-border">
			<p>Copyright @ Digitanotion Limited 2025.</p>
		</div>
	)
}

function LearnCard() {
	return(
		<div className="flex border border-gray-300 rounded-xl p-5 w-[100%] max-w-100 bg-white">
			<div>
				<p>You'll learn how to secure digital assets for organizations using professional Cyber security tools.</p>
			</div>
			<div>
				<img className="w-30 h-[100%]" src="/icons/cysec-shield.svg" alt="ichhon"/>
			</div>
		</div>
	)
}

function DetailCard() {
	return(
		<div className="flex flex-col border border-gray-300 rounded-xl p-5 w-100 bg-white">
			<div className="flex items-center gap-2">
				<Image src="/icons/getCertified.svg" width="20" height="20" alt="icon"/><h3 className="text-lg font-bold text-brand">Get Certified</h3>
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