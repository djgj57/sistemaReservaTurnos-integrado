import React from "react";
import { Carousel } from "react-carousel-minimal";
import { GalleryLightboxStyled } from "./GalleryLightboxStyled";

export default function GalleryLightbox({ images, open, onClose }) {
  return (
    <>
      {open && (
        <GalleryLightboxStyled>
          <button onClick={onClose}>
            <i class="fas fa-times" style={{ color: "azure" }}></i>
          </button>
          <Carousel
            data={images}
            width="850px"
            height="400px"
            automatic={true}
            time={3000}
            slideNumber={true}
            thumbnails={true}
          />
        </GalleryLightboxStyled>
      )}
    </>
  );
}
