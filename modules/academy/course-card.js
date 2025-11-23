"use client"

import { motion } from "framer-motion";
import Image from 'next/image'

import { FaLocationDot } from 'react-icons/fa6';
import { BiTimer } from 'react-icons/bi';

export default function CourseCard(props) {

	const { url, location, image, date, title, text, interests, bonus1, bonus2, bonus3, duration, price } = props.course;

	return(
		<motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}  className="h-full border border-gray-300 bg-background rounded-xl w-full relative transition-transform hover:shadow-lg">
			<div className="flex gap-1 px-2 py-1 -top-4 -left-3.5 z-4 text-xs bg-background border border-gray-300 rounded-lg absolute">
				<FaLocationDot className="text-brand"/>
				<p>{location}</p>
			</div>
			<div>
				<div className="h-40 w-[100%] p-2 box-border text-xs rounded-t-lg overflow-hidden relative">
					<Image
						src={image}
						alt="background"
						fill={true}
						sizes="100vw"
						style={{ objectFit: 'cover', zIndex: 0 }}
					/>
					<div className="w-max flex items-center gap-1 px-0.5 text-xs border border-green-500 rounded-lg ml-auto absolute right-2 bg-black/40">
						<BiTimer className="text-white text-lg" />
						<p className="text-xs text-white">Starts on {date}</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2 p-4 mt-1">
				<div>
					<h2 className="text-xl font-bold">{title}</h2>
					<p className="text-xs text-gray-700">{text}</p>
				</div>
				<div>
					<p className="text-xs text-gray-700"><span className="text-black text-sm font-semibold">If you like: </span>{interests}</p>
				</div>
				<div>
					<h3 className="font-semibold text-sm">Bonus:</h3>
					<ul className="flex flex-wrap text-xs text-gray-700 w-full">
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