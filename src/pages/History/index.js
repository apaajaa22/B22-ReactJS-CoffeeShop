import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer, Header, ItemCart, ItemHistory } from "../../components";
import { authLogout } from "../../redux/actions/auth";
import { getHistory } from "../../redux/actions/history";

function History(props) {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const modalChecked = () => {
    setModal(true);
  };
  const modalClosed = () => {
    setModal(false);
  };

  const { history } = props.history;

  useEffect(() => {
    console.log(props.auth);
    props.getHistory(props.auth.token);
    console.log("id", id);
  }, []);

  return (
    <>
      <div>
        <header className="px-32">
          <Header
            type="secondary"
            home="text-gray-500"
            product="text-gray-500"
            cart="text-gray-500"
            history="text-yellow-900 font-bold"
            onClick={props.authLogout}
          />
        </header>
        <main className="bg-bg-history w-full h-full bg-cover bg-center px-32 py-20 flex flex-col ">
          <section className="flex flex-col items-center">
            <h3 className="text-white text-2xl font-medium">
              Let’s see what you have bought!
            </h3>
            <h4 className="text-white text-sm">Select item to delete</h4>
          </section>
          <div className="my-10 ">
            <button className="text-white float-right focus:outline-none hover:underline px-32">
              Delete
            </button>
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-5 px-32">
            {history.map((item) => {
              return (
                <ItemHistory
                  onClick={modalChecked}
                  code={item.code}
                  total={item.total.toLocaleString("en")}
                  payment={item.payment_method}
                />
              );
            })}
          </div>
        </main>
        <footer className="px-32 py-20">
          <Footer />
        </footer>
      </div>
      {modal && (
        <div className="bg-black bg-opacity-70 absolute top-0 w-full h-screen flex flex-col flex-1 justify-center items-center">
          <div className="w-threepersen bg-white rounded-xl py-10 px-10">
            <h4 className="text-yellow-800 text-2xl font-bold text-center">
              INVOICE
            </h4>
            <div className="border-b-2 border-gray-300 pb-2">
              <ItemCart
                key={"id"}
                pic={"picture"}
                name={"product"}
                quantity={1}
                size={"name"}
                price={"120000"}
              />
            </div>
            <div className="flex flex-row items-center justify-between mt-5 ">
              <div className="leading-relaxed flex-1">
                <p>SUBTOTAL</p>
                <p>TAX & FEES</p>
                <p>SHIPPING</p>
              </div>
              <div className="leading-relaxed ">
                <p>IDR 120.000</p>
                <p>IDR 20.000</p>
                <p>IDR 10.000</p>
              </div>
            </div>
            <div className="flex flex-row justify-between text-yellow-900 font-bold text-2xl pt-5">
              <p>TOTAL</p>
              <p>IDR 150.000</p>
            </div>
            <div className="flex flex-row justify-center mt-10">
              <button
                onClick={modalClosed}
                className="bg-yellow-900 text-white rounded-xl px-10 py-2 focus:outline-none"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth,
  history: state.history,
});

const mapDispatchToProps = { authLogout, getHistory };

export default connect(mapStateToProps, mapDispatchToProps)(History);
