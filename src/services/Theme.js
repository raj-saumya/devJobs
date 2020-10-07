import React, { createContext, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../utils/theme";

const initialState = {
  isDark: false
};

export const ThemeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        isDark: !state.isDark
      };
    default:
      return state;
  }
};

const Theme = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme.isDark ? dark : light}>
      <ThemeContext.Provider
        value={{
          theme,
          dispatch
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
