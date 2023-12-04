import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "65699445b3005e34be8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569aa1c600e6c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "65699445b3005e34be8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569aa1c600e6c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "65699445b3005e34be8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569aa1c600e6c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "65699445b3005e34be8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569aa1c600e6c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "65699445b3005e34be8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569aa1c600e6c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "65699445b3005e34be8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569aa1c600e6c2db6e56117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
