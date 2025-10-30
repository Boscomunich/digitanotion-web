"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
	
	const settings = {
		dots: true,
		className: "center",
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    infinite: true,
		slidesToShow: 3,
    slidesToScroll: 1,
		initialSlide: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
		responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
			{
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
			{
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
					centerMode: false
        }
      },
    ],
  };

	return(
	<>
		<div className="flex flex-col py-10 box-border gap-5">
			<div>
				<h1 className="text-brand text-3xl px-5 text-center font-bold">What Our Students Say About Us</h1>
			</div>
			<div className="slider-container">
				<Slider {...settings}>
					{
						testimonials.map((testimonial, index) => (
							<div key={index} className={ "min-w-70 md:w-110 p-4 px-1 md:px-3 lg:px-5" }>
								<TestimonialItem testimonial={testimonial} />
							</div>
						))
					}
				</Slider>
			</div>
		</div>
		</>
	)
}

function TestimonialItem({ testimonial }) {
	
	return(
		<div className={"flex flex-col gap-4 box-border"}>
			<div className={"p-5 bg-bg-secondary rounded-3xl md:rounded-[30px]" }>
				<p>"{testimonial.text}"</p>
			</div>
			<div className={"flex gap-3 items-center"}>
				<div className={"size-15 bg-gray-100 rounded-[50%]"} ></div>
				<div>
					<p className="font-bold">{testimonial.name}</p>
					<p className={"text-fg-secondary"}>{testimonial.position}</p>
				</div>
			</div>
		</div>
	)
}