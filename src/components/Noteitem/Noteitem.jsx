import React, { useContext } from "react";
import noteContext from "../../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <div className="d-flex">
              <i className="mx-2 fa-sharp fa-solid fa-trash" onClick={()=>{deleteNote(note._id)}}></i>
              <i className="mx-2 fa-solid fa-file-pen"></i>
            </div>
          </div>
          <p className="card-text"> {note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
