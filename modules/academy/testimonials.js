'use client'

import { useState } from 'react';

const testimonials = [
	{
		name: "David Villa",
		position: "Cyber Security Student",
		image: null,
		text: "They offer exceptional tech services. Great training program too. The tech6project really opened my eyes to the available tech opportunities.",
	},
	{
		name: "Michael",
		position: "Web Development Student",
		image: null,
		text: "Great training program, they simplify everything to be easily understandable.",
	},
	{
		name: "Thiago Silva",
		position: "Web Development Student",
		image: null,
		text: "They are the best in teaching. I landed my first gig in just 1 month after finishing their course.",
	},
	{
		name: "Chibuike Okeke",
		position: "Computer Essentials Student",
		image: null,
		text: "They broke everything down and make it easy to understand. Training at digitanotion was a great experience for me.",
	},
	{
		name: "Daniel Nwankwo",
		position: "Cyber Security Student",
		image: null,
		text: "I have created so many tools using the knowledge and skills I got from their training. I highly recommend them.",
	}
]

export default function Testimonials() {
	
	const [activeTestimonial, setActiveTestimonial] = useState(2);
	
	const testimonialPosition = () => {
		if (activeTestimonial == 0) {
			return ("translate-x-[200px] md:translate-x-[375px]")
		}
		else if (activeTestimonial == 1) {
			return ("translate-x-[100px] md:translate-x-[187px]")
		}
		else if (activeTestimonial == 2) {
			return ("translate-x-[0px]")
		}
		else if (activeTestimonial == 3) {
			return ("-translate-x-[100px] md:-translate-x-[187px]")
		}
		else if (activeTestimonial == 4) {
			return ("-translate-x-[200px] md:-translate-x-[375px]")
		}
	}
	
	return(
		<div className="flex flex-col py-10 box-border overflow-hidden">
			<div>
				<h1 className="text-brand text-3xl px-5 text-center font-bold">What Our Students Say About Us</h1>
			</div>
			<div className={"flex items-center justify-center relative transition-all duration-700 " + testimonialPosition()}>
				{
					testimonials.map((testimonial, index) => (
						<TestimonialItem key={index} name={testimonial.name} position={testimonial.position} image={testimonial.image} text={testimonial.text} id={index} activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />
					))
				}
			</div>
			<div className="flex gap-2 justify-center">
				{
					testimonials.map((testimonial, index) => (
						<img key={index} src={(activeTestimonial == index) ? "/icons/active.svg" : "/icons/unactive.svg" } alt="icon" onClick={() => setActiveTestimonial(index)}/>
					))
				}
			</div>
		</div>
	)
}

function TestimonialItem(props) {
	
	const { id } = props;
	
	let isActive;
	
	(id == props.activeTestimonial) ? isActive = true : isActive = false;
	
	return(
		<div className="flex flex-col py-5 md:py-10 px-5 md:px-16 gap-4 w-max box-border">
			<div className={(isActive ? "" : "hidden ") + "p-3 md:p-6 w-76 md:w-120 bg-gray-100 rounded-3xl md:rounded-[30px] animation-[hideChatBubble 5s infinite]" }>
				<p>{props.text}</p>
			</div>
			<div className={(isActive ? "pl-0 " : "") + "flex gap-3 items-center"}>
				<div className={(isActive ? "border border-brand" : "transition-transform hover:scale-120 hover:shadow-lg") + " size-15 bg-gray-100 rounded-[50%]"} onClick={() => {props.setActiveTestimonial(id)}}></div>
				<div className={(isActive ? "" : "hidden " )}>
					<p className="font-bold">{props.name}</p>
					<p className={"text-gray-700"}>{props.position}</p>
				</div>
			</div>
		</div>
	)
}