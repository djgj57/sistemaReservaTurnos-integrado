import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { act, cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import HeadingProduct from "./HeadingProduct";

afterEach(cleanup);

it("Render Header with name", () => {
  const category = {
    title: "Casa",
  };
  const name = "Casa en Bogotá";
  const { container } = render(
    <MemoryRouter initialEntries={[`/product/1`]}>
      <HeadingProduct category={category} name={name} />
    </MemoryRouter>
  );
  expect(screen.getByText("Casa en Bogotá")).toBeDefined();
});
// TEST GO BACK
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useHistory: () => ({
//     push: jest.fn(),
//   }),
// }));
// it("...", () => {
//   const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
//   const category = {
//     title: "Casa",
//   };
//   const name = "Casa en Bogotá";
//   const wrapper = render(
//     <MemoryRouter history={historyMock}>
//       <HeadingProduct category={category} name={name} />
//     </MemoryRouter>
//   );

//   const { onClick } = wrapper.props();
//   act(() => {
//     onClick();
//   });
//   expect(historyMock.push.mock.calls[0][0]).toEqual("/");
// });
