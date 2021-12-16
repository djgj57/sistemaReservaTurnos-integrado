import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

export const CategoriesContainer = styled.div`
  margin-top: 150px;
  color: #383b58;
  font-size: 0.9rem;
  background-color: ${colors.tertiary};
  ${media.tablet} {
    margin-left: -25px;
  }
  h2 {
    margin-left: 25px;
    padding-top: 20px;
  }

  .categorie-card-conteiner {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .categorie-card {
    cursor: pointer;
    background: ${colors.primary};
    border: 1px solid #f3f1ed;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 310px;
    height: 246px;
    margin: 10px;
    transition: all 0.4s;
    &:hover {
      opacity: 0.8;
    }
  }

  .categorie-img {
    width: 309px;
    height: 190px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .categorie-title,
  .categorie-options {
    margin-left: 20px;
    margin-top: 3px;
    text-transform: capitalize;
  }

  .categorie-options {
    opacity: 60%;
    font-size: 0.7rem;
  }

  ${media.mobile} {
    margin-top: 260px;
    h2 {
      padding-left: 20px;
    }

    .categorie-card-conteiner {
      display: flex;
      flex-direction: column;
      margin: 12px;
      .categorie-card {
        width: 80%;
        height: 276px;
        justify-self: center;
      }
    }

    .categorie-img {
      width: 100%;
      height: 213px;
    }
  }
`;
