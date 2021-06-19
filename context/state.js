import React from 'react'
import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = "context from state.js"

  return (
    <AppContext.Provider value={sharedState}>
      {/* {children} */}
      {console.log(children, "children")}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
