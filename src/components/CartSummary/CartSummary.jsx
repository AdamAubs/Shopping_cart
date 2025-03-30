import styles from "./CartSummary.module.css";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";

export default function CartSummary() {
  const { getCartTotal } = useContext(ShoppingCartContext);

  // Format the total with commas
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(getCartTotal());

  return (
    <div className={styles.CartTotalContainer}>
      <p>Cart Total: {formattedTotal}</p>
    </div>
  );
}
