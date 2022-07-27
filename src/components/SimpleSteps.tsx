import React from "react";
import HeaderTitle from "./HeaderTitle";
import SimpleStepsItem from "./SimpleStepsItem";
import image from "../assets/Icon-4.svg";
import MainButton from "./MainButton";

const SimpleSteps = () => {
  return (
    <section className="simplesteps">
      <HeaderTitle text="Wystarczą 4 proste kroki" />
      <div className="simplesteps__elements">
        <SimpleStepsItem
          imageSrc="/static/media/Icon-4.f1b3fb6d88016f0f95543cc7ad9a7803.svg"
          imageAlt="shirt"
          header="Wybierz rzeczy"
          paragraph="ubrania, zabawki, sprzęt i inne"
        />
        <SimpleStepsItem
          imageSrc="/static/media/Icon-4.f1b3fb6d88016f0f95543cc7ad9a7803.svg"
          imageAlt="Bag"
          header="Spakuj je"
          paragraph="skorzystaj z worków na śmieci"
        />
        <SimpleStepsItem
          imageSrc="/static/media/Icon-4.f1b3fb6d88016f0f95543cc7ad9a7803.svg"
          imageAlt="Magnify glass"
          header="Zdecyduj komu chcesz pomóc"
          paragraph="wybierz zaufane miejsce"
        />
        <SimpleStepsItem
          imageSrc={image}
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
