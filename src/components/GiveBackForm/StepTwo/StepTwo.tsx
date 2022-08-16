import React, { useState, FC } from "react";
import arrowUp from "../../../assets/Icon-Arrow-Up.svg";
import arrowDown from "../../../assets/Icon-Arrow-Down.svg";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../../app/chariitySlicer";
import { RootState } from "../../../app/store";
import { Props } from "./type";
import { bagQuantityType } from "./type";

const StepTwo = ({ increase, decrease }: Props) => {
  const bags = useSelector((state: RootState) => state.yourCharity.howManyBags);
  const [bagsQuantityState, setBagsQuantityState] = useState(bags);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const settingActive = () => {
    setActive((prev) => !prev);
  };

  const goBack = () => {
    decrease();
  };

  const addItems = () => {
    increase();
    dispatch(change({ key: "howManyBags", value: bagsQuantityState }));
  };

  const handleBagsQuantity = (e: bagQuantityType) => {
    const bagsQuantyty = (e.target as HTMLDivElement).id;
    setBagsQuantityState(bagsQuantyty);
    setActive(false);
  };

  return (
    <div className="giveBackFormWrapper">
      <p className="giveBackFrom__form-steps">Step 2/4</p>
      <div className="giveBackFrom__textWrapper">
        <div className="giveBackFrom__form-header mb-30">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </div>
        <div className="giveBackForm__selectContainer mb-300">
          <p className="giveBackForm__selectContainer-text">
            Liczba 60l worków:
          </p>
          <div className="giveBackForm__selectContainer-select">
            <p
              onClick={settingActive}
              className="giveBackForm__selectContainer-select-title"
            >
              {bagsQuantityState}{" "}
              {active ? (
                <img alt="arrowUp" src={arrowUp} />
              ) : (
                <img alt="arrowDown" src={arrowDown} />
              )}
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
      <div className="giveBackForm__btn-wrapper">
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
    </div>
  );
};

export default StepTwo;
