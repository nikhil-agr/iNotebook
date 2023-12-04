import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error repellat est, enim, velit odit eligendi voluptates, culpa nesciunt ullam exercitationem itaque sint sed eum doloremque laudantium consectetur veritatis soluta! </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
