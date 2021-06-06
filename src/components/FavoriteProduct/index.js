import React from "react";
import { Button } from "..";

function FavoriteProduct({
  pic,
  icon,
  title,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  price,
  buttonType,
  buttonName,
}) {
  return (
    <div className="rounded-lg border-2 border-gray-300 hover:border-yellow-900 pt-16 px-16 flex flex-col items-center bg-white">
      <img className="rounded-full w-36 h-36 mb-20" src={pic} alt="img food" />
      <h5 className="font-semibold text-lg mb-10">{title}</h5>
      <ul className="space-y-4 text-gray-500 flex-1 mb-10 ">
        <li className="flex flex-row space-x-5">
          <span>
            <img src={icon} alt="icon accept" />
          </span>
          <p>{list1}</p>
        </li>
        <li className="flex flex-row space-x-5">
          <span>
            <img src={icon} alt="icon accept" />
          </span>
          <p>{list2}</p>
        </li>
        <li className="flex flex-row space-x-5">
          <span>
            <img src={icon} alt="icon accept" />
          </span>
          <p>{list3}</p>
        </li>
        <li className="flex flex-row space-x-5">
          <span>
            <img src={icon} alt="icon accept" />
          </span>
          <p>{list4}</p>
        </li>
        <li className="flex flex-row space-x-5">
          {list5 ? (
            <span>
              <img src={icon} alt="icon accept" />
            </span>
          ) : (
            <></>
          )}
          <p>{list5}</p>
        </li>
        <li className="flex flex-row space-x-5">
          {list6 ? (
            <span>
              <img src={icon} alt="icon accept" />
            </span>
          ) : (
            <></>
          )}
          <p>{list6}</p>
        </li>
      </ul>
      <div className="flex flex-col items-center py-12">
        <p className="font-semibold text-2xl mb-5">IDR {price}</p>
        <Button type={buttonType} text={buttonName} />
      </div>
    </div>
  );
}

export default FavoriteProduct;
