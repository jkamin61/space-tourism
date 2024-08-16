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
                "space-pattern-mobile": "url('/home/background-home-mobile.jpg')",
                "space-pattern-tablet": "url('/home/background-home-tablet.jpg')",
                "space-pattern-desktop": "url('/home/background-home-desktop.jpg')",
                "stars-pattern-mobile": "url('public/destination/background-destination-mobile.jpg')",
                "stars-pattern-tablet": "url('public/destination/background-destination-tablet.jpg')",
                "stars-pattern-desktop": "url('public/destination/background-destination-desktop.jpg')",
                "moon-pattern-mobile": "url('public/crew/background-crew-mobile.jpg')",
                "moon-pattern-tablet": "url('public/crew/background-crew-tablet.jpg')",
                "moon-pattern-desktop": "url('public/crew/background-crew-desktop.jpg')",
            },
        },
    },
    plugins: [],
};
export default config;
