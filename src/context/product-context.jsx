import { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../Api";
export const ProductContext = createContext(null);

export const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getDefaultCart = async () => {
      const products = await fetchProducts();
      let cart = {};
      for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0;
      }
      setCartItems(cart);
    };

    getDefaultCart();
  }, []);

  const addToCart = (item) => {
    if (!cart.find((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
    }
    setCartItems((prev) => ({ ...prev, [item.id]: prev[item.id] + 1 }));
  };

  const removeFromCart = (item) => {
    if (cartItems[item.id] === 1) {
      setCart(cart.filter((i) => i !== item));
    }
    setCartItems((prev) => ({ ...prev, [item.id]: prev[item.id] - 1 }));
  };

  const getTotalCost = () => {
    return cart.reduce(
      (acc, currentVal) =>
        acc + Number(currentVal.price) * cartItems[currentVal.id],
      0
    );
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    cart,
    getTotalCost,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
