import Image from "next/image";
import React, { useState } from "react";
import hand_hero from "../../public/hand_2.png";

function Hand({ palleteColor, handImage }) {
  return (
    <div className="flex justify-center">
      <Image
        src={handImage}
        width={1800}
        height={1800}
        alt="hand"
        className="max-w-md overflow-hidden md:max-w-xl"
        style={{
          backgroundColor: `${palleteColor}`,
        }}
        priority={true}
      />
    </div>
  );
}

export default Hand;