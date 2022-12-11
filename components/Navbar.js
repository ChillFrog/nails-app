import { useState } from "react"
import Image from "next/image"
import nail_logo from "../public/nail.png"
import menu_logo from "../public/menu.png"


export default function Navbar(){
    const[isMobile, setIsMobile] = useState(false);

    return <nav className=" x-4 py-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 justify-between font-semibold items-center mx-auto md:flex">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image className="h-10 w-10" src={nail_logo}/>
                    <p className="px-2 text-white">Редактор ногтей</p>
                </div>
            <div className="md:hidden flex items-center">
                <button onClick={()=> setIsMobile(!isMobile)} className="mobile-menu-btn">
                    <Image src={menu_logo} className="h-6 w-6"></Image>
                </button>
            </div>
            </div>
            <ul className="hidden items-center md:flex ">
                <button type="button" className="ml-2 px-2 py-1 backdrop-blur-sm bg-opacity-10 border-opacity-10 bg-white border-[1px] border-black rounded-lg">Вход</button>
                <button type="button" className="ml-2 px-2 py-1 backdrop-blur-sm bg-opacity-10 border-opacity-10 bg-white border-[1px] border-black rounded-lg">Создать аккаунт</button>
            </ul>
            <div className="md:hidden">
                <div className={isMobile ? "block" : "hidden"}>
                    <a href="#" className="block py-2 px-2 text-sm">Войти</a>
                    <a href="#" className="block py-2 px-2 text-sm">Создать аккаунт</a>
                </div>
            </div>
    </nav>
}