import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react";
import { Children, useContext } from "react";
import { test, expect } from "vitest";
import { ShoppingCartProvider } from "./ShoppingCartProvider";
import { ShoppingCartContext } from "./ShoppingCartContext";

test("renders ShoppingCartProvider with children", () => {
  render(
    <ShoppingCartProvider>
      <div>Test Child</div>
    </ShoppingCartProvider>
  );

  expect(screen.getByText("Test Child")).toBeInTheDocument();
});

/*
UNIT TEST
*/
test("calculates that cart total correctly", () => {
  const wrapper = ({ children }) => (
    <ShoppingCartProvider>{children}</ShoppingCartProvider>
  );

  const { result } = renderHook(() => useContext(ShoppingCartContext), {
    wrapper,
  });

  act(() => {
    result.current.addToCart({ productID: 2, price: 20 });
    result.current.addToCart({ productID: 1, price: 10 });
  });

  expect(result.current.getCartTotal()).toBe(30);
});
