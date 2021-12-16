import React, { useState as useStateMock } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, getByTestId } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Login from "./Login";
import userContext from "../../contexts/UserContext";

afterEach(cleanup);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

it("render component login route /login", () => {
  // USING STATLESS IN JEST
  const userData = {
    id: 1,
    name: "Franco",
    lastname: "Gutierrez",
    username: "jisokah851@nefacility.com",
    favorites: [1, 2],
    enabled: true,
  };
  const setError = jest.fn();
  useStateMock.mockImplementation(() => ["", setError]);
  const { container } = render(
    <MemoryRouter initialEntries={[`/product/login`]}>
      <userContext.Provider value={{ userData }}>
        <Login />
      </userContext.Provider>
    </MemoryRouter>
  );
  const login = getByTestId(container, "loginComponent");
  expect(login).toBeInTheDocument();
});
// it("should update email field on change", () => {
//   // USING STATLESS IN JEST
//   const setError = jest.fn();
//   useStateMock.mockImplementation(() => ["", setError]);
//   const { container } = render(
//     <MemoryRouter initialEntries={[`/product/login`]}>
//       <Login />
//     </MemoryRouter>
//   );
//   const emailInput = getByLabelText(container, "Correo electrónico");

// });
