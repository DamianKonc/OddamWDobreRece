import React from "react";
import Navigation from "../Navigation";
import Logo from "../Logo";

const GiveBackFormHero = () => {
  return (
    <div className="giveBackForm__hero">
      <Navigation />
      <header className="giveBackForm__header">
        <div className="giveBackForm__header-wrapper">
          <Logo text={`Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM`} />
        </div>
        <div className="giveBackForm__image" />
        <div>
          <h3 className="giveBackForm__semititle">Wystarczą 4 proste kroki</h3>
          <div className="giveBackForm__steps">
            <div className="giveBackFrom__steps-step">
              <div className="giveBackFrom__steps-step-inside">
                <div className="giveBackFrom__steps-step-number">1</div>
                <p className="giveBackFrom__steps-step-text">Wybierz rzeczy</p>
              </div>
            </div>
            <div className="giveBackFrom__steps-step">
              <div className="giveBackFrom__steps-step-inside">
                <div className="giveBackFrom__steps-step-number">2</div>
                <p className="giveBackFrom__steps-step-text">
                  Spakuj je w worki
                </p>
              </div>
            </div>
            <div className="giveBackFrom__steps-step">
              <div className="giveBackFrom__steps-step-inside">
                <div className="giveBackFrom__steps-step-number">3</div>
                <p className="giveBackFrom__steps-step-text">
                  Wybierz fundację
                </p>
              </div>
            </div>
            <div className="giveBackFrom__steps-step">
              <div className="giveBackFrom__steps-step-inside">
                <div className="giveBackFrom__steps-step-number">4</div>
                <p className="giveBackFrom__steps-step-text">Zamów kuriera</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default GiveBackFormHero;
