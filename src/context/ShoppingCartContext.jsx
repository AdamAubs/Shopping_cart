import { createContext } from "react";

export const ShoppingCartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartTotal: () => {},
  clearCart: () => {},
  updateCartItems: () => {},
});
