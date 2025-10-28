
export default function FAQ() {
	
	return(
		<div className="flex flex-col py-10 gap-5 px-5 md:px-16 box-border bg-background">
			<div>
				<h1 className="text-brand text-3xl font-bold">Frequently Asked Questions</h1>
			</div>
			<div className="flex flex-col md:flex-row gap-6">
				<div className="join join-vertical bg-bg-background w-fill md:w-[50%] border border-gray-200 rounded-lg overflow-hidden">
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4" defaultChecked />
						<div className="collapse-title font-semibold">How do I create an account?</div>
						<div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
					</div>
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4" />
						<div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
						<div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
					</div>
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4" />
						<div className="collapse-title font-semibold">How do I update my profile information?</div>
						<div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
					</div>
				</div>
				<div className="flex flex-col w-fill md:w-[50%]">
					<div className="border border-gray-200 rounded-lg p-4">
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