import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AbooutUs from "./AboutUs";
import Helping from "./Helping";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeThreeColumns />
      <SimpleSteps />
      <AbooutUs />
      <Helping />
    </div>
  );
};

export default Home;
