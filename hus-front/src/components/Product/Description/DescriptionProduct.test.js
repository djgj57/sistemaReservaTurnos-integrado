import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen, getByTestId } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import FeaturesProduct from "../Features/FeaturesProduct";
import DescriptionProduct from "./DescriptionProduct";

afterEach(cleanup);

it("Expect category and description from props", () => {
  const category = "Casas con todas las comodidades necesarias";
  const description = "Lorem lorem";
  render(
    <MemoryRouter initialEntries={[`/product/1`]}>
      <DescriptionProduct category={category} description={description} />
    </MemoryRouter>
  );
  expect(
    screen.getByText("Casas con todas las comodidades necesarias")
  ).toBeDefined();
  expect(screen.getByText("Lorem lorem")).toBeDefined();
});
