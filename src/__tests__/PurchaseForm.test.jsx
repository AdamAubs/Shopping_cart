import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "../context/ShoppingCartProvider";
import PurchaseForm from "../components/PurchaseForm/PurchaseForm";
import PurchaseConfirmation from "../pages/PurchaseConfirmation/PurchaseConfirmation";
import { test, expect } from "vitest";

test("form correctly handles purchases", async () => {
  render(
    <ShoppingCartProvider>
      <MemoryRouter initialEntries={["/purchase"]}>
        <Routes>
          <Route path="/purchase" element={<PurchaseForm />} />
          <Route path="/confirmation" element={<PurchaseConfirmation />} />
        </Routes>
      </MemoryRouter>
    </ShoppingCartProvider>
  );

  // Simulate user input
  await userEvent.type(screen.getByLabelText(/name/i), "John Doe");
  await userEvent.type(screen.getByLabelText(/email/i), "john.doe@example.com");
  await userEvent.type(screen.getByLabelText(/address/i), "123 Main St");
  await userEvent.type(
    screen.getByLabelText(/card number/i),
    "4111111111111111"
  );
  // Valid test card number
  await userEvent.type(screen.getByLabelText(/expiration date/i), "2025-12"); // Valid expiration date (use "YYYY-MM" for <input type="month">)
  await userEvent.type(screen.getByLabelText(/cvv/i), "123"); // Valid CVV

  // Click the purchase button
  const purchaseButton = screen.getByRole("button", { name: /purchase/i });
  await userEvent.click(purchaseButton);

  // Verify that the purchase confirmation message is displayed
  expect(screen.getByText("Thank you for your purchase!")).toBeInTheDocument();
});
