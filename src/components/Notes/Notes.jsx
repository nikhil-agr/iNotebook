import React, { useContext } from "react";
import noteContext from "../../context/notes/noteContext";
import Noteitem from "../Noteitem/Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h4 className="text-center mt-5 text-decoration-underline">Your Notes</h4>
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
