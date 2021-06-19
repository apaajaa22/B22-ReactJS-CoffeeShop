import React from "react";

function Form({ label, placeholder, ...rest }) {
  return (
    <div>
      <h4 className="font-semibold mb-5">{label}</h4>
      <input
        {...rest}
        className=" focus:outline-none border-2 border-gray-500 w-full py-4 rounded-xl px-5"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Form;
