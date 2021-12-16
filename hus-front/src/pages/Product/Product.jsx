import React, { useEffect, useState } from "react";
import Carousel from "react-carousel-minimal/dist/components/Carousel";
import HeadingProduct from "../../components/Product/Heading/HeadingProduct";
import HeadingProductInfo from "../../components/Product/HeadingInfo/HeadingProductInfo";
import { ProductContainer } from "./ProductStyled";
import SocialMediaProduct from "./../../components/Product/SocialMedia/SocialMediaProduct";
import GalleryProduct from "../../components/Product/Gallery/GalleryProduct";
import DescriptionProduct from "./../../components/Product/Description/DescriptionProduct";
import GalleryLightbox from "../../components/Product/GalleryLightbox/GalleryLightbox";
import FeaturesProduct from "../../components/Product/Features/FeaturesProduct";
import ProductMap from "../../components/Product/Map/ProductMap";
import PolicyProduct from "./../../components/Product/Policy/PolicyProduct";
import {
  formatImageCollection,
  reorderCollection,
} from "../../components/Product/utils";
import ReserveContainer from "../../components/Product/ReserveContainer/ReserveContainer";
import Loader from "../../components/shared/Loader/Loader";

const Product = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const idProduct = props.match.params.id;
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://18.232.222.109:8080/api/open/product/${idProduct}`
      );
      let productData = await response.json();
      setProduct(productData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [imgUrlCollection, setImgUrlCollection] = useState();
  const imgCollage = formatImageCollection(product.images);

  const clientWidth = window.screen.width;

  const handleOpenLightBox = (id) => {
    const reorder = reorderCollection(product.images, id);
    setImgUrlCollection(formatImageCollection(reorder));
    setOpen(true);
  };

  const handleCloseLightBox = () => {
    setOpen(false);
  };
  return (
    <>
      <ProductContainer>
        {isLoading ? (
          <div className="loaderContainer" data-testid="loaderComponent">
            <Loader />
          </div>
        ) : (
          <>
            <HeadingProduct name={product.name} category={product.category} />
            <HeadingProductInfo
              city={product.city.name}
              score={product.score}
            />
            <SocialMediaProduct id={product.id} />
            <div className="product_content_container">
              {clientWidth > 980 ? (
                <GalleryProduct
                  images={product.images}
                  handleShowLightbox={handleOpenLightBox}
                />
              ) : (
                <Carousel
                  data={imgCollage}
                  width="100%"
                  height="400px"
                  automatic={true}
                  time={3000}
                  slideNumber={true}
                  thumbnails={true}
                  thumbnailWidth="50px"
                  slideBackgroundColor="transparent"
                  showNavBtn={false}
                  captionStyle={{ fontSize: "20px", fontWeight: "bold" }}
                />
              )}
              <DescriptionProduct
                description={product.description}
                category={product.category.description}
                price ={product.price}
              />
              <FeaturesProduct features={product.features} />
              <ReserveContainer id={product.id} />
            </div>

            <ProductMap
              apiKey="AIzaSyAek8mB0pwqNVMFECvxjM3QK8gBILr0yJA"
              position={{ lat: product.latitude, lng: product.longitude }}
              city={product.city}
            />
            {
              <PolicyProduct
                description={product.description}
                category={product.category.description}
              />
            }
            <GalleryLightbox
              images={imgUrlCollection}
              onClose={handleCloseLightBox}
              open={open}
            />
          </>
        )}
      </ProductContainer>
    </>
  );
};

export default Product;
