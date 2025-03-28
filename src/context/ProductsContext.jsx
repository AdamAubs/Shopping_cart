import { createContext } from "react";

export const ProductsContext = createContext({
  products: [],
  loading: true,
});
