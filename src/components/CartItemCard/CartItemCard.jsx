import styles from "./CartItemCard.module.css";

import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export default function CartItemCard({
  productID,
  title,
  imgURL,
  quantity,
  removeOne,
  addOne,
}) {
  return (
    <div className={styles.cartItemCardContainer}>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.productID}> Product ID: {productID}</p>
        <p className={styles.quantity}> Quantity: {quantity}</p>
      </div>
      <img src={imgURL} alt={imgURL} className={styles.image} />
      <div className={styles.buttons}>
        <button onClick={removeOne}>Remove One</button>
        <button onClick={addOne}>Add One</button>
      </div>
    </div>
  );
}
