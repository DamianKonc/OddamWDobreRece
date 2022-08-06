import React from "react";
import ThreeColumnsItem from "../ThreeColumnsItem/HomeThreeColumnsItem";

const HomeThreeColumns = () => {
  return (
    <section id="homeThreeColumns" className="homeThreeColumns">
      <ThreeColumnsItem
        howMuch={10}
        toWhat={"ODDANYCH WORKÓW"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        }
      />
      <ThreeColumnsItem
        howMuch={5}
        toWhat={"WSPARTYCH ORGANIZACJI"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        }
      />
      <ThreeColumnsItem
        howMuch={7}
        toWhat={"ZORGANIZOWANY ZBIÓREK"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        }
      />
    </section>
  );
};

export default HomeThreeColumns;
