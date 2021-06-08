import React from "react";
import { Button, Footer } from "../../components";
function ForgotPassword() {
  return (
    <div>
      <main className="bg-bg-password w-screen h-screen bg-cover py-32">
        <section className="text-center mb-20">
          <h3 className="text-white text-4xl font-bold">
            Forgot your password?
          </h3>
          <h4 className="text-white text-xl font-medium">
            Don't worry, we got your back!
          </h4>
        </section>
        <section className="flex flex-row px-64 space-x-10 items-center">
          <input
            className="w-full rounded-xl p-5 focus:outline-none text-xl"
            type="text"
            placeholder="Enter your email adress to get link"
          />
          <div>
            <Button type="main" text="Send" />
          </div>
        </section>

        <section className="text-white font-bold text-xl flex flex-col items-center space-y-8 mt-20">
          <p className="w-96 text-center">
            Click here if you didn’t receive any link in 2 minutes
          </p>
          <div className="w-60">
            <Button type="brown" text="Resend Link" />
          </div>
          <p>01:54</p>
        </section>
      </main>
      <footer className="px-32 py-20">
        <Footer />
      </footer>
    </div>
  );
}

export default ForgotPassword;
