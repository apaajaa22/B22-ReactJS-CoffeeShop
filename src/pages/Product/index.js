import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom"
import { Button, Coupon, Footer, Header, Item } from "../../components";
import { getCategory, getProductCategory } from "../../redux/actions/category";
import { getProducts } from "../../redux/actions/products";
import { getUser } from "../../redux/actions/users";
import qs from 'querystring'

function Product(props) {
  const { data } = props.products;
  const { data: categoryData } = props.category;
  const { productCategory } = props.category;
  useEffect(() => {
    props.getUser(props.auth.token);
    props.getProducts();
    props.getCategory();
  }, []);

  const loadMore = () => {
    const { nextPage } = props.products.pageInfo;
    if (nextPage !== null) {
      props.getProducts(nextPage);
    } else {
      window.alert("no more items");
    }
  };
  const loadMoreProdCat = () => {
    const { nextPage } = props.category.pageInfo;
    if (nextPage !== null) {
      props.getProductCategory(null, nextPage);
    } else {
      window.alert("no more items");
    }
  };

  const [isSearch, setIsSearch] = useState('')
  const [search, setSearch] = useState('')
  const history = useHistory()
  const location = useLocation()

  const onSearch = (e) => {
    if(e.key === "Enter"){
      history.push(`/products?search=${isSearch}`)
      setSearch(isSearch)
    }
  }
  // const parseQuery = (str) => {
  //   return qs.parse(str.slice('1'))
  // }
  // useEffect((e) => {
  //   const {search} = parseQuery(location.search)
  //   setIsSearch(search)
  // },[])

  return (
    <div>
      <header className="hidden md:block px-32">
        <Header
          type="main"
          home="text-gray-500"
          product="text-yellow-900 font-bold"
          cart="text-gray-500"
          history="text-gray-500"
          isSearchInput
          onKeyDown={onSearch}
          onChange={(e) => setIsSearch(e.target.value)}
          value={isSearch}
        />
      </header>
      <main>
        <section className="flex flex-row ">
          <div className="hidden md:block w-wcoupon bg-white h-full border-t-2 border-gray-300 border-r-2 flex flex-col">
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
            <ul className="my-8 md:flex md:flex-row  grid grid-cols-2 md:space-x-16 md:justify-center">
              {categoryData.map((cat) => {
                return (
                  <li className='text-center'>
                    <button
                      onClick={() => props.getProductCategory(cat.id)}
                      className="px-2 font-bold text-lg text-gray-400 border-white focus:outline-none focus:border-yellow-900 focus:text-yellow-900 border-b-2"
                    >
                      {cat.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-7 px-10 md:px-32">
              {props.category.productCategory < 1
                ? data.filter(item => item.name.toLowerCase().includes(search)).map((products) => {
                    return (
                      <Item
                        name={products.name}
                        price={products.price.toLocaleString("en")}
                        picture={products.picture}
                        to={`/products/${products.id}`}
                      />
                    );
                  })
                : productCategory.filter(item => item.name.toLowerCase().includes(search)).map((product) => {
                    if (props.category.productCategory === 0) {
                      return <></>;
                    }
                    return (
                      <Item
                        name={product.name}
                        price={product.price.toLocaleString("en")}
                        picture={product.picture}
                        to={`/products/${product.id}`}
                      />
                    );
                  })}
            </div>
            {props.category.productCategory < 1 ? (
              <div className=" flex flex-row justify-center mt-10">
                <div className="w-72">
                  <Button onClick={loadMore} type="square" text="Load More" />
                </div>
              </div>
            ) : (
              <div className=" flex flex-row justify-center mt-10">
                <div className="w-72">
                  <Button
                    onClick={loadMoreProdCat}
                    type="square"
                    text="Load More"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer className="px-32 py-20 bg-gray-100 hidden md:block">
        <Footer />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  category: state.category,

  auth: state.auth,
});
const mapDispatchToProps = {
  getProducts,
  getCategory,
  getProductCategory,
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
