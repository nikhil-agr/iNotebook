import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text"> {note.description}</p>
        </div>
        <div className="d-flex justify-content-end p-2">
        <i className="mx-2 fa-sharp fa-solid fa-trash"></i>
        <i className="mx-2 fa-solid fa-file-pen"></i>

        </div>
      </div>
    </div>
  );
};

export default Noteitem;
