import React, { createContext, useReducer } from "react";

const initialState = {
  jobsList: []
};

export const CTX = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_JOBS":
      return {
        ...state,
        jobsList: action.payload
      };
    default:
      return state;
  }
};

const DataStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CTX.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </CTX.Provider>
  );
};

export default DataStore;
