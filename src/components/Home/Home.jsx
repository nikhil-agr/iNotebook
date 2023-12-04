import React, { useContext } from "react";
import noteContext from "../../context/notes/noteContext";

const Home = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="text-white">
      <h1 className="text-danger">This is iNotebook</h1>
      <h3 className="text-warning">Your Notes Secured In The Cloud</h3>

      <h1 className="text-center mt-5">Your Notes</h1>
      {notes.map((note) => {
        return note.title;
      })}
    </div>
  );
};

export default Home;
