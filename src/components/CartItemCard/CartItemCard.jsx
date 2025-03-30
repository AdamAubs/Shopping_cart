import styles from "./CartItemCard.module.css";

export default function CartItemCard({
  productID,
  title,
  price,
  imgURL,
  quantity,
  removeOne,
  addOne,
}) {
  return (
    <div className={styles.cartItemCardContainer} role="article">
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}> Price: {price}</p>
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
