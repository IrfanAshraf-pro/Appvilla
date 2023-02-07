import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import HeroContainer from "../components/HeroContainer";
import Overview from "../components/Overview";
import Pricing from "../components/Pricing";
import Features from "./Features";

const Homepage = () => {
  return (
    <main className="bg-bgcolor">
      <div className="flex items-center justify-center w-full pt-16 bg-main">
        <HeroContainer />
      </div>
      <div className="flex items-center justify-center w-full bg-bgcolor">
        <Features />
      </div>
      <div className="flex items-center justify-center w-full py-32 my-20 bg-main">
        <Overview />
      </div>
      <div className="flex items-center justify-center w-full my-2 mb-16">
        <Pricing />
      </div>
      <div className="flex items-center justify-center w-full py-20 mt-20 bg-main">
        <CTA />
      </div>
      <div className="flex items-center justify-center w-full bg-footerbg">
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
