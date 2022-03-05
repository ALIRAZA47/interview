import logo from "./logo.svg";
import React, { useState, useContext } from "react";
import "./App.css";
import { Data } from "./data";
import Card from "./Card";

const CardContext = React.createContext();

function App() {
  const [data, setData] = useState(Data);
  console.log(Data);
  return (
    <CardContext.Provider value={setData}>
      <div className="cards">
        {data.map((card) => {
          return <Card key={card.title} {...card} />;
        })}
      </div>
    </CardContext.Provider>
  );
}

export default App;
