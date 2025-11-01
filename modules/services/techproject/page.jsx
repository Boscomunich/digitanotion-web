import React from "react";

export default function Page() {
	const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

	const services = [
		"Web Development",
		"Mobile App Development",
		"Cyber Security",
	];

	const prefillMessage = `Hello, I'm [Your Name]. I want more information about Tech6Project — interested in: ${services.join(
		", "
	)}. Register for 2025.`;

	const waHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
		prefillMessage
	)}`;

	return (
		<main className="min-h-screen flex items-center justify-center bg-neutral-50 p-6">
					<section className="max-w-5xl w-full glass bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 grid gap-8 md:grid-cols-2 items-start">
								<div className="col-span-full flex justify-center mb-6">
									<img
										src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761847818/ChatGPT_Image_Oct_27__2025__08_24_20_PM-removebg-preview_frae2c.png"
										alt="Tech6Project logo"
										className="w-40 h-40 md:w-100 md:h-100 object-contain rounded-lg shadow-lg bg-white p-2"
									/>
								</div>

						<div>
							<h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight mb-4">
						
						<span className="block text-lg font-medium text-neutral-600 mt-2">
							An intensive bootcamp — Web, Mobile & Cyber Security. Build real products, ship portfolios.
						</span>
					</h1>

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
					</ul>

					<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
						<a
							href="/academy"
							className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 font-medium shadow-sm hover:shadow transition"
						>
							Register for 2025
						</a>
					</div>
				</div>

						<div />
			</section>
		</main>
	);
}
