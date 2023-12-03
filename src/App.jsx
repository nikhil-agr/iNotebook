import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>

        <Navbar />
        <Outlet />
    </>
  );
}

export default App;
