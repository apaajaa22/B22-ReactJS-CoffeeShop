import React from "react";
import { Button, Counter, Footer } from "..";
import { ILFood9 } from "../../assets";

function SectionBarCounter({ title, subTitle, buttonName }) {
  return (
    <section className="z-50 relative -mt-24 mx-32 flex flex-row space-x-10">
      <section className="bg-white h-36 w-full py-7 rounded-xl shadow-lg flex flex-row items-center justify-between px-24">
        <img src={ILFood9} alt="food" className="w-28 h-28 rounded-full" />
        <div className="flex-1 ml-10">
          <h4>Nasi</h4>
          <h5>x1 (large)</h5>
          <h5>x1 (medium)</h5>
        </div>
        <Counter />
      </section>
      <section className="w-80 h-36 rounded-xl bg-yellow-400">
        <button className="focus:outline-none w-full h-full text-2xl font-bold text-center">
          CHECKOUT
        </button>
      </section>
    </section>
  );
}

export default SectionBarCounter;
