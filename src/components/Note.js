import React, { useEffect, useState } from "react";
import { ReactComponent as Notepad } from "../assets/notepad.svg";

const Note = () => {
  const [showNote, setShowNote] = useState(false);
  useEffect(() => {
    const closeNote = () => setShowNote(false);
    if (showNote) {
      document.body.addEventListener("click", closeNote);
    } else {
      document.body.removeEventListener("click", closeNote);
    }
    return () => document.body.removeEventListener("click", closeNote);
  }, [showNote]);
  return (
    <div className="note" onClick={() => setShowNote(!showNote)}>
      <Notepad />
      Note
      {showNote ? (
        <div className="note-popup br2 shadow-3" onClick={(e) => e.stopPropagation()}>
          <p>Hello fam!</p>
          Thank you for checking out my mini project. 
          I hope this  can help us keep track of each other's info, people and dates.
          I really started this project for me, but thought we could all use it.
          <p>If there is something you want fixed, added, removed, or updated, please let me know.
             You have my contact info ;)
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Note;
