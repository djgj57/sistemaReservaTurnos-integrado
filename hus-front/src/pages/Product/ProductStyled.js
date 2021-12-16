import { media } from "../../components/styles/utils/media";

import styled from "styled-components";
export const ProductContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 58px;

  /* .product_content_container {
    padding: 0 40px 0 40px;
  } */
  .loaderContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 90vh;
    align-items: center;
  }

  .product_content_container {
    .box {
      .thumbnails {
        justify-content: center;
      }
    }
  }
  ${media.tablet} {
    .product_content_container {
      .box {
        .thumbnails {
          img {
            width: 80px;
          }
        }
      }
    }
  }

  ${media.mobile} {
    .product_content_container {
      .box {
        .thumbnails {
          img {
            width: 50px;
          }
        }
      }
    }
  }
`;
