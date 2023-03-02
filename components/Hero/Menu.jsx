import React, { useMemo } from "react";
import MenuButton from "./MenuItem";
import nail_form from "../../public/sidebar_icons/nail_form.png";
import nail_color from "../../public/sidebar_icons/nail_color.png";
import nail_effect from "../../public/sidebar_icons/nail_effect.png";

function Menu({ children }) {
  return <div className="mx-3 flex flex-row justify-center">{children}</div>;
}

export default Menu;
