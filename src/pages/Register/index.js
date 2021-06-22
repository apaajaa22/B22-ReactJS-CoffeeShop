import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IcGoogle } from "../../assets";
import {
  Alert,
  Button,
  Footer,
  Form,
  Header,
  SectionBar,
} from "../../components";
import { authRegister } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";

function Register(props) {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { message, isRegister } = props.auth;

  const isLogin = () => {
    if (isRegister) {
      history.push("/login");
      window.alert("Register successfully");
    }
  };
  useEffect(() => {
    isLogin();
  }, [isLogin]);

  const onRegister = () => {
    props.authRegister(email, password, phoneNumber);
  };

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
              {message !== "" && <Alert message={message} />}
              <div className="px-32 space-y-6 mb-8">
                <Form
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address :"
                  placeholder="Enter your email address"
                />
                <Form
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password :"
                  placeholder="Enter your email password"
                />
                <Form
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  label="Phone Number :"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="px-32 pb-10 space-y-5">
                <Button onClick={onRegister} type="square" text="Sign Up" />
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
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { authRegister };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
