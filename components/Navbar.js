import { useState } from "react";
import Image from "next/image";
import nail_logo from "../public/nail.png";
import menu_logo from "../public/menu.png";

export default function Navbar() {
  return (
    <nav className="absolute w-full flex flex-wrap shadow justify-between items-center bg-violet-400 p-3">
      <div>
        <Image className="w-12 mr-10" src={nail_logo}></Image>
        <h1></h1>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2  rounded text-white  hover:text-white">
          <svg
            class="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Зарегистрироваться
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Логин
          </a>
        </div>
      </div>
    </nav>
  );
}
