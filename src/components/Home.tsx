import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AbooutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeThreeColumns />
      <SimpleSteps />
      <AbooutUs />
    </div>
  );
};

export default Home;
