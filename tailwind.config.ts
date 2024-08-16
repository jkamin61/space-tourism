import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            barlow: ['Barlow', 'regular'],
            'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
            bellefair: ['Bellefair', 'regular'],
        },
        extend: {
            backgroundImage: {
                "space-pattern": "url('/home/background-home-mobile.jpg')"
            },
        },
    },
    plugins: [],
};
export default config;
