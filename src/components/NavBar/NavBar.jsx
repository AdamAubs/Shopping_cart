import Button from "../Button/Button";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link to={"/"}>
        <Button type={"shop"} children={"Shop"} /> ➝
      </Link>
      <Link to={"/checkout"}>
        <Button type={"checkout"} children={"Checkout"} /> ➝
      </Link>
      <Button type={"purchase"} children={"Purchase"} />
    </nav>
  );
}
