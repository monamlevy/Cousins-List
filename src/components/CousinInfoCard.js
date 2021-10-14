import React from "react";
import reactDom from "react-dom";

const CousinInfoCard = ({
  name,
  bday,
  phone,
  id,
  pic,
  setShowCousinInfoCard,
}) => {
  return reactDom.createPortal(
    <div
      className="cousin-info-card-wrapper"
      onClick={() => setShowCousinInfoCard(false)}
    >
      <div
        className="cousin-info-card br3"
        onClick={(e) => e.stopPropagation()}
      >
        <img alt="cousins" src={pic || `https://robohash.org/${id}?200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{bday}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>,
    document.querySelector(".page-wrapper")
  );
};

export default CousinInfoCard;
