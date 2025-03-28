import { useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    /* List of Items in Cart */
  ]);

  // Add an item to the cart
  const addToCart = (product) => {
    console.log("Adding: ", product);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productID === product.productID
      );
      if (existingItem) {
        // If the item already exists, update its quantity
        return prevItems.map((item) =>
          item.productID === product.productID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productID === product.productID
      );
      if (existingItem.quantity > 1) {
        // Decrement the quantity
        return prevItems.map((item) =>
          item.productID === product.productID
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Remove the item entirely
        return prevItems.filter((item) => item.productID !== product.productID);
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
