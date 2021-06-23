import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ILFood4 } from "../../assets";
import { Footer, Header, ItemCart, ItemHistory } from "../../components";
import { authLogout } from "../../redux/actions/auth";
import { getDetailHistory, getHistory } from "../../redux/actions/history";

function HistoryDetail(props) {
  const { slug } = useParams();
  const [setModal] = useState(false);
  const { history } = props.history;
  const { results } = props.history.details;
  const { invoice } = props.history.details;

  useEffect(() => {
    console.log("ini id", slug);
    props.getHistory(props.auth.token);
    props.getDetailHistory(props.auth.token, slug);
    console.log(invoice, results);
  }, [results, invoice, results]);

  const modalChecked = () => {
    setModal(true);
  };

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
                  key={item.id}
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
      <div className="bg-black bg-opacity-70 absolute top-0 w-full h-screen flex flex-col flex-1 justify-center items-center">
        <div className="w-threepersen bg-white rounded-xl py-10 px-10">
          <h4 className="text-yellow-800 text-2xl font-bold text-center">
            INVOICE
          </h4>
          <div className="border-b-2 border-gray-300 pb-2">
            {results.map((item) => {
              return (
                <ItemCart
                  pic={ILFood4}
                  name={item.name}
                  quantity={item.amount}
                  size={"variant"}
                  price={item.price.toLocaleString("en")}
                />
              );
            })}
          </div>
          <div className="flex flex-row items-center justify-between mt-5 ">
            <div className="leading-relaxed flex-1">
              <p>SUBTOTAL</p>
              <p>TAX & FEES</p>
              <p>SHIPPING</p>
              <p>PAYMENT METHOD</p>
              <p>ADDRESS</p>
            </div>
            <div className="leading-relaxed ">
              {invoice.map((res) => {
                const total = res.total - (res.tax + res.shipping_cost);
                return (
                  <div>
                    <p>IDR {total.toLocaleString("en")}</p>
                    <p>IDR {res.tax.toLocaleString("en")}</p>
                    <p>IDR {res.shipping_cost.toLocaleString("en")}</p>
                    <p className="uppercase"> {res.payment_method}</p>
                    <p className="uppercase"> {res.shipping_address}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row justify-between text-yellow-900 font-bold text-2xl pt-5">
            <p>TOTAL</p>
            {invoice.map((res) => {
              return <p>IDR {res.total.toLocaleString("en")}</p>;
            })}
          </div>
          <div className="flex flex-row justify-center mt-10">
            <Link
              to={`/history`}
              className="bg-yellow-900 text-white font-bold rounded-xl px-10 py-2 focus:outline-none tracking-widest"
            >
              CLOSE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth,
  history: state.history,
});

const mapDispatchToProps = { authLogout, getHistory, getDetailHistory };

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail);
