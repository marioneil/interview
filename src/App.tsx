import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { withLoadingSpinner } from "./WithLoadingSpinner";

const HocHome = withLoadingSpinner(Home);

function App() {
  return (
    <div className="text-3xl">
      <Routes>
        <Route
          path="/"
          element={<HocHome url={"https://api.restful-api.dev/objects"} />}
        ></Route>
        <Route path="/auth"></Route>
      </Routes>
    </div>
  );
}

export default App;
