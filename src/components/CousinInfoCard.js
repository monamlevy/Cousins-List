import React from "react";
import reactDom from "react-dom";

const CousinInfoCard = ({
  name,
  bday,
  phone,
  email,
  address,
  id,
  pic,
  spouse,
  setShowCousinInfoCard,
  children,
}) => {
  return reactDom.createPortal(
    <div
      className="cousin-info-card-wrapper"
      onClick={() => setShowCousinInfoCard(false)}
    >
      <div
        className="cousin-info-card br3 shadow-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          alt="cousins"
          className="cousin-image"
          src={pic || `https://robohash.org/${id}?200x200`}
        />
        <div>
          <h2>{name}</h2>
          <h5>Bday: {bday}</h5>
          <h5>Phone # {phone}</h5>
          <h5>{email}</h5>
          <h5>{address}</h5>
          {spouse ? (
            <>
              <h4>Spouse: </h4>
              <h6>
                {spouse.name} - {spouse.bday}
              </h6>
                <h6>married {spouse.anni}</h6>
            </>
          ) : null}
          {children ? <h4>Children: </h4> : null}
          {children?.map((child) => (
            <h6>
              {child.name} - {child.bday}
            </h6>
          ))}
        </div>
      </div>
    </div>,
    document.querySelector(".page-wrapper")
  );
};

export default CousinInfoCard;
