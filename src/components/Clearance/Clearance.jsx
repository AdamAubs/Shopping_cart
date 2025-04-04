import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import styles from "./Clearance.module.css";
export default function Clearance() {
  const { products, loading } = useContext(ProductsContext);
  //console.log(products[0].id);

  if (loading) {
    return <p>Loading clearance products...</p>;
  }

  if (!products || products.length === 0) {
    return <p>Loading clearance products...</p>;
  }

  return (
    <div className={styles.clearanceContainer}>
      <div className={styles.clearanceHeader}>
        <h1>The Clearance Store</h1>
        <i>Where Everything Is on Clearance</i>
      </div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productID={product.id} // Pass product.id as productID
            title={product.title}
            description={product.description}
            imageURL={product.image}
            price={product.price}
            className={styles.productCard}
          />
        ))}
      </div>
    </div>
  );
}
