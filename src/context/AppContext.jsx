import { createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer/AppReducer";
import { fetchData } from "../services/api";

export const AppContext = createContext();

const initialState = {
  data: []
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const load = async () => {
      const data = await fetchData();
      dispatch({ type: "SET_DATA", payload: data });
    };
    load();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};