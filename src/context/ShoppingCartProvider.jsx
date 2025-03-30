import { useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

export function ShoppingCartProvider({ children, initialCartItem = [] }) {
  const [cartItems, setCartItems] = useState(initialCartItem);
  const [purchaseItems, setPurchasedItems] = useState([]);

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // Add an item to the cart
  const addToCart = (product) => {
    console.log("Adding: ", product);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productID === product.productID
      );
      console.log(prevItems);
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

  const updatePurchasedItems = (newItems) => {
    setPurchasedItems(newItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        purchaseItems,
        addToCart,
        removeFromCart,
        getCartTotal,
        updatePurchasedItems,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
