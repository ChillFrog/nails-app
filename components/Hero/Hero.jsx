import Image from "next/image";
import nail_form from "../../public/sidebar_icons/nail_form.png";
import nail_color from "../../public/sidebar_icons/nail_color.png";
import nail_effect from "../../public/sidebar_icons/nail_effect.png";
import Search from "./Search.jsx";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import AddColor from "./AddColor";
import Hand from "./Hand";
import { shapes } from "../../utils/nail-styles";
import { HexColorInput, HexColorPicker } from "react-colorful";
import ColorSquare from "./ColorSquare";
import { useSelector, useDispatch } from "react-redux";
import {
  setPalleteColor,
  setHandImage,
  setColorsArray,
  setOpen,
} from "../../reducers/rootReducer";
import DragAndDrop from "./DragAndDrop";

function Hero() {
  const palleteColor = useSelector((state) => state.app.palleteColor);
  const handImage = useSelector((state) => state.app.handImage);
  const colorsArray = useSelector((state) => state.app.colorsArray);
  const open = useSelector((state) => state.app.open);

  const dispatch = useDispatch();

  const handlePalleteColorChange = (color) => {
    dispatch(setPalleteColor(color));
  };

  const handleHandImageChange = (image) => {
    dispatch(setHandImage(image));
  };

  const handleColorsArrayChange = (array) => {
    dispatch(setColorsArray(array));
  };

  const handleOpenChange = (value) => {
    dispatch(setOpen(value));
  };

  return (
    <div className="flex flex-col ">
      <Search />
      <Menu>
        <MenuItem
          src={nail_form}
          alt="nail form"
          text="Форма"
          setOpen={handleOpenChange}
        />
        <MenuItem
          src={nail_color}
          alt="nail color"
          text="Цвет"
          setOpen={handleOpenChange}
        />
        <MenuItem
          src={nail_effect}
          alt="nail effect"
          text="Узоры"
          setOpen={handleOpenChange}
        />
      </Menu>
      <DropdownMenu>
        <DropdownItem open={open} text="Форма">
          {shapes.map((shape) => (
            <button
              key={shape.name}
              onClick={() => {
                handleHandImageChange(shape.hand);
              }}
              className="m-3 shrink-0 snap-start first:snap-center"
            >
              <Image
                width={500}
                height={500}
                className="w-24 rounded-xl"
                src={`/${shape.image}`}
                alt={shape.name}
              />
            </button>
          ))}
        </DropdownItem>
        <DropdownItem text="Цвет" open={open}>
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
        </DropdownItem>
        <DropdownItem className="" text="Узоры" open={open}>
          <DragAndDrop />
        </DropdownItem>
      </DropdownMenu>
      <Hand
        setHandImage={handleHandImageChange}
        handImage={handImage}
        palleteColor={palleteColor}
      />
    </div>
  );
}

export default Hero;
