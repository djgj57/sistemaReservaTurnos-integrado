import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";
export const GalleryProductStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;

  button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

  .product_gallery_column_1,
  .product_gallery_column_2 {
    width: 50%;
    height: 440px;
  }

  .product_gallery_column_2 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 37px;
    margin-top: 18px;
  }

  .product_gallery_wrap {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .product_gallery_column_1 .product_gallery_wrap {
    width: 100%;
    height: 100%;
    margin: 24px;
    border-radius: 10px;
  }

  .product_gallery_column_2 .product_gallery_wrap {
    height: 48%;
    width: 48%;
    position: relative;
    margin: 7px;
    border-radius: 10px;
  }

  #show-more-product-imgs {
    position: absolute;
    bottom: 15px;
    right: 15px;
    color: ${colors.primary};
  }

  ${media.extraLarge} {
    flex-wrap: wrap;
    width: 100%;

    .product_gallery_column_1,
    .product_gallery_column_2 {
      width: 48%;
    }
    .product_gallery_column_1 .product_gallery_wrap {
      width: 98%;
      height: 94%;
      margin: 24px;
      margin-top: 40px;
      margin-left: 20px;
    }

    .product_gallery_column_2 {
      padding-top: 20px;
    }

    .product_gallery_column_2 .product_gallery_wrap {
      height: 49%;
      flex-wrap: wrap;
      margin: 2px;
    }
  }
`;
