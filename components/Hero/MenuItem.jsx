import React from "react";
import Image from "next/image";

const menuButtonStyle =
  "flex items-center justify-center w-full mx-1 text-center font-medium rounded-xl py-2 px-2 bg-indigo-50";

const MenuButton = function MenuButton({ setOpen, src, alt, text }) {
  function handleOpen() {
    setOpen(text);
  }
  return (
    <button onClick={handleOpen} className={menuButtonStyle}>
      <Image src={src} width={64} className="w-14" alt={alt} />
      {text}
    </button>
  );
};

export default MenuButton;
