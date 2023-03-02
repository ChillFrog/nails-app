import React from "react";

function Menu({ children }) {
  return (
    <div className="mx-3 mb-3 flex flex-row justify-center">{children}</div>
  );
}

export default Menu;
