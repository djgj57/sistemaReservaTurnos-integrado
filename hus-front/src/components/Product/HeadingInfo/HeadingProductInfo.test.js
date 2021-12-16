import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import HeadingProductInfo from "./HeadingProductInfo";

afterEach(cleanup);

it("Expect score Bueno", () => {
  const city = "Cartagena";
  const score = 3.3;
  render(
    <MemoryRouter initialEntries={[`/product/1`]}>
      <HeadingProductInfo city={city} score={score} />
    </MemoryRouter>
  );
  expect(screen.getByText("Bueno")).toBeDefined();
});
it("Expect score Normal", () => {
  const city = "Cartagena";
  const score = 2.9;
  render(
    <MemoryRouter initialEntries={[`/product/1`]}>
      <HeadingProductInfo city={city} score={score} />
    </MemoryRouter>
  );
  expect(screen.getByText("Normal")).toBeDefined();
});
