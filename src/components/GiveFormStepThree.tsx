import React, { useEffect, useState } from "react";
import arrowUp from "../assets/Icon-Arrow-Up.svg";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../app/chariitySlicer";
import { RootState } from "../app/store";

const GiveFormStepTwo = (ChangeStepsProps: {
  increase: Function;
  decrease: Function;
}) => {
  const localisation = useSelector(
    (state: RootState) => state.yourCharity.localisation
  );
  const helpingTo = useSelector(
    (state: RootState) => state.yourCharity.whoToHelp
  );
  const organization = useSelector(
    (state: RootState) => state.yourCharity.organizationName
  );

  const [city, setCity] = useState(localisation);
  const [active, setActive] = useState(false);
  const [helpTo, setHelpTo] = useState(helpingTo);
  const [organizationName, setOrganizationName] = useState(organization);
  const dispatch = useDispatch();

  useEffect(() => {}, [helpTo]);

  const settingActive = () => {
    setActive((prev) => (prev = !prev));
  };

  const goBack = () => {
    ChangeStepsProps.decrease();
  };

  const addItems = () => {
    ChangeStepsProps.increase();
    dispatch(change({ key: "localisation", value: city }));
    dispatch(change({ key: "whoToHelp", value: helpTo }));
    dispatch(change({ key: "organizationName", value: organizationName }));
  };

  const cityHandler = (e: any) => {
    setCity(e.target.id);
    setActive(false);
  };

  const helpingHandler = (e: any) => {
    setHelpTo(e.target.value);
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
          <form
            onChange={helpingHandler}
            className="giveBackForm__choose-wrapper"
          >
            <label id="dzieciom" className="giveBackForm__choose-wrapper-el">
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
            <label id="bezdomnym" className="giveBackForm__choose-wrapper-el">
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
          </form>
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
