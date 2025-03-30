import Button from "../Button/Button";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useContext, useState } from "react";

export default function NavBar() {
  const { cartItems } = useContext(ShoppingCartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
        <Link to={"/"}>
          <Button type={"shop"} children={"Shop"} />
        </Link>
        <Link to={"/cart"}>
          <div className={styles.cartList}>
            <Button type={"cart"} children={"Cart"} />
            <ul>
              {cartItems.map((item) => (
                <div className={styles.cartImage}>
                  <p className={styles.quantity}>{item.quantity}</p>
                  <img src={item.imageURL} alt={`Product ${item.productID}`} />
                </div>
              ))}
            </ul>
          </div>
        </Link>
        <Link to={"/purchase"}>
          <Button type={"purchase"} children={"Purchase"} />
        </Link>
      </ul>
    </nav>
  );
}
