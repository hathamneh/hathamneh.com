"use server";

import { sendEmail } from "@/lib/email";

interface SubmitEmailState {
	success?: boolean;
	formFields?: {
		name: string;
		company: string;
		email: string;
		phone: string;
		message: string;
	};
}

export async function submitEmail(
	prevState: SubmitEmailState,
	formData: FormData,
) {
	const formFields = {
		name: formData.get("name") as string,
		company: formData.get("company") as string,
		email: formData.get("email") as string,
		phone: formData.get("phone") as string,
		message: formData.get("message") as string,
	};
	const turnstileResponse = formData.get("cf-turnstile-response") as string;

	try {
		await verifyTurnstileResponse(turnstileResponse);

		await sendEmail(
			formFields.email,
			`${formFields.name} Contacted | hathamneh.com`,
			`
		    Name: ${formFields.name}<br />
		    Company: ${formFields.company}<br />
		    Email: ${formFields.email}<br />
		    Phone: ${formFields.phone}<br />
		    <br />
		    Message: <br /><br />
		    ${formFields.message.replaceAll("\n", "<br />")}
		  `,
		);

		return { success: true, formFields } as SubmitEmailState;
	} catch (error) {
		console.error(error);
		return { success: false, formFields } as SubmitEmailState;
	}
}

async function verifyTurnstileResponse(turnstileResponse: string) {
	try {
		if (!turnstileResponse) {
			throw new Error("Turnstile response is missing");
		}

		if (!process.env.TURNSTILE_SECRET_KEY) {
			throw new Error("Turnstile secret is missing");
		}

		const formData = new FormData();
		formData.append("secret", process.env.TURNSTILE_SECRET_KEY);
		formData.append("response", turnstileResponse);

		const response = await fetch(
			"https://challenges.cloudflare.com/turnstile/v0/siteverify",
			{
				method: "POST",
				body: formData,
			},
		);

		const data = await response.json();

		if (!data.success) {
			throw new Error("Turnstile verification failed");
		}
	} catch (error) {
		throw new Error("Turnstile verification failed");
	}
}
