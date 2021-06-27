import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IcGoogle } from "../../assets";
import {
  Alert,
  Button,
  Footer,
  Form,
  Header,
  SectionBar,
} from "../../components";
import { toggleAuth, authLogin, clearMessage } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";

function Login(props) {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token } = props.auth;
  const { message } = props.message;

  const isLogin = () => {
    if (token !== null) {
      history.push("/");
    }
  };
  const onLogin = () => {
    props.authLogin(email, password);
  };

  useEffect(() => {
    props.toggleAuth();
    props.clearMessage();
    isLogin();
  }, [token]);

  return (
    <div>
      <div className="flex flex-row ">
        <div className=" flex-1 bg-bg-form h-widthSection bg-cover bg-no-repeat" />
        <div className="flex-1">
          <Header type="form" label="Sign Up" navigation="/register" />
          <main className="mt-20">
            <section>
              <h3 className="text-center font-bold text-2xl text-red-900">
                Login
              </h3>
              {message !== "" && <Alert message={message} />}
              <form className="px-32 space-y-6 mb-8">
                <Form
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address :"
                  placeholder="Enter your email address"
                />
                <Form
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password :"
                  placeholder="Enter your email password"
                />
              </form>
              <Link
                className="px-32 underline text-yellow-900 font-bold"
                to="/forgotpassword"
              >
                Forgot Password ?
              </Link>
              <div className="px-32 py-10 space-y-5">
                <Button onClick={onLogin} type="square" text="Login" />
                <Button
                  type="squaresec"
                  text="Login with Google"
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
  message: state.message,
});
const mapDispatchToProps = { toggleAuth, authLogin, clearMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
