import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render} from "@testing-library/react";
import ReservationModal from "./ReservationModal";
import { MemoryRouter } from "react-router";

test ("SuccessfulBookingModal renders correctly", () => {
    const { container } = render (
        <MemoryRouter>
        <ReservationModal />
        </MemoryRouter>
    );
    expect (container).toMatchSnapshot ();
    });