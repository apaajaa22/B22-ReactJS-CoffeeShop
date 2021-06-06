import React from "react";
import SectionBarInfo from "./SectionBarInfo";
import SectionBarStatus from "./SectionBarStatus";

function SectionBar({ type, title, subTitle, buttonName }) {
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
    default:
      return <SectionBarStatus />;
  }
}

export default SectionBar;
