import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Interview from "../../components/Category/Interview";
import Banner from "../../components/Banner";

const brandFocus = () => {
  const blogs = [];
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <Interview blogs={blogs} />
      <Footer />
    </div>
  );
};

export default brandFocus;
