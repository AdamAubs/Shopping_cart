import { useContext } from "react";
import styles from "./ProductCard.module.css";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export default function ProductCard({
  productID,
  title,
  description,
  imageURL,
  price,
}) {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    console.log(productID);
    addToCart({ productID, title, description, imageURL, price });
  };

  return (
    <div className={styles.productContainer}>
      <img src={imageURL} alt={imageURL} className={styles.image} />
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>

        <label>
          Description:
          <p className={styles.description}>{description}</p>
        </label>

        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add to Cart
        </button>
        <p>{productID}</p>
      </div>
    </div>
  );
}
