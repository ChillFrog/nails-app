import nail_form from "../public/dropdown_icons/nail_form.png";
import nail_color from "../public/dropdown_icons/nail_color.png";
import nail_effect from "../public/dropdown_icons/nail_effect.png";
import Search from "./Hero/Search.jsx";
import Menu from "./Hero/Menu";
import MenuItem from "./Hero/MenuItem";
import DropdownMenu from "./Hero/DropdownMenu";
import DropdownItem from "./Hero/DropdownItem";
import Hand from "./Hero/Hand";
import DragAndDrop from "./Hero/DragAndDrop";
import Shapes from "./Hero/Shapes";
import Color from "./Hero/Color";

function Hero() {
  return (
    <div className="flex flex-col">
      <Search />
      <Menu>
        <MenuItem src={nail_form} alt="nail form" text="Форма" />
        <MenuItem src={nail_color} alt="nail color" text="Цвет" />
        <MenuItem src={nail_effect} alt="nail effect" text="Узоры" />
      </Menu>
      <DropdownMenu>
        <DropdownItem text="Форма">
          <Shapes />
        </DropdownItem>
        <DropdownItem text="Цвет">
          <Color />
        </DropdownItem>
        <DropdownItem text="Узоры">
          <DragAndDrop />
        </DropdownItem>
      </DropdownMenu>
      <Hand />
    </div>
  );
}

export default Hero;
