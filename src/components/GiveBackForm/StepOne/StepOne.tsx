import React, { useState, FormEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { change } from "../../../app/chariitySlicer";
import { Props, ChooseItem } from "./type";

const StepOne = ({ increase }: Props) => {
  const stuff = useSelector((state: RootState) => state.yourCharity.stuff[0]);
  const dispatch = useDispatch();
  const [items, setItems] = useState(stuff);

  const datas = [
    "ubrania, które nadają się do ponownego użycia",
    "ubrania, do wyrzucenia",
    "zabawki",
    "książki",
    "Inne",
  ];

  datas.map((el) => console.log(el));

  const pickingItems = (e: ChooseItem): void => {
    dispatch(change({ key: "stuff", value: "" }));
    const item = e.target as HTMLInputElement;
    console.log(item.value);
    setItems(item.value);
  };

  const addStuff = () => {
    increase();
    dispatch(change({ key: "stuff", value: items }));
  };

  return (
    <div className="giveBackFormWrapper">
      <p className="giveBackFrom__form-steps">Step 1/4</p>
      <div>
        <div className="giveBackFrom__form-header giveBackFrom__form-header-stepOne">
          Zaznacz co chcesz oddać:
        </div>
        <form onChange={pickingItems} className="giveBackFrom__form-labels">
          {datas.map((el, id) => (
            <label key={id} className="giveBackFrom__form-labels-el">
              <input
                className={
                  el === stuff
                    ? "giveBackFrom__form-labels-el-input giveBackFrom__form-labels-el-input-active"
                    : "giveBackFrom__form-labels-el-input"
                }
                type="radio"
                name="giveAwayItems"
                value={el}
              />{" "}
              {el}
            </label>
          ))}
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

export default StepOne;
