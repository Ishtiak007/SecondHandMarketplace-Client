import React from "react";
import Banner from "../../../components/modules/Home/Banner";
import PostYourProduct from "../../../components/modules/Home/PostProductLink";
import AllCategoryHomeSection from "../../../components/modules/Home/Categories";
import ShopNow from "../../../components/modules/Home/ShopNow";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AllCategoryHomeSection />
      <ShopNow />
      <PostYourProduct />
    </div>
  );
};

export default HomePage;
