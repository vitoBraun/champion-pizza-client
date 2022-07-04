import React from "react";
import Catalog from "../components/catalog/catalog";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Catalog />
      <Footer />
    </>
  );
};

export default Home;
