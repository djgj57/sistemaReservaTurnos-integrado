import React, { useState as useStateMock } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen, getByTestId } from "@testing-library/react";
import MenuPhone from "./MenuPhone";
import { MemoryRouter } from "react-router";
import userContext from "../../../contexts/UserContext";
afterEach(cleanup);
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
it("Render hamburguer in mobile", () => {
  // USING STATLESS IN JEST
  const checkMenuPhone = jest.fn();
  useStateMock.mockImplementation(() => [true, checkMenuPhone]);
  // const userData = undefined;
  const close = () => {};
  // MOCK USER
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
        <MenuPhone close={close} />
      </userContext.Provider>
    </MemoryRouter>
  );
  const isMobile = getByTestId(container, "mobile-test");
  expect(isMobile).toBeInTheDocument();
});
