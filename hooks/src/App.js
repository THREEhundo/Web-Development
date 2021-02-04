import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This Div Can Change Color. Click Me!
      </div>
    </div>
  );
};

export default App;
