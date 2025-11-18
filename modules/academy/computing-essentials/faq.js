
export default function FAQ() {
	
	return(
		<div className="flex flex-col py-10 gap-5 px-5 md:px-10 box-border bg-background">
			<div>
				<h1 className="text-brand text-3xl font-bold text-center">Frequently Asked Questions</h1>
			</div>
			<div className="join join-vertical bg-bg-background w-full max-w-180 m-auto overflow-hidden">
				<div className="collapse collapse-arrow join-item border-gray-300 border">
					<input type="radio" name="my-accordion-4" defaultChecked />
					<div className="collapse-title font-semibold">How do I create an account?</div>
					<div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
				</div>
				<div className="collapse collapse-arrow join-item border-gray-300 border">
					<input type="radio" name="my-accordion-4" />
					<div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
					<div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
				</div>
				<div className="collapse collapse-arrow join-item border-gray-300 border w-full">
					<input type="radio" name="my-accordion-4" />
					<div className="collapse-title font-semibold">How do I update my profile information?</div>
					<div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
				</div>
			</div>
		</div>
	)
}