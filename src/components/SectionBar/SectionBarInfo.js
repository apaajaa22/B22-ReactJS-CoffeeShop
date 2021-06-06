import React from "react";
import { Button } from "..";

function SectionBarInfo({ title, subTitle, buttonName }) {
  return (
    <section className="bg-white h-44 mx-32 py-7 -mt-24 rounded-xl shadow-lg flex flex-row items-center justify-between px-24 z-50 relative ">
      <div className="space-y-4">
        <h3 className="font-semibold text-3xl w-72">{title}</h3>
        <p className="text-gray-500">{subTitle}</p>
      </div>
      <div>
        <Button text={buttonName} />
      </div>
    </section>
  );
}

export default SectionBarInfo;
