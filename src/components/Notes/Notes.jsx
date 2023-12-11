import Noteitem from "../Noteitem/Noteitem";
import AddNote from "../AddNote/AddNote";
import noteContext from "../../context/notes/noteContext";
import { useContext } from "react";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h4 className="text-center mt-5 text-decoration-underline">
          Your Notes
        </h4>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
