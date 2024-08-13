"use client"

import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import logo from "../../public/Subtract.svg";

const Navigation: React.FC = () => {

    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500 border-zinc-800"
                }`}
            >
                <div className="bg-black">
                    <Image src={logo} alt="Logo"/>
                </div>
            </div>
        </header>
    )
}

export default Navigation;
