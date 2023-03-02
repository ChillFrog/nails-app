import Image from "next/image";
import { useState } from "react";
import nail_effect from "../../public/sidebar_icons/nail_effect.png";

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

  return (
    <div className="h-48">
      <Image
        src={nail_effect}
        alt="your-image"
        style={{ position: "absolute", left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}

export default DragAndDrop;
