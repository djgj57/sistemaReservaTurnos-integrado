import React, { useState as useStateMock } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import CalendarReserve from "./CalendarReserve";
import { MemoryRouter } from "react-router";
import userContext from "./../../../contexts/UserContext";

afterEach(cleanup);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
it("Render CalendarReserve", () => {
  // USING STATLESS IN JEST
  const date = new Date();
  const setDate = jest.fn();
  useStateMock.mockImplementation(() => [date, setDate]);
  const setIdProduct = jest.fn();
  useStateMock.mockImplementation(() => [1, setIdProduct]);
  const dates = [];
  const setDates = jest.fn();
  useStateMock.mockImplementation(() => [dates, setDates]);

  const reservationForm = render(
    <MemoryRouter initialEntries={[`/reservation/product/1`]}>
      <CalendarReserve />
    </MemoryRouter>
  );
});
