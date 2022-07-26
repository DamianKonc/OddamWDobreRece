import React from "react";
import HeaderTitle from "./HeaderTitle";
import SimpleStepsItem from "./SimpleStepsItem";

const SimpleSteps = () => {
  return (
    <section className="simplesteps">
      <HeaderTitle text="Wystarczą 4 proste kroki" />
      <div className="simplesteps__elements">
        <SimpleStepsItem
          imageSrc="https://cdn.pixabay.com/photo/2021/12/22/10/08/cat-6887210_960_720.png"
          imageAlt="Shirt"
          header="Wybierz rzeczy"
          paragraph="ubrania, zabawki, sprzęt i inne"
        />
        <SimpleStepsItem
          imageSrc="../assets/Icon-2.svg"
          imageAlt="Bag"
          header="Spakuj je"
          paragraph="skorzystaj z worków na śmieci"
        />
        <SimpleStepsItem
          imageSrc="../assets/Icon-3.svg"
          imageAlt="Magnify glass"
          header="Zdecyduj komu chcesz pomóc"
          paragraph="wybierz zaufane miejsce"
        />
        <SimpleStepsItem
          imageSrc="../assets/Icon-4.svg"
          imageAlt="await arrows"
          header="Zamów kuriera"
          paragraph="kurier przyjedzie w dogodnym terminie"
        />
      </div>
    </section>
  );
};

export default SimpleSteps;
