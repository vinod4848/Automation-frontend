import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Products from "../../components/Category/Products.js";
import Banner from "../../components/Banner";

const brandFocus = () => {
  const blogs = [];
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <Products blogs={blogs} />
      <Footer />
    </div>
  );
};

export default brandFocus;
