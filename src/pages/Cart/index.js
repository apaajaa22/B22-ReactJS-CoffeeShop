import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Footer,
  Header,
  ItemCart,
  PaymentMethod,
} from "../../components";
import { authLogout } from "../../redux/actions/auth";
import { getUser } from "../../redux/actions/users";
import { createTransaction } from "../../redux/actions/carts";

class Cart extends Component {
  componentDidMount() {
    this.props.getUser(this.props.auth.token);
  }

  onCheckout = () => {
    const { products } = this.props.carts;
    const { token } = this.props.auth;
    this.props.createTransaction(products, token);
  };

  render() {
    const { products } = this.props.carts;
    const { users } = this.props.users;

    const price = products.map((data) =>
      data
        .filter((item) => item.amount !== 0)
        .map((item, idx) => parseInt(item.price) * parseInt(item.amount))
    )
    const itemTotal = price.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
    const tax = itemTotal * (10 /100)
    const shippingFee = 10000
    const grandPrice = itemTotal+tax+shippingFee

    return (
      <section>
        <header className="hidden md:block px-32">
          <Header
            type="secondary"
            home="text-gray-500"
            product="text-gray-500"
            cart="text-yellow-900 font-bold"
            history="text-gray-500"
          />
        </header>
        <main className="bg-bg-cart w-full md:h-full h-screen md:px-32 px-16 bg-cover bg-center pb-20">
          <h3 className="text-white font-bold md:w-56 text-2xl shadow-2xl py-10">
            Checkout your item now!
          </h3>
          <div className="flex md:flex-row flex-col">
            <section className=" bg-white h-full rounded-xl py-16 ">
              {products.length < 1 ? (
                <h4 className="md:px-16 text-yellow-800 text-2xl font-bold text-center">
                  You don't have any orders
                </h4>
              ) : (
                <div>
                  <h4 className="text-yellow-800 text-2xl font-bold text-center">
                    Order Summary
                  </h4>
                  <div className="border-b-2 border-gray-300 md:px-5 px-5 pb-2">
                    {products.map((data) =>
                      data
                        .filter((item) => item.amount !== 0)
                        .map((item, idx) => (
                          <ItemCart
                            pic={
                              item?.picture !== undefined ? item?.picture : null
                            }
                            name={item?.product}
                            quantity={item?.amount}
                            size={item?.name}
                            price={item?.price.toLocaleString("en")}
                          />
                        ))
                    )}
                  </div>
                  <div className="flex flex-row items-center justify-between mt-5 md:px-5 px-5">
                    <div className="leading-relaxed flex-1">
                      <p>SUBTOTAL</p>
                      <p>TAX & FEES</p>
                      <p>SHIPPING</p>
                    </div>
                    <div className="leading-relaxed ">
                      <p>IDR {itemTotal.toLocaleString('en')}</p>
                      <p>IDR {tax.toLocaleString('en')}</p>
                      <p>IDR {shippingFee.toLocaleString('en')}</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between md:px-5 px-5 text-yellow-900 font-bold text-2xl pt-5">
                    <p>TOTAL</p>
                    <p>IDR {grandPrice.toLocaleString('en')}</p>
                  </div>
                </div>
              )}
            </section>
            <section className="flex-1 md:ml-20 md:px-28 md:pr-52 md:pr-0 md:-mt-12">
              {products.length < 1 ? <div></div>
              : <div>
                  <div className="text-white font-bold flex flex-row justify-between md:mb-5 md:mt-0 mt-5">
                    <p className="text-xl">Address details</p>
                    <button className="focus:outline-none">edit</button>
                  </div>
                  {users.map((user) => {
                    return (
                      <div className="bg-white w-full p-10 space-y-3 rounded-2xl">
                        <p className="border-b-2 border-gray-300 py-1">
                          <span className="font-bold">Delivery to</span>
                        </p>
                        <div className="border-b-2 border-gray-300 ">
                          <p className="py-1 md:w-96">{user.address}</p>
                        </div>
                        <p>{user.phone_number}</p>
                      </div>
                    );
                  })}
                  <p className="text-white pt-5 pb-2 font-bold text-xl">
                    Payment Method
                  </p>
                  <div className="space-y-4">
                    <PaymentMethod />
                    <Button
                      onClick={this.onCheckout}
                      type="brown"
                      text="Confirm and Pay"
                    />
                </div>
              </div>}
            </section>
          </div>
        </main>
        <footer className="hidden md:block px-32 py-20">
          <Footer />
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  carts: state.carts,
  auth: state.auth,
  users: state.users,
  message: state.message,
});

const mapDispatchToProps = { authLogout, getUser, createTransaction };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
