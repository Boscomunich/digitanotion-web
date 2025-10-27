'use client'

import { useState } from 'react';

export default function FAQ() {
	
	const [activeFaq, setActiveFaq] = useState(1);
	
	return(
		<div className="flex flex-col py-10 gap-5 px-5 md:px-16 box-border bg-white">
			<div>
				<h1 className="text-brand text-3xl font-bold">Frequently Asked Questions</h1>
			</div>
			<div className="flex flex-col md:flex-row gap-6">
				<div className="flex flex-col w-fill md:w-[50%] border border-gray-300 rounded-xl bg-white">
					<ul>
						<li>
							<div>
								<div className="p-5 flex justify-between"><p>Where will the training take place?</p><img onClick={(activeFaq == 1) ? () => setActiveFaq(0) : () => setActiveFaq(1)} src="/icons/dropdown.svg" alt="icon"/></div>
								<div className={"pt-0 p-5 " + ((activeFaq == 1) ? "" : "hidden" ) }>
									Suite 9, Mgbajiaka Area, Digitanotion Limited, Along Onisha - Enugu Expy, Opposite East-End Hotel, Awka.
								</div>
							</div>
						</li>
						<hr className="text-gray-300"/>
						<li>
							<div>
								<div className="p-5 flex justify-between"><p>Where will the training take place?</p><img onClick={(activeFaq == 2) ? () => setActiveFaq(0) : () => setActiveFaq(2)} src="/icons/dropdown.svg" alt="icon"/></div>
								<div className={"pt-0 p-5 " + ((activeFaq == 2) ? "" : "hidden" ) }>
									Suite 9, Mgbajiaka Area, Digitanotion Limited, Along Onisha - Enugu Expy, Opposite East-End Hotel, Awka.
								</div>
							</div>
						</li>
						<hr className="text-gray-300"/>
						<li>
							<div>
								<div className="p-5 flex justify-between"><p>Where will the training take place?</p><img onClick={(activeFaq == 3) ? () => setActiveFaq(0) : () => setActiveFaq(3)} src="/icons/dropdown.svg" alt="icon"/></div>
								<div className={"pt-0 p-5 " + ((activeFaq == 3) ? "" : "hidden" ) }>
									Suite 9, Mgbajiaka Area, Digitanotion Limited, Along Onisha - Enugu Expy, Opposite East-End Hotel, Awka.
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="flex flex-col w-fill md:w-[50%] md:w-fill">
					<div className="border border-gray-300 rounded-xl p-5 ">
						<p>More Questions?</p>
						<a href="#" className="text-blue-600">Contact Us</a>
					</div>
					<div className="mt-5">
						<ul className="flex gap-5 w-max m-auto">
							<li><a href="facebook.com"><img className="w-4" src="/icons/facebook.svg" alt="facebook icon" /></a></li>
							<li><a href="instagram.com"><img className="w-4" src="/icons/instagram.svg" alt="instagram.com" /></a></li>
							<li><a href="x.com"><img className="w-4" src="/icons/x.svg" alt="x icon" /></a></li>
							<li><a href="linkedIn.com"><img className="w-4" src="/icons/linkedIn.svg" alt="linkedIn.com" /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}