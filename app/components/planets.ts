import moon from "@/public/destination/image-moon.png";
import mars from "@/public/destination/image-mars.png";
import europa from "@/public/destination/image-europa.png";
import titan from "@/public/destination/image-titan.png";
import {StaticImageData} from "next/image";

type planet = {
    name: string,
    image: StaticImageData,
    description: string,
    distance: string,
    time: string
}
export const planets: planet[] = [
    {
        name: "MOON",
        image: moon,
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400",
        time: "3 DAYS"
    },
    {
        name: "MARS",
        image: mars,
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!\n",
        distance: "225 MIL.",
        time: "9 MONTHS"
    },
    {
        name: "EUROPA",
        image: europa,
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL.",
        time: "3 YEARS"
    },
    {
        name: "TITAN",
        image: titan,
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.\n",
        distance: "1.6 BIL.",
        time: "7 YEARS"
    }
]
