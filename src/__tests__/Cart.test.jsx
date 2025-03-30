import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShoppingCartProvider } from "../context/ShoppingCartProvider";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import CartSummary from "../components/CartSummary/CartSummary";
import NavBar from "../components/NavBar/NavBar";

test("add zero items to cart and click on purchase button to get cart total", async () => {
  const initialCartItems = [];

  render(
    <MemoryRouter>
      <ShoppingCartProvider initialCartItem={initialCartItems}>
        <NavBar />
        <CartSummary />
      </ShoppingCartProvider>
    </MemoryRouter>
  );

  const addButton = screen.getByText("Purchase");
  await userEvent.click(addButton);

  expect(screen.getByText("Cart Total: $0.00")).toBeInTheDocument();
});

test("adds one item to cart and updates total", async () => {
  const initialCartItems = [
    { productID: 1, title: "Test Product", price: 10, quantity: 1 },
  ];

  render(
    <MemoryRouter>
      <ShoppingCartProvider initialCartItem={initialCartItems}>
        <NavBar />
        <CartSummary />
      </ShoppingCartProvider>
    </MemoryRouter>
  );

  const addButton = screen.getByText("Purchase");
  await userEvent.click(addButton);

  expect(screen.getByText("Cart Total: $10.00")).toBeInTheDocument();
});

test("adds many items to cart and updates total", async () => {
  let initialCartItemsArr = [];
  for (let i = 0; i < 10000; i++) {
    let initialCartItems = {
      productID: i,
      title: "Test Product",
      price: i,
      quantity: 1,
    };
    initialCartItemsArr.push(initialCartItems);
  }

  render(
    <MemoryRouter>
      <ShoppingCartProvider initialCartItem={initialCartItemsArr}>
        <NavBar />
        <CartSummary />
      </ShoppingCartProvider>
    </MemoryRouter>
  );

  const addButton = screen.getByText("Purchase");
  await userEvent.click(addButton);

  expect(screen.getByText("Cart Total: $49,995,000.00")).toBeInTheDocument();
});

test("Remove one item from the cart", async () => {
  const initialCartItems = [
    {
      productID: 1,
      title: "Test Product",
      price: 10,
      quantity: 1,
      imageURL: "test-image.jpg", // Add an image URL for rendering
    },
  ];

  render(
    <MemoryRouter>
      <ShoppingCartProvider initialCartItem={initialCartItems}>
        <NavBar />
        <Cart />
      </ShoppingCartProvider>
    </MemoryRouter>
  );
  // Verify that the CartItemCard is rendered with the correct initial quantity
  expect(screen.getByText("Quantity: 1")).toBeInTheDocument();

  const removeButton = screen.getByText("Remove One");
  await userEvent.click(removeButton);

  const cartItems = screen.queryAllByRole("article");
  expect(cartItems.length).toBe(0);
});

test("Remove some items from the cart", async () => {
  const initialCartItems = [
    {
      productID: 1,
      title: "Test Product",
      price: 10,
      quantity: 100,
      imageURL: "test-image.jpg", // Add an image URL for rendering
    },
  ];

  render(
    <MemoryRouter>
      <ShoppingCartProvider initialCartItem={initialCartItems}>
        <NavBar />
        <Cart />
      </ShoppingCartProvider>
    </MemoryRouter>
  );
  // Verify that the CartItemCard is rendered with the correct initial quantity
  expect(screen.getByText("Quantity: 100")).toBeInTheDocument();

  for (let i = 0; i < 40; i++) {
    const removeButton = screen.getByText("Remove One");
    await userEvent.click(removeButton);
  }

  expect(screen.getByText("Quantity: 60")).toBeInTheDocument();

  const cartItems = screen.queryAllByRole("article");
  expect(cartItems.length).toBe(1);
});
