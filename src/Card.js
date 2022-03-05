import React, { useState } from "react";
import "./index.css";
const Card = ({ title, pColor, bColor }) => {
  var count = 0;
  //   var Color = bColor[count];
  const [counter, setcounter] = useState(count);
  const changeColor = () => {
    setcounter(counter + 1);
  };

  return (
    <div
      className="card"
      style={{ backgroundColor: bColor[counter % bColor.length] }}
    >
      <div>
        <div className="card-header">
          <h2 style={{ color: pColor }}>{title}</h2>
          <button
            style={{ backgroundColor: pColor, color: "white" }}
            className="btn"
            onClick={() => {
              changeColor();
            }}
          >
            Change Color
          </button>
        </div>
      </div>
      <div className="subtitle-of-card">
        <p>Subtitle</p>
      </div>
    </div>
  );
};

export default Card;
