import React, { useEffect, useState, FC } from "react";
import arrowUp from "../../../assets/Icon-Arrow-Up.svg";
import arrowDown from "../../../assets/Icon-Arrow-Down.svg";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../../app/chariitySlicer";
import { RootState } from "../../../app/store";
import { Props } from "./type";

const getyouCharity = (state) => state.yourCharity;

// const getYourCharityLocalisation = createSelector(
// getyouCharity,
// charity => charity.localisation
// )

const StepThree: FC<Props> = ({ increase, decrease }: Props) => {
  const localisation = useSelector(
    (state: RootState) => state.yourCharity.localisation
  );
  const helpingTo: string = useSelector(
    (state: RootState) => state.yourCharity.whoToHelp[0]
  );
  const organization = useSelector(
    (state: RootState) => state.yourCharity.organizationName
  );

  const [city, setCity] = useState(localisation);
  const [active, setActive] = useState(false);
  const [wantToHelpingTo, setwantToHelpingTo] = useState(helpingTo);
  const [organizationName, setOrganizationName] = useState(organization);
  const dispatch = useDispatch();

  const settingActive = () => {
    setActive((prev) => (prev = !prev));
  };

  console.log(helpingTo);

  const goBack = () => {
    decrease();
  };

  const addItems = () => {
    increase();
    dispatch(change({ key: "localisation", value: city }));
    dispatch(change({ key: "organizationName", value: organizationName }));
    dispatch(change({ key: "whoToHelp", value: wantToHelpingTo }));
  };

  const cityHandler = (e: any) => {
    setCity(e.target.id);
    setActive(false);
  };

  const helpingHandler = (e: any) => {
    setwantToHelpingTo(e.target.value);
    console.log(e.target.value);
  };

  const organizationNameHandler = (e: any) => {
    setOrganizationName(e.target.value);
  };

  const miasta = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
  const pomocDla = [
    "dzieciom",
    "samotnym matkom",
    "bezdomnym",
    "niepełnosprawnym",
    "osobom starszym",
  ];

  // pomocDla.map((el) => console.log(el));
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
                {miasta.map((el, id) => (
                  <div
                    key={id}
                    onClick={cityHandler}
                    id={el}
                    className="giveBackForm__selectContainer-select-option-three"
                  >
                    {el}
                  </div>
                ))}
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
            {pomocDla.map((el, id) => (
              <label
                key={id}
                id={el}
                className="giveBackForm__choose-wrapper-el"
              >
                {el}
                <input
                  // className="giveBackForm__choose-wrapper-el-input"
                  className={
                    el == helpingTo
                      ? "giveBackForm__choose-wrapper-el-input giveBackForm__choose-wrapper-el-input-active"
                      : "giveBackForm__choose-wrapper-el-input "
                  }
                  name="helpTo"
                  type="radio"
                  value={el}
                />
              </label>
            ))}
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

export default StepThree;
