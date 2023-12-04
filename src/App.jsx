import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <>
      <Navbar />
      <Alert message="This is Amazing" />
      <Outlet />
    </>
  );
}

export default App;
