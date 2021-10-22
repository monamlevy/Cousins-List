import React from "react";

const Card = ({ name, bday, phone, id, x, pic }) => {
  return (
    <div
      className="card tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5"
      onClick={(e) => x(e, id)}
    >
      <img alt="cousins" src={pic || `https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
