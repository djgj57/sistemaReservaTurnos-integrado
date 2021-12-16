import React, { useState as useStateMock } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, getByTestId } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userContext from "../../contexts/UserContext";
import Administration from "./Administration";

afterEach(cleanup);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

it("render admin page if is admin", () => {
  // USING STATLESS IN JEST
  const setState = jest.fn();
  useStateMock.mockImplementation(() => [true, setState]);
  const userData = {
    id: 4,
    name: "Arnold",
    lastname: "Schwarzenegger",
    username: "arnold@gmail.com",
    favorites: [4, 31, 3, 1],
    enabled: true,
  };
  const { container } = render(
    <MemoryRouter initialEntries={[`/product/admin`]}>
      <userContext.Provider value={{ userData }}>
        <Administration />
      </userContext.Provider>
    </MemoryRouter>
  );
  const admin = getByTestId(container, "isAdmin");
  expect(admin).toBeInTheDocument();
});
