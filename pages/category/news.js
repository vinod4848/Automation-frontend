import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import News from "../../components/Category/News";
import Banner from "../../components/Banner";

const brandFocus = () => {
  const blogs = [];
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <News blogs={blogs} />
      <Footer />
    </div>
  );
};

export default brandFocus;
