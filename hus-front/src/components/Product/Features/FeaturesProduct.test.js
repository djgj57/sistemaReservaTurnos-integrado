import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen, getByTestId } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import FeaturesProduct from "./FeaturesProduct";

afterEach(cleanup);

it("Expect icon from db", () => {
  const features = [
    {
      0: { icon: "FaFireExtinghuisher", id: 20, name: "Extintor" },
      1: { icon: "FaSwimmingPool", id: 20, name: "Piscina" },
    },
  ];
  const { container } = render(
    <MemoryRouter initialEntries={[`/product/1`]}>
      <FeaturesProduct features={features} />
    </MemoryRouter>
  );
  const isIconCorrect = getByTestId(container, "featureName");
  expect(isIconCorrect).toBeInTheDocument();
});
