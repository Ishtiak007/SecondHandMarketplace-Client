import React from "react";
import Banner from "../../../components/modules/Home/Banner";
import PostYourProduct from "../../../components/modules/Home/PostProductLink";
import AllCategoryHomeSection from "../../../components/modules/Home/Categories";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AllCategoryHomeSection />
      <PostYourProduct />
    </div>
  );
};

export default HomePage;
