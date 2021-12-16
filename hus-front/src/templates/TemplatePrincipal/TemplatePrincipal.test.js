import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import TemplatePrincipal from "./TemplatePrincipal";
import { MemoryRouter } from "react-router";
import userContext from "../../contexts/UserContext";

afterEach(cleanup);

it("Mount template principal", () => {
  const userData = {
    id: 1,
    name: "Franco",
    lastname: "Gutierrez",
    username: "jisokah851@nefacility.com",
    favorites: [1, 2],
    enabled: true,
  };
  const { container } = render(
    <MemoryRouter initialEntries={[`/`]}>
      <userContext.Provider value={{ userData }}>
        <TemplatePrincipal />
      </userContext.Provider>
    </MemoryRouter>
  );
  expect(screen.getByText("Franco Gutierrez")).toBeDefined();
});
