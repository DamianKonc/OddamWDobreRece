import React from "react";
import HeaderTitle from "./HeaderTitle";
import HelpingButton from "./HelpingButton";
import HelpingEl from "./HelpingEl";

const fundacje = [
  {
    name: "Dbam o  Zdrowie",
    mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    need: "ubrania, meble, jedzenie, sprzęt AGD",
  },
  {
    name: "Dla dzieci",
    mission: "Pomoc dzieciom z ubogich rodzin.",
    need: "ubrania, meble, jedzenie, sprzęt AGD",
  },
  {
    name: "Bez domu",
    mission:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    need: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Psia kość",
    mission: "Pomoc schroniskom.",
    need: "stare kołdry, koce, karma dla psów",
  },
  {
    name: "Kocie życie",
    mission: "Pomoc bezdomnym kotom.",
    need: "stare ubrania, kołdry, jedzenie dla kotów",
  },
  {
    name: "Bez domu",
    mission:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    need: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Dla dzieci",
    mission: "Pomoc dzieciom z ubogich rodzin.",
    need: "ubrania, meble, jedzenie, sprzęt AGD",
  },
  {
    name: "Bez domu",
    mission:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    need: "ubrania, jedzenie, ciepłe koce",
  },
];

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
        {fundacje.map((el, id) => (
          <HelpingEl
            key={id}
            name={el.name}
            mission={el.mission}
            need={el.need}
          />
        ))}
      </ul>
    </section>
  );
};

export default Helping;
