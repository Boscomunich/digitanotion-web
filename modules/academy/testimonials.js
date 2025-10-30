
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
	
	return(
		<div className="flex flex-col py-10 box-border gap-5">
			<div>
				<h1 className="text-brand text-3xl px-5 text-center font-bold">What Our Students Say About Us</h1>
			</div>
			<div className="carousel carousel-center gap-8 px-10">
				{
					testimonials.map((testimonial, index) => (
						<div key={index} className={ "w-70 md:w-110 carousel-item" }>
							<TestimonialItem testimonial={testimonial} />
						</div>
					))
				}
			</div>
		</div>
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