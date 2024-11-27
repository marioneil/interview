import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";

function App() {
  return (
    <div className="text-3xl">
      <Routes>
        <Route path="/"></Route>
        <Route path="/auth"></Route>
      </Routes>
    </div>
  );
}

export default App;
