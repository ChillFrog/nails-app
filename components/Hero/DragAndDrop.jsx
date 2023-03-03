import { useState } from "react";

function DragAndDrop() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = (e) => {
    setPosition({
      x: e.clientX - 40,
      y: e.clientY - 240,
    });
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return <div className="h-48"></div>;
}

export default DragAndDrop;
