import React from "react";
import { colors } from "../../utils/colors-styles";

let nextId = colors.length;

function AddColor({ setColorsArray, colorsArray, palleteColor }) {
  function handleAddColor() {
    setColorsArray([...colorsArray, { id: nextId++, value: palleteColor }]);
  }

  return (
    <button
      onClick={handleColorsArrayChange}
      className="h-10 w-10 rounded-xl bg-white"
    >
      +
    </button>
  );
}

export default AddColor;
