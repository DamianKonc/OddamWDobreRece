import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import HelpingButton from "./HelpingButton";
import HelpingEl from "./HelpingEl";
import { fundacje, organizacjePozarządowe } from "../app/db";
import Pagination from "./Pagination";

const Helping = () => {
  return (
    <section className="helping">
      <HeaderTitle text="Komu pomagamy?" />
      <div className="helping__btns">
        <HelpingButton text={"Fundacjom"} />
        <HelpingButton text={"Organizajom pozarządowym"} />
        <HelpingButton text={"Lokalnym zbiórkom"} />
      </div>
      <p className="helpin__text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <ul>
        <Pagination data={organizacjePozarządowe} howManyOnPage={3} />
      </ul>
    </section>
  );
};

export default Helping;
