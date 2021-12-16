import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render} from "@testing-library/react";
import ArrivalSchedule from "./ArrivalSchedule";
import { MemoryRouter } from "react-router";

afterEach(cleanup);
it("Render ArrivalSchedule", () => {
  const arrivalSchedule = render(
    <MemoryRouter initialEntries={[`/reservation/product/:id`]}>
      <ArrivalSchedule/>
    </MemoryRouter>
  );
  //arrivalSchedule.getByText("Tu horario de llegada");
  expect (arrivalSchedule.container).toHaveTextContent("Tu horario de llegada");
  const select = arrivalSchedule.container.querySelector('select');
  
});