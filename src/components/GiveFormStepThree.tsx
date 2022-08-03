import React, { useEffect, useState } from "react";
import arrowUp from "../assets/Icon-Arrow-Up.svg";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import { useDispatch } from "react-redux";
// import { localisationHelpToNameOfOrganization } from "../app/chariitySlicer";
import {
  localisation,
  organisationName,
  whotoHelp,
} from "../app/chariitySlicer";

const GiveFormStepTwo = (ChangeStepsProps: {
  increase: Function;
  decrease: Function;
}) => {
  const [city, setCity] = useState(" -- wybierz --");
  const [active, setActive] = useState(false);
  const [helpTo, setHelpTo] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const dispatch = useDispatch();

  const settingActive = () => {
    setActive((prev) => (prev = !prev));
    console.log(active);
  };

  const goBack = () => {
    ChangeStepsProps.decrease();
  };

  const addItems = () => {
    ChangeStepsProps.increase();
    dispatch(localisation(city));
    dispatch(organisationName(organizationName));
    dispatch(whotoHelp(helpTo));
  };

  const cityHandler = (e: any) => {
    setCity(e.target.id);
    setActive(false);
  };

  const helpingHandler = (e: any) => {
    setHelpTo(e.target.id);
  };

  const organizationNameHandler = (e: any) => {
    setOrganizationName(e.target.value);
  };
  return (
    <div className="giveBackFormWrapper">
      <p className="giveBackFrom__form-steps">Step 3/4</p>
      <div className="giveBackFrom__form-header">Lokalizacja:</div>
      <div className="giveBackFormWrapper-three ">
        <div className="giveBackForm__selectContainer">
          <div className="giveBackForm__selectContainer-select">
            <p
              onClick={settingActive}
              className="giveBackForm__selectContainer-select-title giveBackForm__selectContainer-select-title-three"
            >
              {city}
              {active ? <img src={arrowUp} /> : <img src={arrowDown} />}
            </p>
            {active ? (
              <div className="giveBackForm__selectContainer-select-options-container giveBackForm__selectContainer-select-options-container-three">
                <div
                  onClick={cityHandler}
                  id="Poznań"
                  className="giveBackForm__selectContainer-select-option-three"
                >
                  Poznań
                </div>
                <div
                  onClick={cityHandler}
                  id="Warszawa"
                  className="giveBackForm__selectContainer-select-option-three"
                >
                  Warszawa
                </div>
                <div
                  onClick={cityHandler}
                  id="Kraków"
                  className="giveBackForm__selectContainer-select-option-three"
                >
                  Kraków
                </div>
                <div
                  onClick={cityHandler}
                  id="Wrocław"
                  className="giveBackForm__selectContainer-select-option-three"
                >
                  Wrocław
                </div>
                <div
                  onClick={cityHandler}
                  id="Katowice"
                  className="giveBackForm__selectContainer-select-option-three"
                >
                  Katowice
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="giveBackForm__choose">
          <p className="giveBackForm__choose-title giveBackForm__choose-title-three">
            Komu chcesz pomóc?
          </p>
          <div className="giveBackForm__choose-wrapper">
            <label
              id="dzieciom"
              onClick={helpingHandler}
              className="giveBackForm__choose-wrapper-el"
            >
              dzieciom
              <input
                className="giveBackForm__choose-wrapper-el-input"
                name="helpTo"
                type="radio"
                value="dzieciom"
              />
            </label>
            <label
              id="samotnym matkom"
              onClick={helpingHandler}
              className="giveBackForm__choose-wrapper-el"
            >
              samotnym matkom
              <input
                className="giveBackForm__choose-wrapper-el-input"
                name="helpTo"
                type="radio"
                value="samotnym matkom"
              />
            </label>
            <label
              id="bezdomnym"
              onClick={helpingHandler}
              className="giveBackForm__choose-wrapper-el"
            >
              bezdomnym
              <input
                className="giveBackForm__choose-wrapper-el-input"
                name="helpTo"
                type="radio"
                value="bezdomnym"
              />
            </label>
            <label
              id="niepełnosprawnym"
              onClick={helpingHandler}
              className="giveBackForm__choose-wrapper-el"
            >
              niepełnosprawnym
              <input
                className="giveBackForm__choose-wrapper-el-input"
                name="helpTo"
                type="radio"
                value="niepełnosprawnym"
              />
            </label>
            <label
              id="osobom starszym"
              onClick={helpingHandler}
              className="giveBackForm__choose-wrapper-el"
            >
              osobom starszym
              <input
                className="giveBackForm__choose-wrapper-el-input"
                name="helpTo"
                type="radio"
                value="osobom starszym"
              />
            </label>
          </div>
        </div>
        <label>
          <p className="giveBackForm__choose-title giveBackForm__choose-title-three mt-46 mb-20">
            Wpisz nazwę konkretnej organizacji (opcjonalnie)
          </p>
          <input
            value={organizationName}
            onChange={organizationNameHandler}
            className="giveBackForm__choose-title-three-input"
          />
        </label>
      </div>
      <button
        onClick={goBack}
        className="giveBackFormWrapper__btn giveBackFormWrapper__btn-stepTwo"
      >
        Wstecz
      </button>
      <button onClick={addItems} className="giveBackFormWrapper__btn">
        Dalej
      </button>
    </div>
  );
};

export default GiveFormStepTwo;
