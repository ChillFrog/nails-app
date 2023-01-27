import { useState } from "react";
import Image from "next/image";
import nails_logo from "../public/nails.png";
import menu_logo from "../public/menu.png";
import user_icon from "../public/user.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" flex shadow justify-between flex-initial items-center bg-indigo-500 p-3">
      <div className="flex justify-between items-center ">
        <Image className="w-12 mr-10" src={nails_logo} alt="logo"></Image>
        <h1 className="text-2xl font-bold text-white">Редактор ногтей</h1>
      </div>
      <Link
        href={"/login"}
        className="flex items-center gap-2 text-white font-semibold  border-[1px]  border-slate-300 hover:bg-slate-300 hover:bg-opacity-30 hover:border-opacity-0 py-1 px-3 rounded-full"
      >
        <Image src={user_icon} width={30} alt="user" />
        Войти
      </Link>
    </nav>
  );
}
