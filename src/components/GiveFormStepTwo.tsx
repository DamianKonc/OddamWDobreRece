import React, { useState } from "react";
import arrowUp from "../assets/Icon-Arrow-Up.svg";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import { useDispatch } from "react-redux";
import { bagsQuantity } from "../app/chariitySlicer";

const GiveFormStepTwo = (ChangeStepsProps: {
  increase: Function;
  decrease: Function;
}) => {
  const [bagsQuantityState, setBagsQuantityState] = useState(" -- wybierz --");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const settingActive = () => {
    setActive((prev) => !prev);
    console.log(active);
  };

  const goBack = () => {
    ChangeStepsProps.decrease();
  };

  const addItems = () => {
    if (typeof bagsQuantityState === "number") {
      dispatch(bagsQuantity(bagsQuantityState));
    }

    ChangeStepsProps.increase();
  };

  const handleBagsQuantity = (e: any) => {
    console.log(e.target.id);
    setBagsQuantityState(e.target.id);
    setActive(false);
  };

  return (
    <div className="giveBackFormWrapper">
      <p className="giveBackFrom__form-steps">Step 2/4</p>
      <div>
        <div className="giveBackFrom__form-header">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </div>
        <div className="giveBackForm__selectContainer">
          <p className="giveBackForm__selectContainer-text">
            Liczba 60l worków:
          </p>
          <div className="giveBackForm__selectContainer-select">
            <p
              onClick={settingActive}
              className="giveBackForm__selectContainer-select-title"
            >
              {bagsQuantityState}{" "}
              {active ? <img src={arrowUp} /> : <img src={arrowDown} />}
            </p>
            {active ? (
              <div className="giveBackForm__selectContainer-select-options-container">
                <div
                  id="1"
                  onClick={handleBagsQuantity}
                  className="giveBackForm__selectContainer-select-option"
                >
                  1
                </div>
                <div
                  id="2"
                  onClick={handleBagsQuantity}
                  className="giveBackForm__selectContainer-select-option"
                >
                  2
                </div>
                <div
                  id="3"
                  onClick={handleBagsQuantity}
                  className="giveBackForm__selectContainer-select-option"
                >
                  3
                </div>
                <div
                  id="4"
                  onClick={handleBagsQuantity}
                  className="giveBackForm__selectContainer-select-option"
                >
                  4
                </div>
                <div
                  id="5"
                  onClick={handleBagsQuantity}
                  className="giveBackForm__selectContainer-select-option"
                >
                  5
                </div>
              </div>
            ) : null}
          </div>
        </div>
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
