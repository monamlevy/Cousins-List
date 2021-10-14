import React, { useState } from "react";
import Card from "./Card";
import CousinInfoCard from "./CousinInfoCard";

const CardList = ({ cousins }) => {
  const [showCousinInfoCard, setShowCousinInfoCard] = useState(false);
  function x(e, id) {
    e.stopPropagation();
    setShowCousinInfoCard(id);
  }
  const currentlyClickedCousin = cousins.filter(
    (cousin) => cousin.id === showCousinInfoCard
  )[0];
  console.log(
    "show cousinINfoCArd",
    currentlyClickedCousin,
    showCousinInfoCard
  );
  return (
    <div className="tc" onClick={() => setShowCousinInfoCard(false)}>
      {cousins.map((user, i) => {
        return (
          <Card
            key={i}
            x={x}
            // id={cousins[i].id}
            // name={cousins[i].name}
            // bday={cousins[i].bday}
            // phone={cousins[i].phone}
            {...cousins[i]}
          />
        );
      })}
      {showCousinInfoCard ? (
        <CousinInfoCard
          {...currentlyClickedCousin}
          setShowCousinInfoCard={setShowCousinInfoCard}
        />
      ) : null}
    </div>
  );
};

export default CardList;
