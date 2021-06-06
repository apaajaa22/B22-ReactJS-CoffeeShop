import React from "react";

function Form({ label, placeholder }) {
  return (
    <div>
      <h4 className="font-semibold mb-5">{label}</h4>
      <input
        className=" focus:outline-none border-2 border-gray-500 w-full py-4 rounded-xl px-5"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Form;
