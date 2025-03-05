import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext("");

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <>user={user}</>
    </UserContext.Provider>
  );
}
