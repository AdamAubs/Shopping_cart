# 🛒 [Shopping Cart - A Simple Way to Look, Buy, and Purchase Items](https://simple-shopping-cart-zeta.vercel.app/)

A simple shopping cart app where users can browse items, add them to the cart, manipulate cart items, and simulate purchases. When users click "purchase," their data is sent to a server for further processing.  

## 🚀 Features  
✅ Browse and add items to the cart  
✅ Update or remove cart items  
✅ Simulated purchase process  
✅ Data persistence using React Context  

---

## 📦 Data Retrieval  

The app fetches product data from [FakeStoreAPI](https://fakestoreapi.com/) and manages it using React Context:  

- **ProductsContext** – Stores and provides all product data.  
- **ShoppingCartContext** – Manages the user's shopping cart across the entire app.  

---

## 🧪 Testing  

### ✅ Unit Tests  
- **Location:** Stored alongside the files they test.  
- **Purpose:** Validate individual functions and logic.  
- **Example:** Checking if `getCartTotal()` correctly calculates cart totals.  

### 🔗 Integration Tests  
- **Location:** Stored in the `/tests` directory inside `src/`.  
- **Purpose:** Ensure multiple components and contexts work together correctly.  
- **Example:** Verifying if `ShoppingCartProvider` updates the cart when an item is added.  

---

