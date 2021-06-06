import React from "react";
import {
  IcAcc,
  IcAccV2,
  ILFood1,
  ILFood2,
  ILFood3,
  ILMap,
  ILPartner,
  IlTeamWork,
  ILUser1,
  ILUser2,
  ILUser3,
} from "../../assets";
import {
  Button,
  CommentBox,
  FavoriteProduct,
  Footer,
  Header,
  Search,
  SectionBar,
  Slider,
} from "../../components";
function Home() {
  return (
    <div>
      <header className="px-32 sticky top-0 bg-white">
        <Header />
      </header>
      <main>
        <section className="bg-bg-hero bg-cover w-full h-screen bg-center px-32 flex-row flex">
          <div className="pt-20 tracking-wide flex-1 flex-col space-y-7">
            <h2 className="text-white text-5xl font-bold leading-tight">
              Start Your Day with <br /> Coffee and Good Meals
            </h2>
            <p className="text-white text-lg font-bold leading-relaxed tracking-wide ">
              We provide high quality beans, good taste, and healthy <br />
              meals made by love just for you. Start your day with us <br /> for
              a bigger smile!
            </p>
            <div className="w-56">
              <Button type="square" text="Get Started" />
            </div>
          </div>
          <div className=" flex-col pt-5">
            <Search />
          </div>
        </section>
        <SectionBar type="status" />
        <section className="py-24 px-32 flex flex-row justify-between items-center space-x-48">
          <img src={IlTeamWork} alt="illustration team work" />
          <div className="space-y-8">
            <h3 className="font-bold text-4xl ">
              We Provide Good Coffee and Healthy Meals
            </h3>
            <p className="text-gray-500">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>
            <ul className="space-y-4">
              <li className="flex flex-row items-center">
                <span className="mr-2">
                  <img src={IcAcc} alt="icon accept" />
                </span>
                High quality beans
              </li>
              <li className="flex flex-row items-center">
                <span className="mr-2">
                  <img src={IcAcc} alt="icon accept" />
                </span>{" "}
                Healthy meals, you can request the ingredients
              </li>
              <li className="flex flex-row items-center">
                <span className="mr-2">
                  <img src={IcAcc} alt="icon accept" />
                </span>{" "}
                Chat with our staff to get better experience for ordering
              </li>
              <li className="flex flex-row items-center">
                <span className="mr-2">
                  <img src={IcAcc} alt="icon accept" />
                </span>{" "}
                Free member card with a minimum purchase of IDR 200.000.
              </li>
            </ul>
          </div>
        </section>
        <section className="px-32 flex flex-col items-center bg-gray-100 py-20">
          <h3 className="text-4xl font-semibold mb-5">
            Here is People’s Favorite
          </h3>
          <p className="text-gray-500 mb-16">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
          <div className="flex flex-row space-x-12">
            <FavoriteProduct
              pic={ILFood1}
              title="Hazelnut Latte"
              icon={IcAccV2}
              list1="HazelnutSyrup"
              list2="Wanilla Whipped Cream"
              list3="Ice / Hot"
              list4="Sliced Banana on Top"
              price="25.000"
              buttonType="full"
              buttonName="Order Now"
            />
            <FavoriteProduct
              pic={ILFood2}
              title="Pinky Promise"
              icon={IcAccV2}
              list1="1 Shot of Coffee"
              list2="Vanilla Whipped Cream"
              list3="Chocolate Biscuits"
              list4="Strawberry Syrup"
              list5="Sliced strawberry on Top"
              price="30.000"
              buttonType="full"
              buttonName="Order Now"
            />
            <FavoriteProduct
              pic={ILFood3}
              title="Chicken Wings"
              icon={IcAccV2}
              list1="Wings"
              list2="Drum Sticks"
              list3="Mayonaise and Lemon"
              list4="Hot Fried"
              list5="Secret Recipe"
              list6="Buy 1 Get 1 only for Dine in"
              price="40.000"
              buttonType="full"
              buttonName="Order Now"
            />
          </div>
        </section>
        <section className="px-32 flex flex-col items-center bg-gray-100 pb-20">
          <div className="text-4xl font-medium text-center mt-20 mb-10">
            <h3>Visit Our Store in the </h3>
            <h3>Spot on the Map Below</h3>
          </div>
          <p className="text-gray-500 mb-20">
            See our store in every city on the spot and spen your good day
            there. See you soon!
          </p>
          <img src={ILMap} alt="img world" />
        </section>
        <section className="flex flex-col items-center bg-gray-100 px-32">
          <h3 className="font-semibold text-4xl ">Our Partner</h3>
          <img src={ILPartner} alt="img partner" />
        </section>
        <section className=" px-32 flex flex-col items-center bg-gray-100 pt-10">
          <div className="text-center font-semibold text-4xl">
            <h3>Loved by Thousands of</h3>
            <h3>Happy Customer</h3>
          </div>
          <p className="text-center text-gray-500 mt-16">
            These are the stories of our customers who have visited us with
            great <br /> pleasure.
          </p>
          <div className="flex flex-row space-x-10 mt-20 overflow-x-scroll pb-20">
            <CommentBox
              pic={ILUser1}
              name="Viezh Robert"
              origin="Warsaw, Poland"
              rate="4.5"
              desc="“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"
            />
            <CommentBox
              pic={ILUser2}
              name="Yessica Christy"
              origin="Shanxi, China"
              rate="4.5"
              desc="“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte"
            />
            <CommentBox
              pic={ILUser3}
              name="Kim Young Jou"
              origin="Seoul, South Korea"
              rate="4.5"
              desc="“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!"
            />
          </div>
        </section>
        <Slider />
        <SectionBar
          type="info"
          buttonName="See promo"
          title="Check our promo today!"
          subTitle="Let's see the deals and pick yours!"
        />
      </main>
      <footer className="pt-40 px-32 mb-5">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
