import React from "react";
import Image from "next/image";
import { setOpen } from "../../reducers/rootReducer";
import { useDispatch } from "react-redux";

const menuButtonStyle =
  "flex items-center justify-center w-full mx-1 text-center font-medium rounded-xl py-2 px-2 bg-indigo-50";

const MenuButton = function MenuButton({ src, alt, text }) {
  const dispatch = useDispatch();

  const handleOpenChange = (text) => {
    dispatch(setOpen(text));
  };

  return (
    <button onClick={() => handleOpenChange(text)} className={menuButtonStyle}>
      <Image loading="eager" src={src} width={64} className="w-14" alt={alt} />
      {text}
    </button>
  );
};

export default MenuButton;
