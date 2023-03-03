import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import example_image from "../public/2_hands_with_nails.jpg";
import nails_logo from "../public/nails.png";

export default function Login() {
  const router = useRouter();
  const [loginNext, setLoginNext] = useState(false);

  return (
    <div className="min-h-max bg-slate-100 md:min-h-screen">
      <nav className=" flex items-center justify-between bg-indigo-500 p-3 shadow">
        <div className="flex items-center justify-between">
          <Image className="mr-10 w-12" alt=" logo" src={nails_logo}></Image>
          <h1 className="text-2xl font-bold text-white">Редактор ногтей</h1>
        </div>
      </nav>
      <div className="flex flex-col-reverse justify-between p-10 lg:flex-row ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-bold  leading-none text-black">
            Нужна помощь <br /> в выборе маникюра ?
          </h1>
          <Image
            src={example_image}
            alt="example image"
            className=" mt-10 h-auto max-w-md rounded-xl lg:max-w-2xl  "
          ></Image>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div class=" mb-3  flex w-96 flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg md:w-72">
            <Image src={nails_logo} alt="logo" className="mt-5 w-32" />
            <div class="py-4 px-4">
              <div class="mb-2 text-center text-xl font-medium tracking-tight">
                Вход в аккаунт
              </div>
              <p class="text-base text-gray-700"></p>
            </div>
            <div class="mx-4 flex flex-col items-center justify-center">
              <div className="flex flex-row">
                <input
                  className={`flex w-60 appearance-none rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-gray-700 duration-300 ease-in-out focus:outline-none ${
                    loginNext ? "-translate-x-96" : "translate-x-[118px]"
                  }`}
                  type="text"
                  placeholder="Телефон или почта"
                />
                <input
                  className={`flex w-60 appearance-none rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-gray-700 duration-300 ease-in-out focus:outline-none ${
                    loginNext ? "-translate-x-[122px]" : " translate-x-96"
                  }`}
                  type="text"
                  placeholder="пароль"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  setLoginNext(true);
                  loginNext ? router.push("/") : "";
                }}
                className="m-7 block w-60 rounded-lg bg-indigo-600 p-2 font-light text-white duration-100 ease-in-out hover:-translate-y-px hover:bg-indigo-700"
              >
                Войти
              </button>
            </div>
          </div>
          <div class="w-96 max-w-sm overflow-hidden rounded-xl bg-white p-3 shadow-lg md:w-72">
            <div class="mx-4 flex flex-col items-center justify-center">
              <button className="my-2 block w-60 rounded-lg bg-green-400 p-2  font-light text-white duration-100 ease-in-out hover:-translate-y-px hover:bg-green-500">
                Зарегистрироваться
              </button>
              <p className="text-center text-xs font-medium text-gray-400 ">
                После регистрации вы получите доступ ко всем возможностям сайта
              </p>
              <p className="text-center text-sm font-medium text-gray-500 hover:cursor-pointer hover:underline ">
                Узнать больше
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
