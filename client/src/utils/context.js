import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const contextValue = { categories, setCategories, products, setProducts };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default AppContext;
