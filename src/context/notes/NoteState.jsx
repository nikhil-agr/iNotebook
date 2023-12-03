import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Nikhil",
    college: "NIT Kurukshetra",
  };
  const [state, setState] = useState(s1)
  const update = ()=>{
    setTimeout(async () => {
        await setState({
            name:"Bikhil",
            college:"IIIT Ranchi"
        })
    }, 1000);
  }
  return (
    <NoteContext.Provider value={{state, update}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
