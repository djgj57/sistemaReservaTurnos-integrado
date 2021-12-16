import React, { useState as useStateMock } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CategorieCard from "./CategorieCard";
import productsContext from "./../../../contexts/ProductsContext";
import loadContext from "./../../../contexts/LoadContext";

//afterEach(cleanup);
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
it("Render card category props", () => {
  const title = "apartamentos";
  const options = "aparamentos";
  const img =
    "https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884_960_720.jpg";
  const alt = "aparamentos";
  const setListProduct = jest.fn();
  const page = 1;
  useStateMock.mockImplementation(() => ["", setListProduct]);
  render(
    <MemoryRouter initialEntries={[`/`]}>
      <productsContext.Provider value={{ listProducts: {} }}>
        <loadContext.Provider value={{ page: { page } }}>
          <CategorieCard title={title} options={options} img={img} alt={alt} />
        </loadContext.Provider>
      </productsContext.Provider>
    </MemoryRouter>
  );
  expect(screen.getByText("apartamentos")).toBeDefined();
});
