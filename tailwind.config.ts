import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "space-pattern-mobile": "url('/home/background-home-mobile.jpg')",
                "space-pattern-tablet": "url('/home/background-home-tablet.jpg')",
                "space-pattern-desktop": "url('/home/background-home-desktop.jpg')",
                "stars-pattern-mobile": "url('/destination/background-destination-mobile.jpg')",
                "stars-pattern-tablet": "url('/destination/background-destination-tablet.jpg')",
                "stars-pattern-desktop": "url('/destination/background-destination-desktop.jpg')",
                "moon-pattern-mobile": "url('/crew/background-crew-mobile.jpg')",
                "moon-pattern-tablet": "url('/crew/background-crew-tablet.jpg')",
                "moon-pattern-desktop": "url('/crew/background-crew-desktop.jpg')",
            }, fontFamily: {
                barlow: ['Barlow', 'regular'],
                'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
                bellefair: ['Bellefair', 'regular'],
            },
            colors: {
                'space-blue-900': '#0B0D17',
                'space-blue-300': '#D0D6F9'
            },
            height: {
                '1px': '1px',
            },
        },
    },
    plugins: [],
};
export default config;
