import React from "react";
import ButtonSquare from "./ButtonSquare";
import ButtonFull from "./ButtonFull";
import ButtonSquareSec from "./ButtonSquareSec";

function Button({ type, text, icon }) {
  switch (type) {
    case "square":
      return <ButtonSquare text={text} />;
    case "squaresec":
      return <ButtonSquareSec text={text} icon={icon} />;
    case "full":
      return <ButtonFull text={text} />;
    default:
      return <ButtonSquare text={text} />;
  }
}

export default Button;
