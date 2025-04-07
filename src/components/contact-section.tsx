import { ContactForm } from "./contact-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Section } from "./ui/section";
import { Textarea } from "./ui/textarea";

export const ContactSection = () => {
	return (
		<Section id="contact-section" contentClassName="text-center">
			<h4 className="text-primary text-xl font-bold mb-2">Contact Form</h4>
			<h2 className="text-3xl font-bold ">
				Are you interested in working with me?
			</h2>
			<p className="mb-8 mt-4 text-lg text-gray-400">
				If you have any questions or need help with your project, feel free to
				contact me.
				<br />I am always open to new opportunities and collaborations.
			</p>

			<ContactForm />
		</Section>
	);
};
