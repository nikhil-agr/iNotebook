import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    //API Calling
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2OTc5NDhkNjQ0MzJiYzgxNTQ0ZjE2In0sImlhdCI6MTcwMTQyMzYwMH0.ij8IRamyPCN6GXC2k60Kp9gz72EPZZp9q3oPswrcuxQ",
      },
    });
    const json = await response.json();
    console.log(json);

    setNotes(json )
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    //API Calling
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2OTc5NDhkNjQ0MzJiYzgxNTQ0ZjE2In0sImlhdCI6MTcwMTQyMzYwMH0.ij8IRamyPCN6GXC2k60Kp9gz72EPZZp9q3oPswrcuxQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

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
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2OTc5NDhkNjQ0MzJiYzgxNTQ0ZjE2In0sImlhdCI6MTcwMTQyMzYwMH0.ij8IRamyPCN6GXC2k60Kp9gz72EPZZp9q3oPswrcuxQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
