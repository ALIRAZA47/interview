import logo from "./logo.svg";
import React, { useState, useContext } from "react";
import "./App.css";
import { Data } from "./data";
import Card from "./Card";

const CardContext = React.createContext();

// Add new card func

function App() {
  var [data, setData] = useState(Data);
  const addNewCard = () => {
    setData([
      ...data,
      {
        title: "New Card",
        pColor: "grey",
        bColor: ["#263238", "#90A4AE", "#616161"],
      },
    ]);
  };
  console.log(Data);
  return (
    <div className="cards">
      {data.map((card) => {
        return <Card key={card.title} {...card} />;
      })}
      <button
        className="card"
        style={{
          fontSize: "50px",
          backgroundColor: "#e4dce5",
          borderColor: "white",
        }}
        onClick={() => {
          addNewCard();
        }}
      >
        <b>+</b>
      </button>
    </div>
  );
}

export default App;
