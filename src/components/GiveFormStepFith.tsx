import React, { useState } from "react";
import arrowUp from "../assets/Icon-Arrow-Up.svg";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import shirt from "../assets/shirt.svg";
import arrows from "../assets/Icon-4.svg";
import { useSelector } from "react-redux";
import { helpingDatas } from "../app/chariitySlicer";

const GiveFormStepFifth = (ChangeStepsProps: {
  increase: Function;
  decrease: Function;
}) => {
  const goBack = () => {
    ChangeStepsProps.decrease();
  };

  console.log(useSelector(helpingDatas.city));

  const confirm = () => {
    ChangeStepsProps.increase();
  };

  return (
    <div className="giveBackFormWrapper">
      <div className="giveBackFrom__form-header mb-50">
        Podsumowanie Twojej darowizny
      </div>

      <div className="giveBackForm__fourth-forms-adresForm mb-50">
        <div className="giveFormStepFifth__charity  mb-20">
          <img className="giveFormStepFifth__charity-img" src={shirt} />
          <p className="giveFormStepFifth__charity-text">
            <span>
              {useSelector(helpingDatas.bagQuantity)} worki,{" "}
              {useSelector(helpingDatas.items)},{" "}
              {useSelector(helpingDatas.helpTo)}
            </span>
          </p>
        </div>

        <div className="giveFormStepFifth__charity ">
          <img className="giveFormStepFifth__charity-img" src={arrows} />
          <p className="giveFormStepFifth__charity-text">
            <span>dla lokalizacji: Warszawa</span>
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
                <div className="divTableCell">Prosta 51</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">Miasto</div>
                <div className="divTableCell">Warszawa</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">
                  Kod pocztowy
                </div>
                <div className="divTableCell">66-666</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">
                  Numer telefonu
                </div>
                <div className="divTableCell">666 666 666</div>
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
                <div className="divTableCell">17.10.2022</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">
                  Godzina
                </div>
                <div className="divTableCell">17:30</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell divTableCell__smaller">
                  Uwagi dla kuriera
                </div>
                <div className="divTableCell"></div>
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

export default GiveFormStepFifth;
