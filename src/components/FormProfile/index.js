import React from "react";
import { BsPencil } from "react-icons/bs";
function FormProfile({
  title,
  label1,
  label2,
  label3,
  label4,
  value1,
  value2,
  value3,
  value4,
  valueRadio1,
  valueRadio2,
  isRadio,
  onChange1,
  onChange2,
  onChange3,
  onChange4,
  onChangeRadio1,
  onChangeRadio2,
  onClick,
  date
}) {
  return (
    <div className="rounded-xl bg-yellow-900 pb-4 flex-1 ">
      <div className="bg-white rounded-t-xl px-10 py-6">
        <div className="flex flex-row justify-between items-center mb-5">
          <h3 className="font-bold text-2xl ">{title}</h3>
          <button onClick={onClick} className="focus:outline-none">
            <BsPencil
              size={35}
              color="#fff"
              className="bg-yellow-900 rounded-full p-1"
            />
          </button>
        </div>
        <div className="flex flex-row space-x-10 pb-1 ">
          <div className="space-y-3 flex flex-col flex-1">
            <h5 className="text-gray-500 text-lg">{label1}</h5>
            <input
              className="border-b-2 border-gray-400 focus:outline-none cursor-default placeholder-black"
              type="text"
              value={value1}
              onChange={onChange1}
            />
            <h5 className="text-gray-500 text-lg">{label2}</h5>
            <input
              className="border-b-2 border-gray-400 focus:outline-none cursor-default placeholder-black"
              type="text"
              value={value2}
              onChange={onChange2}
            />
            {label3 ? (
              <div>
                <h5 className="text-gray-500 text-lg ">{label3}</h5>
                <input
                  className="border-b-2 border-gray-400 focus:outline-none w-full cursor-default placeholder-black"
                  type="text"
                  value={value3}
                  onChange={onChange3}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className=" flex flex-col flex-1">
            <h5 className="text-gray-500 text-lg pb-3">{label4}</h5>
            <input
              className="border-b-2 border-gray-400 focus:outline-none cursor-default placeholder-black"
              type={date ? 'date' : 'text'}
              value={value4}
              onChange={onChange4}
            />
            {isRadio ? (
              <div className="-ml-2">
                <div class="flex flex-row items-center mt-5 ">
                  <label class="radioGender m-3">
                    <input value={valueRadio1} onChange={onChangeRadio1} type="radio" name="gender" />
                    <span class="item"></span>
                  </label>
                  <p class="font-semibold text-gray-500">Male</p>
                </div>
                <div class="flex flex-row items-center mt-5 ">
                  <label class="radioGender m-3">
                    <input value={valueRadio2} onChange={onChangeRadio2} type="radio" name="gender" />
                    <span class="item"></span>
                  </label>
                  <p class="font-semibold text-gray-500">Female</p>
                </div>
              </div>
            ) : (
              <div className="h-36"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormProfile;
