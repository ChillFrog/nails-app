import react, { useState } from "react";
import Image from "next/image";
import { categories } from "../utils/nail-styles";
import nail_form_selected from "../public/sidebar_icons/nail_form_selected.png";
import nail_form from "../public/sidebar_icons/nail_form.png";
import color_mode_selected from "../public/sidebar_icons/color_mode_selected.png";
import color_mode from "../public/sidebar_icons/color_mode.png";

export default function Main() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  return (
    <div className="flex flex-row">
      <div className="flex w-32 bg-slate-50 flex-col items-center min-h-screen w-1/8 shadow-inner">
        <button
          type="dropdown"
          onClick={() => {
            setCategoryOpen(!categoryOpen);
            setFormOpen(!formOpen);
          }}
          className=" bg-white p-6 mx-3 mt-3 rounded-lg shadow hover:bg-slate-100"
        >
          <Image
            src={formOpen ? nail_form_selected : nail_form}
            width={500}
            alt="nail form"
            className="w-32"
          />
          <p>Форма</p>
        </button>
        <button
          type="dropdown"
          onClick={() => {
            setCategoryOpen(categoryOpen);
            setColorOpen(!colorOpen);
          }}
          className=" bg-white p-6 mx-3 mt-3 rounded-lg shadow hover:bg-slate-100"
        >
          <Image
            src={colorOpen ? color_mode_selected : color_mode}
            width={500}
            alt="nail form"
            className="w-32"
          />
          <p>Цвет</p>
        </button>
      </div>
      <div
        className={` h-screen md:h-full shadow-inner w-52 ${
          categoryOpen ? "flex" : "hidden"
        }`}
      >
        <div
          className={`flex-wrap flex-row items-center justify-center ${
            formOpen ? "flex" : "hidden"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className=" rounded-xl  w-24 m-1 shadow-md"
            >
              <Image
                src={`/${category.image}`}
                priority
                width={500}
                height={500}
                className="rounded-xl w-32 "
                alt="category"
              />
            </button>
          ))}
        </div>
        <div
          className={`flex-wrap flex-row items-center justify-center ${
            colorOpen ? "flex" : "hidden"
          }`}
        >
          color
        </div>
      </div>
    </div>
  );
}
