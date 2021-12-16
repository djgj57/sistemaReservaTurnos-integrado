import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render} from "@testing-library/react";
import Data from "./Data";
import { MemoryRouter } from "react-router";

afterEach(cleanup);
it("Render user data in DataForm", () => {
    const userData={
        name:"Juan",
        lastname:"Perez",
        username:"juanperez@jp.com"
    }
  const data = render(
    <MemoryRouter initialEntries={[`/reservation/product/:id`]}>
      <Data userData={userData}/>
    </MemoryRouter>
  );
  data.getByDisplayValue("Juan");
  data.getByDisplayValue("Perez");
  data.getByDisplayValue("juanperez@jp.com");
});