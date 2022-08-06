import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AbooutUs from "./AboutUs";
import Helping from "./Helping/Helping";
import ContactField from "../GiveBackForm/ContactField/ContactField";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    scroller.scrollTo(hash.slice(1), {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  }, [hash]);
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
