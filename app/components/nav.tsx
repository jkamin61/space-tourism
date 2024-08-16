"use client"

import Image from "next/image";
import logo from "../../public/Subtract.svg";
import menu from "../../public/shared/icon-hamburger.svg"
import closeMenu from "../../public/shared/icon-close.svg"
import {useState} from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    function showMenu() {
        setMenuVisible(true);
    }

    function hideMenu() {
        setMenuVisible(false);
    }

    return (
        <>
            <header className="p-6 relative z-20">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <Image src={logo} alt="Logo"/>
                    </div>
                    <div>
                        <Image src={menu} onClick={showMenu} className="hover:cursor-pointer" alt="menu icon"/>
                    </div>
                </div>
            </header>
            {menuVisible &&
                <div
                    className="z-30 h-full left-36 backdrop-blur-lg absolute p-2 flex flex-col gap-9 top-0 right-0 ease-in-out duration-1000 overflow-x-hidden">
                    <div className="flex justify-end p-6">
                        <button className="hover:cursor-pointer" onClick={hideMenu}>
                            <Image src={closeMenu} alt="close menu button"/>
                        </button>
                    </div>
                    <nav>
                        <ul className="flex flex-col gap-4 text-white">
                            <li className="flex items-center flex-row gap-2 text-xs">
                                <p className="font-bold">00</p>
                                <Link href={"/"}
                                      className="font-barlow-condensed font-thin hover:cursor-pointer">HOME</Link>
                            </li>
                            <li className="flex items-center flex-row gap-2 text-xs">
                                <p className="font-bold">01</p>
                                <Link href={"/destination"}
                                      className="font-barlow-condensed font-thin hover:cursor-pointer">DESTINATION
                                </Link>
                            </li>
                            <li className="flex items-center flex-row gap-2 text-xs">
                                <p className="font-bold">02</p>
                                <Link href={"/crew"}
                                      className="font-barlow-condensed font-thin hover:cursor-pointer">CREW</Link>
                            </li>
                            <li className="flex items-center flex-row gap-2 text-xs">
                                <p className="font-bold">03</p>
                                <Link href={"/technology"}
                                      className="font-barlow-condensed font-thin hover:cursor-pointer">TECHNOLOGY
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}

export default Navigation;
