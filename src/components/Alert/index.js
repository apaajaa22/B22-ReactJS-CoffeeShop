import React from "react";

function Alert({ errMessage }) {
  return (
    <div
      class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mx-32 rounded-xl my-3"
      role="alert"
    >
      <p class="font-bold">Be Warned</p>
      <p>{errMessage}</p>
    </div>
  );
}

export default Alert;
