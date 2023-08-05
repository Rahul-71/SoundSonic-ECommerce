import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

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

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let prodIndex = items.findIndex((item) => item.id === product.id);
    let prodQuantity = items[prodIndex].attributes.quantity;
    if (type === "inc") {
      items[prodIndex].attributes.quantity = prodQuantity + 1;
    } else if (type === "dec") {
      if (prodQuantity > 1)
        items[prodIndex].attributes.quantity = prodQuantity - 1;
    }
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
    handleCartProductQuantity,
    cartSubTotal,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default AppContext;
