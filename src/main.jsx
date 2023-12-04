import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./components/Errorpage/Errorpage.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import NoteState from "./context/notes/NoteState.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteState>

      <RouterProvider router={router} />
    </NoteState>
  </React.StrictMode>
);
