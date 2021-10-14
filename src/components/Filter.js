import React, { useEffect, useState } from "react";
import { ReactComponent as DownChevron } from "../assets/down-chevron.svg";

const Filter = (props) => {
  const { showLadies, setShowLadies } = props;
  const { showGents, setShowGents } = props;
  const { showSingle, setShowSingle } = props;
  const { showMarried, setShowMarried } = props;
  const { showHasChildren, setShowHasChildren } = props;
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    const closeFilter = () => setShowFilter(false);
    if (showFilter) {
      document.body.addEventListener("click", closeFilter);
    } else {
      document.body.removeEventListener("click", closeFilter);
    }
    return () => document.body.removeEventListener("click", closeFilter);
  }, [showFilter]);
  return (
    <div className="filter-wrapper" onClick={() => setShowFilter(!showFilter)}>
      <span className="down-chevron">
        Filter
        <DownChevron />
      </span>
      {showFilter ? (
        <div className="filter-popup br1" onClick={(e) => e.stopPropagation()}>
          <div onClick={() => setShowLadies(!showLadies)}>
            <input type="checkbox" checked={showLadies} /> ladies
          </div>
          <div onClick={() => setShowGents(!showGents)}>
            <input type="checkbox" checked={showGents} /> gents
          </div>
          <div onClick={() => setShowSingle(!showSingle)}>
            <input type="checkbox" checked={showSingle} /> single
          </div>
          <div onClick={() => setShowMarried(!showMarried)}>
            <input type="checkbox" checked={showMarried} /> married
          </div>
          <div onClick={() => setShowHasChildren(!showHasChildren)}>
            <input type="checkbox" checked={showHasChildren} /> children
          </div>
          <div>
            <input type="checkbox" /> birthday
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
