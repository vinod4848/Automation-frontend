import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Article from "../../components/Category/Article";
import Banner from "../../components/Banner";

const brandFocus = () => {
  const blogs = [];
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <Article blogs={blogs} />
      <Footer />
    </div>
  );
};

export default brandFocus;
