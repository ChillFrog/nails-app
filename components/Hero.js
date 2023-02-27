import Image from "next/image";
import { useState, useEffect } from "react";
import hand_hero from "../public/hand_2.png";
import almond from "../public/hand_almond.png";
import nail_form from "../public/sidebar_icons/nail_form.png";
import nail_color from "../public/sidebar_icons/nail_color.png";
import nail_effect from "../public/sidebar_icons/nail_effect.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { categories } from "../utils/nail-styles";
import { colors } from "../utils/colors-styles";
import { HexColorPicker, HexColorInput } from "react-colorful";

let nextId = 8;
const menuButtonStyle =
  "flex items-center justify-center w-full mx-1 text-center font-medium rounded-xl py-2 px-2 bg-indigo-50";

export default function Hero() {
  const [palleteColor, setPalleteColor] = useState("#be0505");
  const [handImage, setHandImage] = useState(hand_hero);
  const [colorsArray, setColorsArray] = useState([...colors]);
  const [open, setOpen] = useState("");

  return (
    <div className="flex flex-col ">
      <div className="flex justify-start mx-4 mb-3 items-center px-3 rounded-xl bg-indigo-50 border-none outline-none focus-within:shadow-sm">
        <MagnifyingGlassIcon className="w-6 h-6" />
        <input
          type="text"
          placeholder="Поиск..."
          className="p-3 font-medium w-full rounded-xl bg-indigo-50 outline-none"
        ></input>
      </div>
      <div className="flex flex-row justify-center mx-3">
        <MenuButton
          src={nail_form}
          alt="nail form"
          text="Форма"
          setOpen={setOpen}
        />
        <MenuButton
          src={nail_color}
          alt="nail color"
          text="Цвет"
          setOpen={setOpen}
        />
        <MenuButton
          src={nail_effect}
          alt="nail effect"
          text="Узор"
          setOpen={setOpen}
        />
      </div>
      <DropDown
        setColorsArray={setColorsArray}
        colorsArray={colorsArray}
        open={open}
        palleteColor={palleteColor}
        setPalleteColor={setPalleteColor}
        setHandImage={setHandImage}
      />
      <div className="flex justify-center">
        <Image
          src={handImage}
          width={1800}
          height={1800}
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

function MenuButton({ setOpen, src, alt, text }) {
  return (
    <button onClick={() => setOpen(text)} className={menuButtonStyle}>
      <Image src={src} width={64} className="w-14" alt={alt} />
      {text}
    </button>
  );
}

function DropDown({
  setColorsArray,
  colorsArray,
  open,
  setHandImage,
  palleteColor,
  setPalleteColor,
}) {
  return (
    <>
      <div
        className={`flex snap-x overflow-auto bg-indigo-50 rounded-xl mt-3 mx-3 ease-in-out duration-300 ${
          open === "Форма"
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 duration-500 opacity-0"
        }`}
      >
        {open === "Форма" &&
          categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setHandImage(category.hand);
              }}
              className="snap-start first:snap-center shrink-0 m-3"
            >
              <Image
                width={500}
                height={500}
                className="w-24 rounded-xl"
                src={`/${category.image}`}
                alt={category.name}
              />
            </button>
          ))}
      </div>
      <div
        className={`flex bg-indigo-50 rounded-xl  mx-3 mb-3 ease-in-out duration-300 ${
          open === "Цвет"
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 duration-500 opacity-0"
        }`}
      >
        {open === "Цвет" && (
          <div className="mx-3 mb-3 flex flex-row">
            <div>
              <HexColorPicker
                color={palleteColor}
                onChange={setPalleteColor}
                className="mt-3"
              ></HexColorPicker>
              <div className="flex">
                <HexColorInput
                  color={palleteColor}
                  onChange={setPalleteColor}
                  className="bg-white w-40"
                ></HexColorInput>
                <AddColor
                  setColorsArray={setColorsArray}
                  colorsArray={colorsArray}
                  palleteColor={palleteColor}
                />
              </div>
            </div>
            <div className="h-56 overflow-auto">
              {colorsArray.map((color) => (
                <ColorButton
                  key={color.id}
                  bg={color.value}
                  onClick={() => setPalleteColor(color.value)}
                ></ColorButton>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
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

function AddColor({
  setColorsArray = { setColorsArray },
  colorsArray = { colorsArray },
  palleteColor = { palleteColor },
}) {
  return (
    <button
      onClick={() =>
        setColorsArray([...colorsArray, { id: nextId++, value: palleteColor }])
      }
      className="w-10 h-10 bg-white rounded-xl"
    >
      +
    </button>
  );
}
