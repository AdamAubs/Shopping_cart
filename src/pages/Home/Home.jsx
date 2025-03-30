import NavBar from "../../components/NavBar/NavBar";
import Clearance from "../../components/Clearance/Clearance";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <NavBar className={styles.navbar} />
      <Clearance className={styles.clearance} />
    </div>
  );
}
