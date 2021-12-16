import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { MemoryRouter } from "react-router";

afterEach(cleanup);
it("Render footer", () => {
  const footer = render(
    <MemoryRouter initialEntries={[`/`]}>
      <Footer />
    </MemoryRouter>
  );
  expect(screen.getByText("©2021 Hus")).toBeDefined();
});
