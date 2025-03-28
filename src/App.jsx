import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ProductsProvider } from "./context/ProductsProvider";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";

function App() {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </ProductsProvider>
  );
}

export default App;
