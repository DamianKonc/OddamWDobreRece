import React from "react";
import Navigation from "./Navigation";
import HeaderTitle from "./HeaderTitle";
import MainButton from "./MainButton";

const Hero = () => {
  return (
    <div className="hero">
      <Navigation />
      <div className="hero__container">
        <HeaderTitle
          text="Zacznij pomagać!"
          text2=" Oddaj niechciane rzeczy w zaufane ręce"
        />
        <div className="hero__btns">
          <MainButton text="ODDAJ RZECZY" />
          <MainButton text="ZORGANIZUJ ZBIÓRKĘ" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
