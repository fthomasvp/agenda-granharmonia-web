import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	strictTokens: true,
	theme: {
		tokens: {
			colors: {
				// primary: { value: "#363E91" },
				// secondary: { value: "#" },
				// accent: { value: "#EB6A3F" },
				// TODO: Remove these color replacements
				// "blackAlpha.400": {
				// 	value: "#272727",
				// },
				// "blue.400": {
				// 	value: "#5662D6",
				// },
				// "gray.400": {
				// 	value: "#979494",
				// },
				// "green.400": {
				// 	value: "#50BE76",
				// },
				// "orange.400": {
				// 	value: "#EB6A3F",
				// },
				// "purple.400": {
				// 	value: "#B955E8",
				// },
				// "red.400": {
				// 	value: "#D85761",
				// },
				// "whiteAlpha.900": {
				// 	value: "#F9F0EE",
				// },
			},
			fonts: {
				heading: {
					value: `'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
				},
				body: {
					value: `'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
				},
				mono: {
					value: `'Poppins', SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
				},
			},
		},
	},
});
export const baseSystem = createSystem(defaultConfig, config);
