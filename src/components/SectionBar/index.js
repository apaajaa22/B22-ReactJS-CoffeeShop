import React from "react";
import SectionBarCounter from "./SectionBarCounter";
import SectionBarInfo from "./SectionBarInfo";
import SectionBarStatus from "./SectionBarStatus";

function SectionBar({
  type,
  title,
  subTitle,
  buttonName,
  picture,
  stateValue,
  max,
  onClick,
  variant,
}) {
  switch (type) {
    case "status":
      return <SectionBarStatus />;
    case "info":
      return (
        <SectionBarInfo
          title={title}
          subTitle={subTitle}
          buttonName={buttonName}
        />
      );
    case "counter":
      console.log("asdasdasd", variant);
      return (
        <SectionBarCounter
          variant={variant}
          max={max}
          stateValue={stateValue}
          title={title}
          subTitle={subTitle}
          buttonName={buttonName}
          picture={picture}
          onClick={onClick}
        />
      );
    default:
      return <SectionBarStatus />;
  }
}

export default SectionBar;
