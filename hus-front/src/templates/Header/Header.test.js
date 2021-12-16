import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";
import userContext from "../../contexts/UserContext";

afterEach(cleanup);

it("Render username in header", () => {
  // MOCK USER
  const userData = {
    id: 1,
    name: "Franco",
    lastname: "Gutierrez",
    username: "jisokah851@nefacility.com",
    favorites: [1, 2],
    enabled: true,
  };
  render(
    <MemoryRouter initialEntries={[`/`]}>
      <userContext.Provider value={{ userData }}>
        <Header />
      </userContext.Provider>
    </MemoryRouter>
  );
  expect(screen.getByText("Franco Gutierrez")).toBeDefined();
});

it("Render no user header", () => {
  const userData = undefined;
  const queryByLabelText = render(
    <MemoryRouter initialEntries={[`/`]}>
      <userContext.Provider value={{ userData }}>
        <Header />
      </userContext.Provider>
    </MemoryRouter>
  );
  expect(screen.getByText("Crear Cuenta")).toBeDefined();
  expect(screen.getByText("Iniciar sesión")).toBeDefined();
});
