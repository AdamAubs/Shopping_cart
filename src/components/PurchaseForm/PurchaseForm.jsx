import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PurchaseForm.module.css";

import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export default function PurchaseForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const { cartItems, updatePurchasedItems, clearCart } =
    useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    // console.log("Order: ", cartItems);
    updatePurchasedItems(cartItems);
    navigate("/confirmation");
    clearCart();
    // Add form submission logic here (e.g., send data to a server)
  };

  return (
    <form className={styles.purchaseForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Card Number:
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Expiration Date:
        <input
          type="month"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        CVV:
        <input
          type="password"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Purchase</button>
    </form>
  );
}
