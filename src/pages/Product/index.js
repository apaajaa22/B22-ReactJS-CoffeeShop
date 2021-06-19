import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Coupon, Footer, Header, Item } from "../../components";
import { getProducts } from "../../redux/actions/products";

function Product(props) {
  useEffect(() => {
    props.getProducts();
  }, []);

  const { data } = props.products;

  const loadMore = () => {
    const { nextPage } = props.products.pageInfo;
    props.getProducts(nextPage);
  };

  return (
    <div>
      <header className="px-32">
        <Header
          type="secondary"
          home="text-gray-500"
          product="text-yellow-900 font-bold"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <main>
        <section className="flex flex-row ">
          <div className="w-wcoupon bg-white h-full border-t-2 border-gray-300 border-r-2">
            <div className="flex flex-col items-center">
              <h4 className="text-center text-xl text-yellow-900 font-semibold my-8">
                Promo for you
              </h4>
              <p className="text-center text-sm mb-10 w-64">
                Coupons will be updated every weeks. Check them out!
              </p>
              <Coupon />
            </div>
            <div className="px-20 py-10">
              <Button type="brown" text="Apply Coupon" />
            </div>
            <div className="px-20 py-16">
              <h5 className="text-black font-semibold -ml-4">
                Terms and Condition
              </h5>
              <ol className="text-gray-500 list-decimal text-sm">
                <li>You can only apply 1 coupon per day</li>
                <li>It only for dine in</li>
                <li>Buy 1 get 1 only for new user</li>
                <li>Should make member card to apply coupon</li>
              </ol>
            </div>
          </div>
          <div className="flex-1 bg-white h-full border-t-2 border-gray-300 flex-col flex ">
            <ul className="my-8 flex flex-row space-x-16 justify-center">
              <li>
                <button className="px-2 font-bold text-lg text-gray-400 border-white focus:outline-none focus:border-yellow-900 focus:text-yellow-900 border-b-2">
                  Favorite Product
                </button>
              </li>
              <li>
                <button className="px-2 font-bold text-lg text-gray-400 border-white focus:outline-none focus:border-yellow-900 focus:text-yellow-900 border-b-2">
                  Coffee
                </button>
              </li>
              <li>
                <button className="px-2 font-bold text-lg text-gray-400 border-white focus:outline-none focus:border-yellow-900 focus:text-yellow-900 border-b-2">
                  Non Coffee
                </button>
              </li>
              <li>
                <button className="px-2 font-bold text-lg text-gray-400 border-white focus:outline-none focus:border-yellow-900 focus:text-yellow-900 border-b-2">
                  Foods
                </button>
              </li>
              <li>
                <button className="px-2 font-bold text-lg text-gray-400 border-white focus:outline-none focus:border-yellow-900 focus:text-yellow-900 border-b-2">
                  Add-on
                </button>
              </li>
            </ul>
            <div className="grid grid-cols-4 gap-7 px-32">
              {data.map((products) => {
                return (
                  <Item
                    key={products.id}
                    name={products.name}
                    price={products.price.toLocaleString("en")}
                    picture={products.picture}
                    to={`/products/${products.id}`}
                  />
                );
              })}
            </div>
            <div className=" flex flex-row justify-center mt-10">
              <div className="w-72">
                <Button onClick={loadMore} type="square" text="Load More" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-32 py-20 bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = { getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
