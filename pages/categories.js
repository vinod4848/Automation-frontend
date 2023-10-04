import React from "react";
import BlogGridPagination from "../components/BlogGridPagination";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "../components/Banner";

const categories = () => {
  const blogs = [];
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <BlogGridPagination blogs={blogs} />
      <Footer />
    </div>
  );
};

export default categories;
