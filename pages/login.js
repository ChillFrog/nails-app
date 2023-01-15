import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import nail_logo from "../public/nail.png";
import menu_logo from "../public/menu.png";
import card_image from "../public/2_hands_with_nails.jpg";
import nails_logo from "../public/nails.png";

export default function Login() {
  return (
    <div className="bg-slate-100 min-h-max overflow-auto ">
      <nav className=" w-full flex shadow justify-between items-center bg-indigo-500 p-3">
        <div className="flex justify-between items-center">
          <Image className="w-12 mr-10" src={nails_logo}></Image>
          <h1 className="text-2xl font-bold text-white">Редактор ногтей</h1>
        </div>
      </nav>
      <div className="flex flex-col-reverse justify-between py-16 md:flex-row ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-center text-black text-6xl">
            Нужна помощь <br /> в выборе маникюра ?
          </h1>
          <Image src={card_image} className=" rounded-xl"></Image>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div class=" w-96 bg-white rounded-xl flex flex-col justify-center items-center overflow-hidden shadow-lg mb-3 md:w-72">
            <Image src={nails_logo} className="w-32 mt-5" />
            <div class="py-4 px-4">
              <div class="font-medium text-xl tracking-tight text-center mb-2">
                Вход в аккаунт
              </div>
              <p class="text-gray-700 text-base"></p>
            </div>
            <div class="flex flex-col justify-center items-center mx-4">
              <input
                className="block appearance-none border bg-slate-100 border-slate-200 focus:outline-none text-gray-700 rounded-lg px-3 py-2 w-60"
                type="text"
                placeholder="Телефон или почта"
              />
              <button className="block bg-indigo-600 font-light m-7 p-2 rounded-lg  text-white w-60">
                Войти
              </button>
            </div>
          </div>
          <div class="w-96 bg-white max-w-sm rounded-xl overflow-hidden shadow-lg p-3 md:w-72">
            <div class="flex flex-col justify-center items-center mx-4">
              <button className="block bg-green-400 font-light p-2 my-2 rounded-lg  text-white w-60">
                Зарегистрироваться
              </button>
              <p className="text-gray-400 text-xs font-medium text-center ">
                После регистрации вы получите доступ ко всем возможностям сайта
              </p>
              <p className="text-gray-500 hover:underline hover:cursor-pointer text-sm font-medium text-center ">
                Узнать больше
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
