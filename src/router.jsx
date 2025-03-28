import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </>
  )
);

export default router;
