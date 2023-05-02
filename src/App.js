import React, { useState } from "react";
import Router from "./router/Router";
import { MainContext } from "./context/Context";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [db , setDb] = useState([])

  const data = {
    name,
    setName,
    surname,
    setSurname,
    number,
    setNumber,
    setDb,
    db
  };

  return (
    <div>
      <MainContext.Provider value={data}>
        <Router />
      </MainContext.Provider>
    </div>
  );
};

export default App;
