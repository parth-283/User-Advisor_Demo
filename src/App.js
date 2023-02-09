import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddList from "./Component/AddList";
import Advisor from "./Component/Advisor";
import User from "./Component/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddList />} />
        <Route path="/user" element={<User />} />
        <Route path="/advisor" element={<Advisor />} />
      </Routes>

    </div>
  );
}

export default App;
