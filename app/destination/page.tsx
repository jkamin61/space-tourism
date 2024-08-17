'use client'

import Navigation from "@/app/components/nav";
import Image from "next/image";
import {planets} from "@/app/components/planets";
import {useState} from "react";

export default function Destination() {
    const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

    const handlePlanetChange = (planetName: string) => {
        const planet = planets.find(p => p.name === planetName);
        if (planet) {
            setSelectedPlanet(planet);
        }
    }

    return (
        <div className="min-h-screen min-w-full bg-cover bg-stars-pattern-mobile">
            <Navigation/>
            <main className="flex flex-col justify-center items-center">
                <div
                    className="flex flex-row justify-center items-center gap-4 text-white text-base">
                    <p className="opacity-40">01</p>
                    <h2>PICK YOUR DESTINATION</h2>
                </div>
                <div className="p-10">
                    <Image src={selectedPlanet.image} alt={`${selectedPlanet.name} image`} height={180} width={180}/>
                </div>
                <div>
                    <ul className="text-space-blue-300 flex flex-row gap-8 justify-center items-center text-md font-medium">
                        {planets.map((planet) => (
                            <li key={planet.name}>
                                <button
                                    className={`hover:underline ${selectedPlanet.name === planet.name ? 'underline' : ''}`}
                                    onClick={() => handlePlanetChange(planet.name)}>
                                    {planet.name}
                                </button>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div className="flex justify-center items-center flex-col text-white">
                    <h2 className="text-6xl mt-8 mb-6 font-bellefair">{selectedPlanet.name}</h2>
                    <p className="text-space-blue-300 text-center text-sm px-4">{selectedPlanet.description}</p>
                </div>
                <div className="bg-white h-1px w-3/4 mt-8 mb-8 opacity-40"/>
                <div className="text-white flex flex-col justify-center items-center text-center gap-2">
                    <div>
                        <p className="text-space-blue-300 text-sm">AVG. DISTANCE</p>
                        <p className="font-bellefair text-3xl">{selectedPlanet.distance}</p>
                    </div>
                    <div>
                        <p className="text-space-blue-300 text-sm">EST. TRAVEL TIME</p>
                        <p className="font-bellefair text-3xl">{selectedPlanet.time}</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
