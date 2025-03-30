import styles from "./Purchase.module.css";
import PurchaseForm from "../../components/PurchaseForm/PurchaseForm";
import CartSummary from "../../components/CartSummary/CartSummary";
import NavBar from "../../components/NavBar/NavBar";

export default function Purchase() {
  return (
    <div className={styles.purchaseContainer}>
      <NavBar />
      <CartSummary />
      <PurchaseForm />
    </div>
  );
}
