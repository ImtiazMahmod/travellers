import React from "react";
import Footer from "../../Shared/Footer";
import Navigation from "../../Shared/Navigation";
import HomeBanner from "./HomeBanner";
import HomeBlog from "./HomeBlog/HomeBlog";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <div>
      {/* <HomeBanner></HomeBanner> */}
      <HomeCarousel></HomeCarousel>
      <HomeBlog itemsPerPage={5}></HomeBlog>
    </div>
  );
};

export default Home;
