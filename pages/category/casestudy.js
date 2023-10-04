import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Casestudy from "../../components/Category/Casestudy";
import Banner from "../../components/Banner";

const casestudy = () => {
  const blogs = [];
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <Casestudy blogs={blogs} />
      <Footer />
    </div>
  );
};

export default casestudy;
