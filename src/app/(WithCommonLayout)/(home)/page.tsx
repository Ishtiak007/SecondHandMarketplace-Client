import React from "react";
import Banner from "../../../components/modules/Home/Banner";
import PostYourProduct from "../../../components/modules/Home/PostProductLink";
import AllCategoryHomeSection from "../../../components/modules/Home/Categories";
import ShopNow from "../../../components/modules/Home/ShopNow";
import Newsletter from "../../../components/modules/Home/NewsLetter";
import BlogSection from "../../../components/modules/Home/BlogSection";
import { TestimonialsCards } from "../../../components/modules/Home/Testimonials";
import HowItWorks from "../../../components/modules/Home/HowItWorks";
import CategoryOverview from "../../../components/modules/Home/CategoryOverview";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <CategoryOverview />
      <AllCategoryHomeSection />
      <ShopNow />
      <PostYourProduct />
      <BlogSection />
      <TestimonialsCards />
      <Newsletter />
    </div>
  );
};

export default HomePage;
