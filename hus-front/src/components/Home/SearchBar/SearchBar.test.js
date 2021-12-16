import React, {useState} from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render} from "@testing-library/react";
import SearchBar from "./SearchBar";
import { MemoryRouter } from "react-router";
import productsContext from "./../../../contexts/ProductsContext";
import loadContext from "./../../../contexts/LoadContext"

afterEach(cleanup);
jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn(),
  }));
it("Render SearchBar", () => {
    const setListProduct = jest.fn();
  const page = 1;
  useState.mockImplementation(() => ["", setListProduct]);
  const searchBar = render(
    <MemoryRouter initialEntries={[`/`]}>
      <productsContext.Provider value={{ listProducts: {} }}>
        <loadContext.Provider value={{ page: { page } }}>
            <SearchBar/>
        </loadContext.Provider>
      </productsContext.Provider>
    </MemoryRouter>
  );
  expect (searchBar.container).toHaveTextContent("Busca ofertas en casas, apartamentos y mucho más");
});