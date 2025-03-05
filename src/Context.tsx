import React, { useState, createContext, PropsWithChildren } from "react";

//export const SearchContext = createContext({loading:false, setLoading:(x:boolean)=> {} });

export const SearchContext = createContext({
  loading: false,
  setLoading: (bool: boolean) => {
    console.log("not defined");
  },
});

export const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // return (<SearchContext.Provider  value={{loading, setLoading}}>
  return (
    <SearchContext.Provider value={{ loading, setLoading }}>
      {children}
    </SearchContext.Provider>
  );
};
