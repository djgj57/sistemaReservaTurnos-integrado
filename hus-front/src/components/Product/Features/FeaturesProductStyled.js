import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

export const FeaturesProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 40px 0 40px 0;
  width: 100%;

  .feature_product_heading {
    text-align: left;
    width: 100%;
    padding-left: 25px;
    border-bottom: 1px solid ${colors.highlight};
  }
  h3 {
    color: ${colors.formText};
    padding-bottom: 15px;
    margin-left: 4px;
  }

  span {
    color: ${colors.formText};
    padding: 10px 10px;
  }

  span.feature_product_icon {
    margin-left: 25px;
  }

  .feature_product_item_container {
    display: flex;
    flex-wrap: wrap;
    padding-top: 35px;
    width: 100%;
  }
  .feature_product_item_container .feature_product_icon svg {
    color: ${colors.highlight};
  }

  .feature_product_item {
    width: 25%;
    margin-top: 20px;
  }

  ${"@media(max-width: 980px)"} {
    .feature_product_item {
      width: 50%;
    }
  }

  ${media.small} {
    span {
      color: ${colors.formText};
      padding: 6px;
    }
  }
  ${media.tablet} {
    span {
      color: ${colors.formText};
      padding: 6px;
    }

    .feature_product_item_container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    .feature_product_item {
      width: 40%;
      margin-top: 20px;
    }
  }

  ${media.mobile} {
    .feature_product_item_container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    .feature_product_item {
      width: 65%;
      margin-top: 20px;
    }
  }
`;
