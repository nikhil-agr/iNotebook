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
    {
      _id: "65699445b005e34b8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569a1c600e6c2db6e117",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "6569445b305e34be87a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "569aa1c600e6cdb6e5611",
      user: "65697948d64432bc81544f16",
      title: "Lunch Done",
      description: "went for lunch at 1:40pm",
      tag: "personal",
      date: "2023-12-01T09:40:44.349Z",
      __v: 0,
    },
    {
      _id: "65699445b3005e3be8d57a2",
      user: "65697948d64432bc81544f16",
      title: "Dinner",
      description: "Go for dinner at 8pm",
      tag: "personal",
      date: "2023-12-01T08:07:33.983Z",
      __v: 0,
    },
    {
      _id: "6569a1c600e6c2db6e56117",
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
