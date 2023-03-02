import React from "react";

function DropdownItem({ text, open, children }) {
  return (
    <div
      className={`mx-3 flex snap-x overflow-visible rounded-xl bg-indigo-50 duration-300 ease-in-out ${
        open === text
          ? "translate-y-0 opacity-100"
          : "-translate-y-3 opacity-0 duration-500"
      }`}
    >
      {open == text && children}
    </div>
  );
}
export default DropdownItem;
