import React from "react";
import { IcGoogle } from "../../assets";
import { Button, Footer, Form, Header, SectionBar } from "../../components";

function Register() {
  return (
    <div>
      <div className="flex flex-row ">
        <div className=" flex-1 bg-bg-form h-widthSection bg-cover bg-no-repeat" />
        <div className="flex-1">
          <Header type="form" label="Login" navigation="/login" />
          <main className="mt-20">
            <section>
              <h3 className="text-center font-bold text-2xl text-red-900">
                Sign Up
              </h3>
              <div className="px-32 space-y-6 mb-8">
                <Form
                  label="Email Address :"
                  placeholder="Enter your email address"
                />
                <Form
                  label="Password :"
                  placeholder="Enter your email password"
                />
                <Form
                  label="Phone Number :"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="px-32 pb-10 space-y-5">
                <Button type="square" text="Sign Up" />
                <Button
                  type="squaresec"
                  text="Sign Up with Google"
                  icon={IcGoogle}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
      <SectionBar
        type="info"
        title="Get your member card now!"
        subTitle="Let's join with our member and enjoy the deals."
        buttonName="Create Now"
      />
      <footer className="px-32 py-20">
        <Footer />
      </footer>
    </div>
  );
}

export default Register;
