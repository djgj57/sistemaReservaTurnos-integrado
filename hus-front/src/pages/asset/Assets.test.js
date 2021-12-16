import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Assets from "./Assets";

afterEach(cleanup);
it("Render assets page in /componentsfactory route", () => {
  const assets = render(
    <MemoryRouter initialEntries={[`/componentsfactory`]}>
      <Assets />
    </MemoryRouter>
  );
  expect(screen.getByText("Styled Component Factory")).toBeDefined();
});
