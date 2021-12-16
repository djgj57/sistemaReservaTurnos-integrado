import { GalleryProductStyled } from "./GalleryProductStyled";

export default function GalleryProduct({ images, handleShowLightbox }) {
  const secondGroupImg = images.slice(1, 5);
  return (
    <GalleryProductStyled>
      <div className="product_gallery_column_1" data-testid="wrapGallery">
        <div
          className="product_gallery_wrap"
          style={{ backgroundImage: `url(${images[0].url})` }}
        ></div>
      </div>

      <div className="product_gallery_column_2">
        {secondGroupImg.map((img, i) => (
          <div
            className="product_gallery_wrap"
            style={{ backgroundImage: `url(${img.url})` }}
            key={`product-img-${i}`}
          >
            {i === secondGroupImg.length - 1 && (
              <button
                id="show-more-product-imgs"
                onClick={() => handleShowLightbox(i + 1)}
              >
                Ver más
              </button>
            )}
          </div>
        ))}
      </div>
    </GalleryProductStyled>
  );
}
