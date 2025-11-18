"use client"

import { motion } from "framer-motion";
import Image from 'next/image'

import { FaLocationDot } from 'react-icons/fa6';
import { BiTimer } from 'react-icons/bi';

export default function CourseCard(props) {

	const { url, location, image, date, title, bonus1, bonus2, bonus3, duration, price } = props.course;

	return(
		<motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}  className="border border-gray-300 bg-background rounded-xl p-2.5 w-full relative transition-transform hover:shadow-lg">
			<div className="flex gap-1 px-1 py-0.5 -top-4 -left-3.5 text-xs bg-background border border-gray-300 rounded-lg absolute">
				<FaLocationDot className="text-brand"/>
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
					<div className="w-max flex items-center gap-1 px-0.5 text-xs border border-green-500 rounded-lg ml-auto absolute right-2 bg-black/40">
						<BiTimer className="text-white text-lg" />
						<p className="text-xs text-white">Starts on {date}</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-1 px-2 py-1">
				<h2 className="text-xl font-bold">{title}</h2>
				<div>
					<ul className="flex flex-wrap text-xs w-full">
						<li className="min-w-[50%]">+ {bonus1}</li>
						<li className="min-w-[50%]">+ {bonus2}</li>
						<li className="min-w-[50%]">+ {bonus3}</li>
					</ul>
				</div>
				<p className="text-xs">Duration: {duration}</p>
				<h3 className="font-bold">Price: #{price}</h3>
			</div>
		</motion.div>
	)
}