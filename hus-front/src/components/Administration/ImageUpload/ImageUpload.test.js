import React, { useState as useStateMock } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, getByTestId } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userContext from "../../contexts/UserContext";
import ImageUpload from "./ImageUpload";

afterEach(cleanup);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const userData = {
  id: 4,
  name: "Arnold",
  lastname: "Schwarzenegger",
  username: "arnold@gmail.com",
  favorites: [4, 31, 3, 1],
  enabled: true,
};
const name = "image";
const values = "";
const emptyImages = [];
const value = "";
it("render image upload", () => {
  // USING STATLESS IN JEST
  const setState = jest.fn();
  useStateMock.mockImplementation(() => [true, setState]);
  const { container } = render(
    <MemoryRouter initialEntries={[`/adminw`]}>
      <userContext.Provider value={{ userData }}>
        <ImageUpload name={name} values={values} emptyImages={emptyImages} />
      </userContext.Provider>
    </MemoryRouter>
  );
  const admin = getByTestId(container, "isAdmin");
  expect(admin).toBeInTheDocument();
});
