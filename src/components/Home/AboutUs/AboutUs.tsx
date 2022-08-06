import React from "react";
import Logo from "../../Logo";
import signature from "../../../assets/signature.svg";

const AbooutUs = () => {
  return (
    <section className="aboutUs">
      <div className="aboutUs__el aboutUs__el-dscr">
        <Logo text="O nas" />
        <p className="aboutUs__el-text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img
          className="aboutUs__el-signature"
          src={signature}
          alt="signature"
        />
      </div>
      <div className="aboutUs__el aboutUs__img" />
    </section>
  );
};

export default AbooutUs;
