import React from "react";
import HomeThreeColumnsItem from "./HomeThreeColumnsItem";

const HomeThreeColumns = () => {
  return (
    <section className="homeThreeColumns">
      <HomeThreeColumnsItem
        howMuch={10}
        toWhat={"ODDANYCH WORKÓW"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        }
      />
      <HomeThreeColumnsItem
        howMuch={5}
        toWhat={"WSPARTYCH ORGANIZACJI"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        }
      />
      <HomeThreeColumnsItem
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
