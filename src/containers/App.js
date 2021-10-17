import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import Filter from "../components/Filter";
import Note from "../components/Note";

const App = () => {
  const [cousinsList, setCousinsList] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [showLadies, setShowLadies] = useState(true);
  const [showGents, setShowGents] = useState(true);
  const [showSingle, setShowSingle] = useState(true);
  const [showMarried, setShowMarried] = useState(true);
  const [showHasChildren, setShowHasChildren] = useState(true);
  const filteredCousins = cousinsList.filter((cousin) => {
    if (!showLadies && !showGents) return false;
    if (!cousin.name.toLowerCase().includes(searchfield.toLowerCase())) {
      return false;
    }
    if (!showLadies && cousin.gender === "f") {
      return false;
    }
    if (!showGents && cousin.gender === "m") {
      return false;
    }
    if (!showMarried && cousin.spouse) {
      return false;
    }
    if (!showSingle && !cousin.spouse) {
      return false;
    }
    if (!showHasChildren && cousin.children) {
      return false;
    }
    return true;
  });

  async function getCousins() {
    try {
      const response = await fetch(
        "https://announcement-server-f2r5n.ondigitalocean.app/cousins"
      );
      const parsedResponse = await response.json()
      console.log(parsedResponse);
      if (parsedResponse.isSuccess) {
        setCousinsList(parsedResponse.cousins)
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getCousins()
    // setCousinsList(cousins);
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  return !cousinsList.length ? (
    <h1>Loading your peeps</h1>
  ) : (
    <div className="page-wrapper">
      <div className="note-title">
        <Note />
        <h1>Espera Cousins</h1>
        <div className="message-me"></div>
      </div>
      <div className="search">
        <SearchBox searchChange={onSearchChange} />
        <Filter
          showLadies={showLadies}
          setShowLadies={setShowLadies}
          showGents={showGents}
          setShowGents={setShowGents}
          showSingle={showSingle}
          setShowSingle={setShowSingle}
          showMarried={showMarried}
          setShowMarried={setShowMarried}
          showHasChildren={showHasChildren}
          setShowHasChildren={setShowHasChildren}
        />
      </div>
      <Scroll>
        <CardList cousins={filteredCousins} />
      </Scroll>
    </div>
  );
};

export default App;
