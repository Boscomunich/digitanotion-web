"use client"

import React, { useState, useEffect } from "react";

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
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col py-16 px-5 md:px-10 gap-8 bg-gray-50">
			<div className="text-center">
				<h1 className="text-orange-600 text-3xl md:text-4xl font-bold mb-2">What Our Students Say About Us</h1>
				<p className="text-gray-600">Real experiences from our successful graduates</p>
			</div>
			
			<div className="max-w-4xl mx-auto w-full">
				<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center min-h-[300px] flex flex-col justify-center relative overflow-hidden">
					<div 
						className="transition-all duration-1000 ease-in-out transform"
						key={currentIndex}
						style={{
							animation: 'fadeInSlide 1s ease-in-out'
						}}
					>
						<div className="mb-6">
							<svg className="w-12 h-12 text-orange-500 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
								<path d="M14,17h3l2-4V7h-6v6h3M6,17h3l2-4V7H5v6h3L6,17z"/>
							</svg>
							<p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
								"{testimonials[currentIndex].text}"
							</p>
						</div>
						
						<div className="border-t pt-6">
							<h3 className="text-xl font-bold text-gray-900 mb-1">
								{testimonials[currentIndex].name}
							</h3>
							<p className="text-orange-600 font-medium">
								{testimonials[currentIndex].position}
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center mt-6">
					<div className="flex gap-1">
						{testimonials.map((_, index) => (
							<div
								key={index}
								className={`h-1 w-8 rounded-full transition-all duration-500 ${
									index === currentIndex 
										? 'bg-orange-600' 
										: 'bg-gray-300'
								}`}
							/>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes fadeInSlide {
					0% {
						opacity: 0;
						transform: translateY(20px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</div>
	);
}

