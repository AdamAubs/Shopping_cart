import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./PurchaseConfirmation.module.css";

export default function PurchaseConfirmation() {
  const { purchaseItems } = useContext(ShoppingCartContext);

  return (
    <>
      <NavBar />
      <div className={styles.purchaseConfirmationContainer}>
        <h1>Thank you for your purchase!</h1>
        <h3>Items Purchased:</h3>
        <ul>
          {purchaseItems.map((item) => (
            <div className={styles.purchasedItemsContainer}>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.cartImage}>
                <p className={styles.quantity}>{item.quantity}</p>
                <img src={item.imageURL} alt={`Product ${item.productID}`} />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
