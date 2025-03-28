import styles from "./ButtonStyles.module.css";

export default function Button({ type, children, onClick }) {
  let buttonStyle;

  switch (type) {
    case "shop":
      buttonStyle = styles.shopBtn;
      break;
    case "checkout":
      buttonStyle = styles.checkout;
      break;
    case "purchase":
      buttonStyle = styles.purchase;
      break;
  }

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
