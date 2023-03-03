import React from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { setColorsArray, setPalleteColor } from "../../reducers/rootReducer";
import AddColor from "./AddColor";
import ColorSquare from "./ColorSquare";

function Color() {
  const dispatch = useDispatch();

  const colorsArray = useSelector((state) => state.app.colorsArray);
  const palleteColor = useSelector((state) => state.app.palleteColor);

  const handlePalleteColorChange = (color) => {
    dispatch(setPalleteColor(color));
  };

  const handleColorsArrayChange = (array) => {
    dispatch(setColorsArray(array));
  };

  return (
    <div className="mx-3 mb-3 flex flex-row">
      <div>
        <HexColorPicker
          color={palleteColor}
          onChange={handlePalleteColorChange}
          className="mt-3"
        ></HexColorPicker>
        <div className="flex">
          <HexColorInput
            color={palleteColor}
            onChange={handlePalleteColorChange}
            className="w-40 bg-white"
          ></HexColorInput>
          <AddColor
            setColorsArray={handleColorsArrayChange}
            colorsArray={colorsArray}
            palleteColor={palleteColor}
          />
        </div>
      </div>
      <div className="h-56 overflow-auto">
        {colorsArray.map((color) => (
          <ColorSquare
            key={color.id}
            bg={color.value}
            onClick={handlePalleteColorChange}
          ></ColorSquare>
        ))}
      </div>
    </div>
  );
}

export default Color;
