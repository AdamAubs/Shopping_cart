import styles from "./Cart.module.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import CartItemCard from "../CartItemCard/CartItemCard.jsx";
import NavBar from "../NavBar/NavBar.jsx";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } =
    useContext(ShoppingCartContext);

  const handleRemoveOne = (item) => {
    if (item.quantity >= 1) {
      removeFromCart(item);
    }
  };

  const handleAddOne = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.cartContainer}>
      <NavBar />
      <h1 className={styles.cartTitle}>Cart</h1>
      {cartItems.map((item) => (
        <CartItemCard
          key={item.productID}
          productID={item.productID}
          title={item.title}
          imgURL={item.imageURL}
          quantity={item.quantity}
          removeOne={() => handleRemoveOne(item)} // Pass the function with the item
          addOne={() => handleAddOne(item)} // Pass the function with the item
        />
      ))}
    </div>
  );
}
