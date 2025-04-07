"use client";

import { submitEmail } from "@/app/actions";
import { RiCheckFill, RiMailCheckFill } from "@remixicon/react";
import Form from "next/form";
import { useActionState, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactForm = () => {
	const [state, formAction, pending] = useActionState(submitEmail, {});
	const [formFields, setFormFields] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		message: "",
	});

	useEffect(() => {
		if (!state.formFields) return;
		setFormFields(state.formFields);
	}, [state.formFields]);

	return state.success ? (
		<div className="flex flex-col gap-4 max-w-screen-lg mx-auto py-12 items-center text-center">
			<RiMailCheckFill />
			<p className="text-center">Thank you for your message!</p>
		</div>
	) : (
		<Form
			className="flex flex-col gap-4 max-w-screen-lg mx-auto"
			action={formAction}
		>
			<div className="flex flex-col xl:flex-row gap-4 w-full">
				<div className="flex-1">
					<Input
						name="name"
						type="text"
						placeholder="Name"
						required
						disabled={pending}
						value={formFields?.name}
						onChange={(e) =>
							setFormFields({ ...formFields, name: e.target.value })
						}
					/>
				</div>
				<div className="flex-1">
					<Input
						name="company"
						type="text"
						placeholder="Company (optional)"
						disabled={pending}
						value={formFields?.company}
						onChange={(e) =>
							setFormFields({ ...formFields, company: e.target.value })
						}
					/>
				</div>
			</div>
			<div className="flex flex-col xl:flex-row gap-4 w-full">
				<div className="flex-1">
					<Input
						name="email"
						type="email"
						placeholder="Email"
						required
						disabled={pending}
						value={formFields?.email}
						onChange={(e) =>
							setFormFields({ ...formFields, email: e.target.value })
						}
					/>
				</div>
				<div className="flex-1">
					<Input
						name="phone"
						type="tel"
						placeholder="Phone"
						disabled={pending}
						value={formFields?.phone}
						onChange={(e) =>
							setFormFields({ ...formFields, phone: e.target.value })
						}
					/>
				</div>
			</div>
			<div className="">
				<Textarea
					name="message"
					placeholder="Message"
					rows={4}
					disabled={pending}
					value={formFields?.message}
					onChange={(e) =>
						setFormFields({ ...formFields, message: e.target.value })
					}
				/>
			</div>
			<div
				className="cf-turnstile"
				data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
				data-callback="javascriptCallback"
			/>
			{state.success === false && (
				<p className="text-red-500">
					Failed to send message, please try again later.
				</p>
			)}
			<Button type="submit" size="lg" disabled={pending}>
				{pending ? "Sending..." : "Send Message"}
			</Button>
		</Form>
	);
};
