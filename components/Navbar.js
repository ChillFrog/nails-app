import { useState } from "react";
import Image from "next/image";
import nails_logo from "../public/nails.png";
import menu_logo from "../public/menu.png";
import user_icon from "../public/user.svg";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <nav className=" flex justify-between flex-initial items-center bg-white p-3">
      <button
        className="focus:bg-indigo-100 focus:rounded-full"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <Bars3Icon className="h-12 w-12 p-2" />
      </button>
      <Image className="w-12" src={nails_logo} alt="logo"></Image>
      <Link href={"/login"} className="font-medium ">
        Войти
      </Link>
    </nav>
  );
}
