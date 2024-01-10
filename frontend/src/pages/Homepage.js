import React from "react";
import "../styles/Homepage.css";
import Header from "../components/Header/Header";
import MainPage from "../components/HomePage/MainPage";
import Information from "../components/HomePage/Information";
import Pricing from "../components/HomePage/Pricing";
const Homepage = () => {
  return (
    <>
        <Header/>
        <MainPage/>
        <Information/>
        <Pricing/>
    </>
  );
};

export default Homepage;
