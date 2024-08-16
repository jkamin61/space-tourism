"use client"

import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import logo from "../../public/Subtract.svg";
import menu from "../../public/shared/icon-hamburger.svg"

const Navigation: React.FC = () => {

    return (
        <header className="flex flex-row justify-between items-center p-6">
            <div>
                <Image src={logo} alt="Logo"/>
            </div>
            <div>
                <Image src={menu} className="hover:cursor-pointer" alt="menu icon"/>
            </div>
        </header>
    )
}

export default Navigation;
