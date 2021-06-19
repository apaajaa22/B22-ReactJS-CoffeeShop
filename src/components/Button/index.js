import React from "react";
import ButtonSquare from "./ButtonSquare";
import ButtonFull from "./ButtonFull";
import ButtonSquareSec from "./ButtonSquareSec";
import ButtonSquareBrown from "./ButtonSquareBrown";

function Button({ type, text, icon, ...rest }) {
  switch (type) {
    case "square":
      return <ButtonSquare text={text} {...rest} />;
    case "brown":
      return <ButtonSquareBrown text={text} {...rest} />;
    case "squaresec":
      return <ButtonSquareSec text={text} icon={icon} {...rest} />;
    case "full":
      return <ButtonFull text={text} {...rest} />;
    default:
      return <ButtonSquare text={text} {...rest} />;
  }
}

export default Button;
