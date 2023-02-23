import Image from "next/image";
import { useState } from "react";
import hand_hero from "../public/hand_2.png";
import two_hands from "../public/2_hands_with_nails.jpg";
import hand_pink from "../public/hand_pink_background.webp";
import nail_form from "../public/sidebar_icons/nail_form.png";
import nail_color from "../public/sidebar_icons/nail_color.png";
import nail_effect from "../public/sidebar_icons/nail_effect.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { categories } from "../utils/nail-styles";
import { ChromePicker } from "react-color";

const buttonStyle =
  "flex items-center justify-center w-full mx-1 text-center font-medium rounded-xl py-2 px-2 bg-indigo-50";
export default function Hero() {
  const [open, setOpen] = useState("");
  const [palleteColor, setPalleteColor] = useState("#C14565");

  return (
    <div className="flex flex-col ">
      <div className="flex justify-start mx-4 mb-3 items-center px-3 rounded-xl bg-indigo-50 border-none outline-none focus-within:shadow-sm">
        <MagnifyingGlassIcon className="w-6 h-6" />
        <input
          type="text"
          placeholder="Поиск"
          className="p-3 font-medium w-full rounded-xl bg-indigo-50 outline-none"
        ></input>
      </div>
      <div className="flex flex-row justify-center mx-3">
        <button onClick={() => setOpen("form")} className={buttonStyle}>
          <Image src={nail_form} width={64} className="w-14" alt="nail form" />
          Форма
        </button>
        <button onClick={() => setOpen("color")} className={buttonStyle}>
          <Image
            src={nail_color}
            width={64}
            className="w-14"
            alt="nail color"
          />
          Цвет
        </button>
        <button onClick={() => setOpen("effect")} className={buttonStyle}>
          <Image
            src={nail_effect}
            width={64}
            className="w-14"
            alt="nail effect"
          />
          Узоры
        </button>
      </div>
      <div
        className={`flex snap-x overflow-auto bg-indigo-50 rounded-xl mt-3 mx-3 ease-in-out duration-300 ${
          open == "form"
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 duration-500 opacity-0"
        }`}
      >
        {open === "form" &&
          categories.map((category) => (
            <button
              key={category.name}
              className="snap-start first:snap-center shrink-0 m-3"
            >
              <Image
                width={500}
                height={500}
                className="w-24 rounded-xl"
                src={`/${category.image}`}
                alt="menu"
              />
            </button>
          ))}
      </div>
      <div
        className={`flex bg-indigo-50 rounded-xl  mx-3 mb-3 ease-in-out duration-300 ${
          open == "color"
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 duration-500 opacity-0"
        }`}
      >
        {open === "color" && (
          <div className="mx-3 mb-3 flex flex-row">
            <ChromePicker
              className="mt-3 "
              color={palleteColor}
              onChangeComplete={(color) => {
                setPalleteColor(color.hex);
              }}
            />
            <div className="h-44 overflow-auto">
              <ColorButton bg={"#000000"} onClick={setPalleteColor} />
              <ColorButton bg={"#EAD894"} onClick={setPalleteColor} />
              <ColorButton bg={"#E8DA35"} onClick={setPalleteColor} />
              <ColorButton bg={"#D86C89"} onClick={setPalleteColor} />
              <ColorButton bg={"#5AA7BF"} onClick={setPalleteColor} />
              <ColorButton bg={"#7BEF7C"} onClick={setPalleteColor} />
              <ColorButton bg={"#0E3B19"} onClick={setPalleteColor} />
              <ColorButton bg={"#279E44"} onClick={setPalleteColor} />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Image
          src={hand_hero}
          alt="hand"
          className="max-w-md md:max-w-xl overflow-hidden"
          style={{
            backgroundColor: `${palleteColor}`,
          }}
          priority={true}
        />
      </div>
    </div>
  );
}

const ColorButton = ({ bg, onClick }) => {
  return (
    <button
      type="button"
      className={`w-14 rounded-xl ml-3 mt-3 h-14 `}
      style={{ backgroundColor: `${bg}` }}
      onClick={() => onClick(bg)}
    ></button>
  );
};
