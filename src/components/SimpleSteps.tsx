import React from "react";
import HeaderTitle from "./HeaderTitle";
import SimpleStepsItem from "./SimpleStepsItem";
import shirtImage from "../assets/shirt.svg";
import bagImage from "../assets/Icon-2.svg";
import magnifyGlassImage from "../assets/Icon-3.svg";
import arrowsImage from "../assets/Icon-4.svg";
import MainButton from "./MainButton";

const SimpleSteps = () => {
  return (
    <section className="simplesteps">
      <HeaderTitle text="Wystarczą 4 proste kroki" />
      <div className="simplesteps__elements">
        <SimpleStepsItem
          imageSrc={shirtImage}
          imageAlt="shirt"
          header="Wybierz rzeczy"
          paragraph="ubrania, zabawki, sprzęt i inne"
        />
        <SimpleStepsItem
          imageSrc={bagImage}
          imageAlt="Bag"
          header="Spakuj je"
          paragraph="skorzystaj z worków na śmieci"
        />
        <SimpleStepsItem
          imageSrc={magnifyGlassImage}
          imageAlt="Magnify glass"
          header="Zdecyduj komu chcesz pomóc"
          paragraph="wybierz zaufane miejsce"
        />
        <SimpleStepsItem
          imageSrc={arrowsImage}
          imageAlt="await arrows"
          header="Zamów kuriera"
          paragraph="kurier przyjedzie w dogodnym terminie"
        />
      </div>
      <MainButton text="ODDAJ RZECZY" />
    </section>
  );
};

export default SimpleSteps;
