import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let prodIndex = items.findIndex((items) => items.id === product.id);
    if (prodIndex !== -1) {
      // if prodIndex is not -1 it means product is already in the cart
      items[prodIndex].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((item) => item.id !== product.id);
    setCartItems(items);
  };

  const contextValue = {
    categories,
    setCategories,
    products,
    setProducts,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
    handleAddToCart,
    handleRemoveFromCart,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default AppContext;
