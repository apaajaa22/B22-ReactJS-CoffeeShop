import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Button, Footer, Header, SectionBar } from "../../components";
import { addProducts } from "../../redux/actions/carts";
import { getDetailProducts } from "../../redux/actions/products";

function ProductDetail(props) {
  const { id } = useParams();
  const { details } = props.products;
  const [price, setPrice] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [variant, setVariant] = useState(null);

  useEffect(() => {
    if (details?.variants) {
      console.log("changing");
      const data = details?.variants.map((variant) => {
        return { ...variant, amount: 0 };
      });
      setVariant(data);
      console.log(`data`, data);
    }
  }, [details?.variants]);

  useEffect(() => {
    if (details?.base_price) {
      setPrice(details?.base_price);
    }
  }, [details]);

  useEffect(() => {
    props.getDetailProducts(id);
    return () => {
      setVariant(null);
    };
  }, []);

  const getPrice = (idx) => {
    const getPrice = details.variants[idx].price;

    setPrice(getPrice);
    setSelectedVariant(getPrice);
  };

  return (
    <div>
      <header className="px-32">
        <Header
          type="main"
          home="text-gray-500"
          product="text-yellow-900 font-bold"
          cart="text-gray-500"
          history="text-gray-500"
          isSearchInput
        />
      </header>
      <main>
        <section className="bg-gray-200 w-full h-full px-32 flex flex-row pb-40">
          <div className="w-fourpersen ml-20">
            <p className="text-sm my-10">
              Favorite & Promo{" "}
              <span>
                {">"} {details?.name}
              </span>
            </p>
            <div className="w-72 text-center space-y-5">
              <img
                src={details?.picture}
                alt="food"
                className="w-72 h-72 rounded-full object-cover"
              />
              <h3 className="text-4xl font-extrabold">{details?.name}</h3>
              <h4 className="text-2xl font-medium">
                IDR {price.toLocaleString("en")}
              </h4>
              <Button
                onClick={() => props.addProducts(variant)}
                type="brown"
                text="Add to Cart"
              />
              <Button type="main" text="Ask a Staff" />
            </div>
          </div>
          <div className="flex-1 ">
            <div className="w-wdetailbox h-hdetailbox bg-white mb-3  mt-10 p-20 rounded-xl">
              <p className="text-xl mb-10 w-72 text-yellow-900 font-medium">
                {details?.delivery_on}
              </p>
              <p className="text-xl w-96 text-yellow-900">
                {details?.description}
              </p>
              <p className="text-center font-bold text-xl py-5">
                Choose a size
              </p>
              <div className="space-x-16 flex flex-row justify-center ">
                {details?.variants?.map((variant, idx) => {
                  return (
                    <button
                      onClick={() => getPrice(idx)}
                      key={variant.id}
                      className="bg-yellow-400 w-16 h-16 rounded-full text-xl font-bold
                      focus:outline-none transform hover:scale-110 motion-reduce:transform-none"
                    >
                      {variant.code}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className=" flex flex-col items-center -ml-32">
              <h5 className="font-bold mb-3 text-lg">
                Choose Delivery Methods
              </h5>
              <div className="flex flex-row space-x-10 ">
                <button className="bg-yellow-900 p-3 rounded-lg text-white font-medium">
                  Dine in
                </button>
                <button
                  disable
                  className="bg-gray-300 cursor-not-allowed focus:outline-none p-3
                  rounded-lg text-gray-500 font-medium"
                >
                  Door Delivery
                </button>
                <button
                  disable
                  className="bg-gray-300 cursor-not-allowed focus:outline-none p-3
                  rounded-lg text-gray-500 font-medium"
                >
                  Pick Up
                </button>
              </div>
              <div className="flex flex-row space-x-2 w-full justify-center pt-5">
                <p>Set time: </p>
                <input
                  type="text"
                  placeholder="Enter the time you’ll arrived"
                  className="bg-gray-200 text-sm w-72 focus:outline-none border-b-2
                  border-gray-400"
                />
              </div>
            </div>
          </div>
        </section>
        <SectionBar
          variant={variant || []}
          onClick={() => props.addProducts(variant)}
          title={details?.name}
          picture={details?.picture}
          type="counter"
          stateValue={0}
          max={details?.quantity}
        />
        <footer className="px-32 my-32">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapdispatchToProps = { getDetailProducts, addProducts };

export default connect(mapStateToProps, mapdispatchToProps)(ProductDetail);
