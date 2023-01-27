import react, { useState } from "react";
import Image from "next/image";
import { categories } from "../utils/nail-styles";

export default function Main() {
  return (
    <div className="flex bg-slate-50 flex-col items-center h-full transition-height duration-75 ease-in-out">
      <button
        type="dropdown"
        className="p-3 bg-purple-500 mt-5 rounded-xl w-40 text-center"
      >
        Выбрать форму
      </button>
      <div className="flex flex-wrap flex-row items-center justify-center">
        {categories.slice(0, categories.length).map((category) => (
          <button
            key={category.name}
            type="button"
            className="m-4 rounded-xl shadow-lg"
          >
            <Image
              src={`/${category.image}`}
              priority
              width={500}
              height={500}
              className="rounded-xl w-36 h-auto "
              alt="category"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
