import { config } from "@/config";
import { Section } from "./ui/section";
import { cx } from "class-variance-authority";

export const ServicesSection = () => {
	return (
		<Section id="services" contentClassName="text-center">
			<h4 className="text-primary text-xl font-bold mb-2">What I offer?</h4>
			<h2 className="text-3xl font-bold mb-4">My Services</h2>
			<p className="mb-8 text-lg text-gray-400">
				I am mainly a frontend developer with a passion for creating beautiful
				and functional user interfaces.
				<br />
				But I also excel in different areas
			</p>
			<div className="flex flex-col xl:flex-row gap-4">
				{config.services?.map((service) => (
					<div
						key={service.title}
						className={cx(
							"rounded-lg shadow-2xl p-8 shadow-gray-200 flex flex-col gap-6 items-center flex-1",
							"hover:bg-primary hover:text-white group transition",
						)}
					>
						{service.icon && (
							<div className="rounded-full bg-primary text-white p-6 group-hover:bg-white group-hover:text-primary transition">
								{service.icon}
							</div>
						)}
						<h3 className="text-2xl font-bold">{service.title}</h3>
						<p>{service.description}</p>
					</div>
				))}
			</div>
		</Section>
	);
};
