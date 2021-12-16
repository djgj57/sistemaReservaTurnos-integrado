import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import SuccessfulBookingModal from "./SuccessfulBookingModal";
import { MemoryRouter } from "react-router";

test ("SuccessfulBookingModal renders correctly", () => {
    const { container } = render (
        <MemoryRouter>
        <SuccessfulBookingModal />
        </MemoryRouter>
    );
    expect (container).toMatchSnapshot ();
    });