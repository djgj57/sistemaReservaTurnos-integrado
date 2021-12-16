import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Main from "./Main";

afterEach(cleanup);
it("Render main component expect children", () => {
  const main = render(
    <MemoryRouter initialEntries={[`/`]}>
      <Main />
    </MemoryRouter>
  );
});
