import React, { useState } from "react";
import arrowUp from "../../assets/Icon-Arrow-Up.svg";
import arrowDown from "../../assets/Icon-Arrow-Down.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { change } from "../../../app/chariitySlicer";

const StepFour = (ChangeStepsProps: {
  increase: Function;
  decrease: Function;
}) => {
  const yourCity = useSelector(
    (state: RootState) => state.yourCharity.yourCity
  );
  const yourStreet = useSelector(
    (state: RootState) => state.yourCharity.street
  );
  const yourZipCode = useSelector(
    (state: RootState) => state.yourCharity.zipCode
  );
  const yourPhoneNumber = useSelector(
    (state: RootState) => state.yourCharity.phoneNumber
  );
  const dateOfReceipt = useSelector(
    (state: RootState) => state.yourCharity.pickingData
  );
  const hourOfReceipt = useSelector(
    (state: RootState) => state.yourCharity.pickingHour
  );
  const notesForCourier = useSelector(
    (state: RootState) => state.yourCharity.notesForTheCourier
  );

  const [myStreet, setMystreet] = useState(yourStreet);
  const [myCity, setMyCity] = useState(yourCity);
  const [myZipCode, setMyZipCode] = useState(yourZipCode);
  const [myPhoneNumber, setMyPhoneNumber] = useState(yourPhoneNumber);
  const [collectionData, setCollectionData] = useState(dateOfReceipt);
  const [collectionHour, setCollectionHour] = useState(hourOfReceipt);
  const [collectionCourierInfo, setCollectionCourierInfo] =
    useState(notesForCourier);

  const dispatch = useDispatch();

  const goBack = () => {
    ChangeStepsProps.decrease();
  };

  const addItems = () => {
    ChangeStepsProps.increase();
    dispatch(change({ key: "street", value: myStreet }));
    dispatch(change({ key: "yourCity", value: myCity }));
    dispatch(change({ key: "zipCode", value: myZipCode }));
    dispatch(change({ key: "phoneNumber", value: myPhoneNumber }));
    dispatch(change({ key: "pickingData", value: collectionData }));
    dispatch(change({ key: "pickingHour", value: collectionHour }));
    dispatch(
      change({ key: "notesForTheCourier", value: collectionCourierInfo })
    );
  };

  const settingStreet = (e: any) => {
    setMystreet(e.target.value);
  };

  const settingMyCity = (e: any) => {
    setMyCity(e.target.value);
  };

  const settingMyZipCode = (e: any) => {
    setMyZipCode(e.target.value);
  };

  const settingMyPhoneNumer = (e: any) => {
    setMyPhoneNumber(e.target.value);
  };

  const settingCollectionData = (e: any) => {
    setCollectionData(e.target.value);
  };

  const settingCollectionHour = (e: any) => {
    setCollectionHour(e.target.value);
  };

  const settingColletionCourierInfo = (e: any) => {
    setCollectionCourierInfo(e.target.value);
  };

  return (
    <div className="giveBackFormWrapper">
      <p className="giveBackFrom__form-steps">Step 4/4</p>
      <div className="giveBackFrom__form-header mb-50">
        Podaj adres oraz termin odbioru rzeczy przez kuriera
      </div>

      <div className="giveBackForm__fourth-forms">
        <form className="giveBackForm__fourth-forms-adresForm">
          <p className="giveBackForm__choose-title giveBackForm__choose-title-three">
            Adres odbioru:
          </p>
          <label className="giveBackForm__fourth-forms-adresForm-label mb-20">
            <p className="giveBackForm__fourth-forms-adresForm-label-text">
              Ulica{" "}
            </p>
            <input
              onChange={settingStreet}
              value={myStreet}
              className="giveBackForm__fourth-forms-adresForm-label-text-input"
            />
          </label>
          <label className="giveBackForm__fourth-forms-adresForm-label mb-30">
            <p className="giveBackForm__fourth-forms-adresForm-label-text">
              Miasto
            </p>
            <input
              onChange={settingMyCity}
              value={myCity}
              className="giveBackForm__fourth-forms-adresForm-label-text-input"
            />
          </label>
          <label className="giveBackForm__fourth-forms-adresForm-label mb-38">
            <p className="giveBackForm__fourth-forms-adresForm-label-text">
              Kod pocztowy
            </p>
            <input
              onChange={settingMyZipCode}
              value={myZipCode}
              className="giveBackForm__fourth-forms-adresForm-label-text-input"
            />
          </label>
          <label className="giveBackForm__fourth-forms-adresForm-label">
            <p className="giveBackForm__fourth-forms-adresForm-label-text">
              Numer telefonu
            </p>
            <input
              onChange={settingMyPhoneNumer}
              value={myPhoneNumber}
              className="giveBackForm__fourth-forms-adresForm-label-text-input"
            />
          </label>
        </form>
        <form className="giveBackForm__fourth-forms-timeForm">
          <p className="giveBackForm__choose-title giveBackForm__choose-title-three">
            Termin odbioru:
          </p>
          <label className="giveBackForm__fourth-forms-adresForm-label mb-20">
            <p className="giveBackForm__fourth-forms-adresForm-label-text">
              Data{" "}
            </p>
            <input
              value={collectionData}
              onChange={settingCollectionData}
              className="giveBackForm__fourth-forms-adresForm-label-text-input"
            />
          </label>
          <label className="giveBackForm__fourth-forms-adresForm-label mb-20">
            <p className="giveBackForm__fourth-forms-adresForm-label-text">
              Godzina
            </p>
            <input
              onChange={settingCollectionHour}
              value={collectionHour}
              className="giveBackForm__fourth-forms-adresForm-label-text-input"
            />
          </label>
          <label className="giveBackForm__fourth-forms-adresForm-label mb-20">
            <p className="giveBackForm__fourth-forms-adresForm-label-text">
              Uwagi dla kuriera
            </p>
            <textarea
              onChange={settingColletionCourierInfo}
              value={collectionCourierInfo}
              rows={4}
              className="giveBackForm__fourth-forms-adresForm-label-text-textarea"
            />
          </label>
        </form>
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

export default StepFour;
