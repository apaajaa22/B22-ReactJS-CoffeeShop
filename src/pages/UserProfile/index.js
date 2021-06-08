import React from "react";
import { BsPencil } from "react-icons/bs";
import { ILUser4 } from "../../assets";
import { Button, Footer, FormProfile, Header } from "../../components";
import { MdKeyboardArrowRight } from "react-icons/md";

function UserProfile() {
  return (
    <div>
      <header className="px-32">
        <Header
          type="secondary"
          home="text-gray-500"
          product="text-gray-500"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <main className="bg-bg-profile w-full h-full px-32 bg-cover">
        <section className="py-20">
          <h3 className="text-white text-2xl font-bold tracking-wide mb-10">
            User Profile
          </h3>
          <div className="flex flex-row space-x-10">
            <div className="bg-yellow-900 rounded-xl">
              <div className="bg-white rounded-t-xl px-10 py-12 pb-14 flex flex-col items-center justify-center space-y-4 ">
                <div className="relative flex flex-col w-28 h-28">
                  <img
                    className="w-28 h-28 rounded-full "
                    src={ILUser4}
                    alt="profile pic"
                  />
                  <button className="absolute bottom-0 right-1">
                    <BsPencil
                      size={30}
                      color="#fff"
                      className="bg-yellow-900 rounded-full p-1"
                    />
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl">Zulaikha</p>
                  <p className="text-xs">zulaikha17@gmail.com</p>
                </div>
                <p className="text-gray-500">Has been ordered 15 products</p>
              </div>
            </div>
            <FormProfile
              title="Contact"
              label1="Email address :"
              valuelabel1="zulaikha17@gmail.com"
              label2="Delivery address : adress :"
              valuelabel2="Iskandar Street no. 67 Block A Near Bus Stop"
              label4="Mobile number :"
              valuelabel4="(+62)813456782"
            />
          </div>
        </section>
        <section className="flex flex-row pb-20">
          <div className="flex-1">
            <FormProfile
              title="Details"
              label1="Display name :"
              valuelabel1="Zulaikha"
              label2="First name :"
              valuelabel2="Zulaikha"
              label3="Last name :"
              valuelabel3="Nirmala"
              label4="DD/MM/YY"
              valuelabel4="03/04/90"
              isRadio
            />
          </div>
          <div className="w-fourpersen flex flex-col items-center">
            <h3 className="text-white font-bold text-xl w-60 text-center mb-4">
              Do you want to save the change ?
            </h3>
            <div className="w-72 space-y-3">
              <Button type="brown" text="Save Change" />
              <Button type="main" text="Cancel" />
            </div>
            <div className="w-72 space-y-3 flex flex-col mt-3">
              <button className="bg-gray-300 text-lg font-bold text-yellow-900 px-5 py-3 rounded-lg flex flex-row justify-between items-center">
                <p>Edit Password</p>
                <MdKeyboardArrowRight size={28} />
              </button>
              <button className="bg-gray-300 text-lg font-bold text-yellow-900 px-5 py-3 rounded-lg flex flex-row justify-between items-center">
                <p>Log out</p>
                <MdKeyboardArrowRight size={28} />
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-32 py-14">
        <Footer />
      </footer>
    </div>
  );
}

export default UserProfile;
