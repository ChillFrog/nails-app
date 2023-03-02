import React from "react";

const ColorSquare = ({ bg, onClick }) => {
  return (
    <button
      type="button"
      className={`ml-3 mt-3 h-14 w-14 rounded-xl `}
      style={{ backgroundColor: `${bg}` }}
      onClick={() => onClick(bg)}
    >
      {}
    </button>
  );
};

export default ColorSquare;
