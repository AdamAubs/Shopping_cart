import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Purchase from "./pages/Purchase/Purchase.jsx";
import PurchaseConfirmation from "./pages/PurchaseConfirmation/PurchaseConfirmation.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />}></Route>
      <Route path="/cart" element={<Checkout />}></Route>
      <Route path="/purchase" element={<Purchase />}></Route>
      <Route path="/confirmation" element={<PurchaseConfirmation />} />
    </>
  )
);

export default router;
