import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render} from "@testing-library/react";
import MapModal from "./MapModal";
import { MemoryRouter } from "react-router";

test ("SuccessfulBookingModal renders correctly", () => {
    const { container } = render (
        <MemoryRouter>
        <MapModal />
        </MemoryRouter>
    );
    expect (container).toMatchSnapshot ();
    });