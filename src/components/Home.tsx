import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AbooutUs from "./AboutUs";
import Helping from "./Helping";
import ContactField from "./ContactField";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="home" style={{ position: "relative" }}>
      <HomeHeader />
      <HomeThreeColumns />
      <SimpleSteps />
      <AbooutUs />
      <Helping />
      <ContactField />
      <Footer />
    </div>
  );
};

export default Home;
