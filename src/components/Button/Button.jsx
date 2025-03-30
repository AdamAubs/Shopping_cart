import styles from "./ButtonStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Button({ type, children, onClick }) {
  let buttonStyle;

  switch (type) {
    case "shop":
      buttonStyle = styles.shopBtn;
      break;
    case "cart":
      buttonStyle = styles.cart;
      break;
    case "purchase":
      buttonStyle = styles.purchase;
      break;
  }

  if (type === "shop") {
    return (
      <p className={buttonStyle} onClick={onClick}>
        {children}
      </p>
    );
  } else if (type === "cart") {
    return (
      <p className={buttonStyle} onClick={onClick}>
        {children}
        <FontAwesomeIcon icon={faShoppingCart} />
      </p>
    );
  } else if (type === "purchase") {
    return (
      <p className={buttonStyle} onClick={onClick}>
        {children}
      </p>
    );
  } else {
    return null;
  }
}
