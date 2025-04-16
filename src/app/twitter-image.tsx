import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Hero } from "@/components/hero";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Haitham Athamneh Website";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function OpenGraphImage() {
	return new ImageResponse(
		<Hero />,
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
			// fonts: [
			// 	{
			// 		name: "Inter",
			// 		data: interSemiBold,
			// 		style: "normal",
			// 		weight: 400,
			// 	},
			// ],
		},
	);
}
