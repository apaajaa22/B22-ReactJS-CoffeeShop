import React from "react";
import { Logo } from "..";
import { IcFacebook, IcInstagram, IcTwitter } from "../../assets";

function Footer() {
  return (
    <div className="flex flex-row justify-between">
      <div className="space-y-5">
        <div className="-ml-56">
          <Logo />
        </div>
        <p className="text-gray-500 w-96 font-semibold">
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </p>
        <div className="flex flex-row -space-x-5 -ml-5">
          <img
            className=" w-20 h-20 rounded-full"
            src={IcFacebook}
            alt="icon facebook"
          />
          <img
            className=" w-20 h-20 rounded-full"
            src={IcTwitter}
            alt="icon Twitter"
          />
          <img
            className=" w-20 h-20 rounded-full"
            src={IcInstagram}
            alt="icon Instagram"
          />
        </div>
        <p className="text-gray-500">©2020CoffeeStore</p>
      </div>
      <div className="flex flex-row space-x-20">
        <div className="space-y-5">
          <h5 className="font-bold">Product</h5>
          <ul className="text-gray-500 space-y-2">
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="space-y-5">
          <h5 className="font-bold">Engage</h5>
          <ul className="text-gray-500 space-y-2">
            <li>Coffe Shop ? </li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
