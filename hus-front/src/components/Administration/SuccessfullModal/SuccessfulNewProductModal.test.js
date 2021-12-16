import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import SuccessfulNewProductModal from "./SuccessfulNewProductModal.jsx";
import { MemoryRouter } from "react-router";

test("SuccessfulNewProductModal renders correctly", () => {
  const { container } = render(
    <MemoryRouter>
      <SuccessfulNewProductModal />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
