import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <div className="text-3xl">
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/auth"></Route>
      </Routes>
    </div>
  );
}

export default App;
