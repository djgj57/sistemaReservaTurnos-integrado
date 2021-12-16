import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PolicyProduct from "./PolicyProduct";

afterEach(cleanup);

it("Show policy", () => {
  render(
    <MemoryRouter initialEntries={[`/product/1`]}>
      <PolicyProduct />
    </MemoryRouter>
  );
  expect(screen.getByText("No se permiten fiestas")).toBeDefined();
});
