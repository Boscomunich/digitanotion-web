import React from "react";

export default function TechProjectPage() {
	// Replace with your WhatsApp number in international format without +, e.g. 2348073735836
	const WHATSAPP_NUMBER = "2348073735836";

	const services = [
		"Web Development",
		"Mobile App Development",
		"Cyber Security",
	];

	const prefillMessage = `Hello, I'm interested in Tech6Project. I want more information about: ${services.join(
		", "
	)}. Please register me for 2025.`;

	const waHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
		prefillMessage
	)}`;

	return (
		<main className="min-h-screen flex items-center justify-center bg-neutral-50 p-6">
			<section className="max-w-5xl w-full glass bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 grid gap-8 md:grid-cols-2 items-start">
				{/* Top logo (single) */}
				<div className="col-span-full flex justify-center mb-6">
					<img
						src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761847818/ChatGPT_Image_Oct_27__2025__08_24_20_PM-removebg-preview_frae2c.png"
						alt="Tech6Project logo"
						className="w-40 h-40 md:w-60 md:h-60 object-contain rounded-lg shadow-lg bg-white p-2"
					/>
				</div>

				{/* Left: copy + CTA */}
				<div>
					<h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight mb-4">
						Tech6Project 2025
					</h1>
					
					<span className="block text-lg font-medium text-neutral-600 mt-2 mb-4">
						An intensive bootcamp — Web, Mobile & Cyber Security. Build real products, ship portfolios.
					</span>

					<p className="text-neutral-700 mb-6 max-w-xl">
						Tech6Project is a targeted bootcamp for aspiring tech professionals. Through a
						project-led curriculum, mentorship and career support, participants gain practical
						skills in Web Development, Mobile App Development and Cyber Security — ready for
						internships and jobs.
					</p>

					<ul className="mb-6 space-y-2 text-neutral-700">
						<li>• Project-based learning with real-world deliverables</li>
						<li>• Live mentorship and 1:1 feedback</li>
						<li>• Demo day, portfolio guidance and internship pathways</li>
						<li>• Industry-ready portfolio development</li>
						<li>• Career placement assistance</li>
					</ul>

					<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
						<a
							href="/academy"
							className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-600 text-white font-medium shadow-lg hover:bg-orange-700 transition"
						>
							Register for 2025
						</a>
						
						<a
							href={waHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 font-medium shadow-sm hover:shadow transition"
						>
							WhatsApp Us
						</a>
					</div>
				</div>

				{/* Right: Features */}
				<div className="space-y-6">
					<div className="bg-white/50 rounded-xl p-6 backdrop-blur-sm">
						<h3 className="text-xl font-bold text-neutral-900 mb-3">Program Highlights</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
								<div>
									<h4 className="font-semibold text-neutral-800">Duration</h4>
									<p className="text-sm text-neutral-600">6 months intensive training</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
								<div>
									<h4 className="font-semibold text-neutral-800">Format</h4>
									<p className="text-sm text-neutral-600">Hybrid: Online & On-site</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
								<div>
									<h4 className="font-semibold text-neutral-800">Certification</h4>
									<p className="text-sm text-neutral-600">Industry-recognized certificates</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white/50 rounded-xl p-6 backdrop-blur-sm">
						<h3 className="text-xl font-bold text-neutral-900 mb-3">Skills You'll Learn</h3>
						<div className="grid grid-cols-1 gap-2">
							{services.map((service, index) => (
								<div key={index} className="flex items-center gap-2">
									<svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="text-neutral-700 font-medium">{service}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}