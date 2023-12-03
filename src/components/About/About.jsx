import React, { useContext, useEffect } from "react";
import noteContext from "../../context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update()
  }, [])
  
  return (
    <div className="text-white">
        This is About {a.state.name} and he is in college: {a.state.college}
    </div>
  );
};

export default About;
