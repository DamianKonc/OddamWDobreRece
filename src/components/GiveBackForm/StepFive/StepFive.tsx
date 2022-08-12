import React from "react";
import shirt from "../../../assets/shirt.svg";
import arrows from "../../../assets/Icon-4.svg";
import FetchingData from "../../FetchingData";
import { Props } from "./type";

const StepFive = ({ increase, decrease }: Props) => {
  const goBack = () => {
    decrease();
  };

  const confirm = () => {
    increase();
  };

  return (
    <div className="giveBackFormWrapper">
      <div className="giveBackFrom__form-header mb-50">
        Podsumowanie Twojej darowizny
      </div>

      <div className="giveBackForm__fourth-forms-adresForm mb-50">
        <div className="giveFormStepFifth__charity  mb-20">
          <img
            alt="shirt"
            className="giveFormStepFifth__charity-img"
            src={shirt}
          />
          <p className="giveFormStepFifth__charity-text">
            <span>
              <FetchingData name="howManyBags" /> worki,
              <FetchingData name="stuff" />,
              <FetchingData name="whoToHelp" />
            </span>
          </p>
        </div>

        <div className="giveFormStepFifth__charity ">
          <img
            alt="2arrows"
            className="giveFormStepFifth__charity-img"
            src={arrows}
          />
          <p className="giveFormStepFifth__charity-text">
            <span>
              dla lokalizacji: <FetchingData name="localisation" />
            </span>
          </p>
        </div>
      </div>

      <div className="giveBackForm__fifth-forms ">
        <div className="giveBackForm__fourth-forms-adresForm giveFormStepFifth__summaryAddres">
          <p className="giveBackForm__choose-title giveBackForm__choose-title-three">
            Adres odbioru:
          </p>
          <div className="divTable giveFormStepFifth__table-text">
            <div className="divTableBody">
              <div className="divTableRow ">
                <div className="divTableCell  divTableCell__smaller">Ulica</div>
                <div className="divTableCell">
                  <FetchingData name="street" />
                </div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">Miasto</div>
                <div className="divTableCell">
                  <FetchingData name="yourCity" />
                </div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">
                  Kod pocztowy
                </div>
                <div className="divTableCell">
                  <FetchingData name="zipCode" />
                </div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">
                  Numer telefonu
                </div>
                <div className="divTableCell">
                  <FetchingData name="phoneNumber" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="giveBackForm__fourth-forms-timeForm giveFormStepFifth__summaryAddres">
          <p className="giveBackForm__choose-title giveBackForm__choose-title-three">
            Termin odbioru:
          </p>
          <div className="divTable giveFormStepFifth__table-text">
            <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">Data</div>
                <div className="divTableCell">
                  <FetchingData name="pickingData" />
                </div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">
                  Godzina
                </div>
                <div className="divTableCell">
                  <FetchingData name="pickingHour" />
                </div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">
                  Uwagi dla kuriera
                </div>
                <div className="divTableCell">
                  {" "}
                  <FetchingData name="notesForTheCourier" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={goBack}
        className="giveBackFormWrapper__btn giveBackFormWrapper__btn-stepTwo"
      >
        Wstecz
      </button>
      <button onClick={confirm} className="giveBackFormWrapper__btn">
        Potwierdzam
      </button>
    </div>
  );
};

export default StepFive;
