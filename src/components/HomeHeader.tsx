import React from "react";
import Hero from "./Hero";
import HeroImg from "./HeroImg";

const HomeHeader = () => {
  return (
    <header className="homeHeader">
      <HeroImg />
      <Hero />
    </header>
  );
};

export default HomeHeader;
