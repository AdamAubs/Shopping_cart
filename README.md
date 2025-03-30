# Shopping Cart - A simple way to look, buy, and purchase items

- Users can add items to cart, manipulate cart items in cart page, and
  purchase the fake items. When the user clicks purchase there data can then be sent to a server to handle its request.

## Data retrieval

- Retrieves Item from https://fakestoreapi.com
- Stores items in context named ProductsContext and is used
  to store all the product data fetched from https://fakestoreapi.com
- ShoppingCartContext stores the context of the users shopping cart
  across the entire app.

## Testing

### Unit Tests

- **Location:** stored in same directory of what files logic they are testing
- **Purpose:** tests logic

  Example: Does the getCartTotal function calculate totals correctly?

### Integration Tests

- **Location:** Stored in the **tests** directory at the root of src/
- **Purpose:** Test how multiple components/context work together

  Example: Does the ShoppingCartProvider update the cart when an item is added?
