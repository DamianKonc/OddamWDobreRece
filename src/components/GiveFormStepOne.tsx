import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stuffPicking } from "../app/chariitySlicer";
import { RootState } from "../app/store";

const GiveFormStepOne = (IncreaseProps) => {
  const stuff = useSelector((state: RootState) => state.yourCharity.stuff);
  const dispatch = useDispatch();
  const [items, setItems] = useState(stuff);

  const pickingItems = (e: any) => {
    setItems(e.target.value);
  };

  const addStuff = () => {
    dispatch(stuffPicking(items));
    IncreaseProps.increase();
  };

  return (
    <div className="giveBackFormWrapper">
      <p className="giveBackFrom__form-steps">Step 1/4</p>

      <div>
        <div className="giveBackFrom__form-header giveBackFrom__form-header-stepOne">
          Zaznacz co chcesz oddać:
        </div>
        <form onChange={pickingItems} className="giveBackFrom__form-labels">
          <label className="giveBackFrom__form-labels-el">
            <input
              className="giveBackFrom__form-labels-el-input"
              type="radio"
              name="giveAwayItems"
              value={"ubrania, które nadają się do ponownego użycia"}
            />{" "}
            ubrania, które nadają się do ponownego użycia
          </label>
          <label className="giveBackFrom__form-labels-el">
            <input
              className="giveBackFrom__form-labels-el-input"
              type="radio"
              name="giveAwayItems"
              value={"ubrania, do wyrzucenia"}
            />{" "}
            ubrania, do wyrzucenia
          </label>
          <label className="giveBackFrom__form-labels-el">
            <input
              className="giveBackFrom__form-labels-el-input"
              type="radio"
              name="giveAwayItems"
              value={"zabawki"}
            />{" "}
            zabawki
          </label>
          <label className="giveBackFrom__form-labels-el">
            <input
              className="giveBackFrom__form-labels-el-input"
              type="radio"
              name="giveAwayItems"
              value={"książki"}
            />{" "}
            książki
          </label>
          <label className="giveBackFrom__form-labels-el">
            <input
              className="giveBackFrom__form-labels-el-input"
              type="radio"
              name="giveAwayItems"
              value={"Inne"}
            />{" "}
            Inne
          </label>
        </form>
      </div>
      <button
        onClick={addStuff}
        className="giveBackFormWrapper__btn giveBackFormWrapper__btn-stepOne"
      >
        Dalej
      </button>
    </div>
  );
};

export default GiveFormStepOne;
