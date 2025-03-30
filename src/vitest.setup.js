import { expect, afterEach } from "vitest"; // expect (core assertion library)
import { cleanup } from "@testing-library/react"; // cleanup()
import * as matchers from "@testing-library/jest-dom/matchers"; // matchers (not part of vitest by default)

// Extend expect to add custom matchers like
// toBeInTheDocument, toHaveTextContent
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
