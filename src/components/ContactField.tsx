import React from "react";
import Footer from "./Footer";
import HeaderTitle from "./HeaderTitle";

const ContactField = () => {
  return (
    <section className="contactField">
      <div className="contactField__wrapper">
        <HeaderTitle text="Skontaktuj się z nami" />
        <form className="contactField__form">
          <div className="contactField__form-wrapper">
            <label className="contactField__form-wrapper-label  contactField__form-smallLabel">
              <p className="contactField__label-text">Wpisz swoje imię</p>
              <input
                className="contactField__form-wrapper-input"
                placeholder="Krzysztof"
              />
            </label>
            <label className="contactField__form-wrapper-label contactField__form-smallLabel">
              <p className="contactField__label-text"> Wpisz swój email</p>
              <input
                className="contactField__form-wrapper-input"
                placeholder="abc@xyz.pl"
              />
            </label>
          </div>
          <label className="contactField__form-wrapper-label">
            <p className="contactField__label-text"> Wpisz swoją wiadomość </p>
            <textarea
              rows={4}
              className="contactField__form-wrapper-input contactField__form-bigInput"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </label>
          <button className="contactField__form-btn">Wyślij</button>
        </form>
      </div>
    </section>
  );
};

export default ContactField;
