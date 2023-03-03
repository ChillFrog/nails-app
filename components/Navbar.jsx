import { useState } from "react";
import Image from "next/image";
import nails_logo from "../public/nails.png";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <nav className=" flex flex-initial items-center justify-between bg-white p-3">
      <button
        className="focus:rounded-full focus:bg-indigo-100"
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
