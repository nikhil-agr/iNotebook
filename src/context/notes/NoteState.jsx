import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "656994453005e34be8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "669aa1c600e6c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "6569445b3005e34bed7a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "656aa1c600e6c2b6e5617",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "6569445b3005e34bed57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569aa1c600c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    //TODO API Call
    const note = {
      _id: "6569a1c600e6c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: title,
      description: description,
      tag: tag,
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {
    //TODO API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
