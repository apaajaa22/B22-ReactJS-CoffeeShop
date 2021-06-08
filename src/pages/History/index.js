import React, { useState } from "react";
import { Footer, Header, ItemHistory } from "../../components";
function History() {
  const [modal, setModal] = useState(false);
  const modalChecked = () => {
    setModal(true);
  };
  const modalClosed = () => {
    setModal(false);
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
            <button
              onClick={modalChecked}
              className="text-white float-right focus:outline-none hover:underline px-32"
            >
              Delete
            </button>
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-5 px-32">
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
            <ItemHistory />
          </div>
        </main>
        <footer className="px-32 py-20">
          <Footer />
        </footer>
      </div>
      {modal && (
        <section className="bg-black bg-opacity-70 absolute top-0 w-full h-screen flex flex-col flex-1 justify-center items-center">
          <div className="bg-white rounded-lg flex flex-col p-10">
            <p className="flex text-center justify-center font-medium">
              Are you sure want to delete the selected items?
            </p>
            <div className="flex flex-row justify-between mt-8">
              <button
                onClick={modalClosed}
                className="focus:outline-none bg-gray-100 text-yellow-900 font-bold border-2 border-yellow-900  px-8 py-2  rounded-xl "
              >
                Cancel
              </button>
              <button className="focus:outline-none bg-yellow-900 text-white font-bold border-2 border-yellow-900  px-8 py-2 rounded-xl ">
                Delete
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default History;
