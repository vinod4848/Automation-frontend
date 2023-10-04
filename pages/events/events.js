import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import EventGridPagination from "../../components/EventGridPagination";
import Banner from "../../components/Banner";

const events = () => {
  const blogs = [];
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <EventGridPagination blogs={blogs} />
      <Footer />
    </div>
  );
};

export default events;
