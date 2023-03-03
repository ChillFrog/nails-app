import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { setHandImage } from "../../reducers/rootReducer";
import { shapes } from "../../utils/nail-styles";

function Shapes() {
  const dispatch = useDispatch();
  const handleHandImageChange = (image) => {
    dispatch(setHandImage(image));
  };
  return (
    <>
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
    </>
  );
}

export default Shapes;
