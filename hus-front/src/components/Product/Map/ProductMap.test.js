import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import ProductMap from "./ProductMap";
import { MemoryRouter } from "react-router";

afterEach(cleanup);

it("Render city props in ProductMap", () => {
  const city = {
    name: "Cartagena",
    country: "Colombia",
  };
  const apiKey = "AIzaSyAek8mB0pwqNVMFECvxjM3QK8gBILr0yJA";
  const position = { lat: 10.42, lng: -75.52 };
  const { container } = render(
    <MemoryRouter initialEntries={[`/product/1`]}>
      <ProductMap city={city} apiKey={apiKey} position={position} />
    </MemoryRouter>
  );
  expect(screen.getByText("Cartagena, Colombia")).toBeDefined();
});
