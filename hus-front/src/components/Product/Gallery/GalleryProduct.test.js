import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, getByTestId } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import GalleryProduct from "./GalleryProduct";

afterEach(cleanup);

it("render images from props", () => {
  const images = [
    {
      0: {
        id: 8,
        title: "Foto 8",
        url: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
      },
      1: {
        id: 2,
        title: "Foto 2",
        url: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
      },
    },
  ];
  const handleShowLightbox = 3.3;
  const { container } = render(
    <MemoryRouter initialEntries={[`/product/1`]}>
      <GalleryProduct images={images} handleShowLightbox={handleShowLightbox} />
    </MemoryRouter>
  );

  const isPhotoRenderice = getByTestId(container, "wrapGallery");
  expect(isPhotoRenderice).toBeInTheDocument();
});
