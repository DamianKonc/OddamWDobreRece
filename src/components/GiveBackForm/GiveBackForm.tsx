import React, { useState } from "react";
import ContactField from "./ContactField/ContactField";
import Footer from "../Footer/Footer";
import StepOne from "./StepOne";
import GiveBackFormHero from "./GiveBackFormHero";
import GiveBackFormImportant from "./GiveBackFormImportant";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFourth from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

const GiveBackForm = () => {
  const [steps, setSteps] = useState(1);

  const increseSteps = () => {
    setSteps((prev) => (prev = prev + 1));
  };

  const decreaseSteps = () => {
    setSteps((prev) => (prev = prev - 1));
  };

  switch (steps) {
    case 1:
      return (
        <div className="giveBackForm">
          <GiveBackFormHero />
          <GiveBackFormImportant />
          <div className="giveBackFrom__form">
            <StepOne increase={increseSteps} />
          </div>
          <ContactField />
          <Footer />
        </div>
      );
    case 2:
      return (
        <div className="giveBackForm">
          <GiveBackFormHero />
          <GiveBackFormImportant />
          <div className="giveBackFrom__form">
            <StepTwo increase={increseSteps} decrease={decreaseSteps} />
          </div>
          <ContactField />
          <Footer />
        </div>
      );
    case 3:
      return (
        <div className="giveBackForm">
          <GiveBackFormHero />
          <GiveBackFormImportant />
          <div className="giveBackFrom__form">
            <StepThree increase={increseSteps} decrease={decreaseSteps} />
          </div>
          <ContactField />
          <Footer />
        </div>
      );
    case 4:
      return (
        <div className="giveBackForm">
          <GiveBackFormHero />
          <GiveBackFormImportant />
          <div className="giveBackFrom__form">
            <StepFourth increase={increseSteps} decrease={decreaseSteps} />
          </div>
          <ContactField />
          <Footer />
        </div>
      );
    case 5:
      return (
        <div className="giveBackForm">
          <GiveBackFormHero />
          <GiveBackFormImportant />
          <div className="giveBackFrom__form">
            <StepFive increase={increseSteps} decrease={decreaseSteps} />
          </div>
          <ContactField />
          <Footer />
        </div>
      );
    case 6:
      return (
        <div className="giveBackForm">
          <GiveBackFormHero />
          <GiveBackFormImportant />
          <div className="giveBackFrom__form">
            <StepSix />
          </div>
          <ContactField />
          <Footer />
        </div>
      );
    default:
      return <div>Something wrong</div>;
  }
};

export default GiveBackForm;
