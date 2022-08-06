import React, { useState } from "react";
import ContactField from "../ContactField";
import Footer from "../Footer";
import GiveFormStepOne from "./GiveFormStepOne";
import GiveBackFormHero from "./GiveBackFormHero";
import GiveBackFormImportant from "./GiveBackFormImportant";
import GiveFormStepTwo from "./GiveFormStepTwo";
import StepThree from "./StepThree";
import GiveFormStepFourth from "./GiveFormStepFourth";
import GiveFormStepFifth from "./GiveFormStepFith";
import GiveFormStepSixth from "./GiveFormStepSixth";

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
            <GiveFormStepOne increase={increseSteps} />
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
            <GiveFormStepTwo increase={increseSteps} decrease={decreaseSteps} />
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
            <GiveFormStepFourth
              increase={increseSteps}
              decrease={decreaseSteps}
            />
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
            <GiveFormStepFifth
              increase={increseSteps}
              decrease={decreaseSteps}
            />
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
            <GiveFormStepSixth />
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
