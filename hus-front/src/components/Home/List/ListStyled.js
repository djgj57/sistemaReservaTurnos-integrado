import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

export const ListContainer = styled.section`
  background-color: ${colors.backgroundPrimary};
  color: #383b58;
  font-size: 0.9rem;
  margin: 0%;

  h2 {
    margin-left: 25px;
    padding-top: 20px;
  }

  .list-card-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 10px;
    -webkit-justify-content: none;
    padding: 0px 10px 0px 10px;
  }

  .list-card {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    background: ${colors.primary};
    border: 1px solid #dfe4ea;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 48%;
    height: 279px;
    margin: 10px 0px 10px 0px;

    .header-card {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .header-name {
        width: 70%;
      }
      .score {
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 80px;
        div {
          width: 40px;
          height: 30px;
          border-radius: 10px;
          background: ${colors.highlight};
          color: ${colors.primary};
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
        }
        p {
          font-weight: bold;
        }
      }
    }

    i {
      padding-right: 5px;
    }
  }

  .list-img {
    width: 50%;
    height: 277px;
    border-radius: 10px;
  }
  .fa-heart {
    position: absolute;
    font-size: 1.3rem;
    color: ${colors.primary};
    align-self: flex-start;
    justify-self: flex-end;
    margin: 15px;
    padding-left: 18%;
  }

  .fa-heart:hover {
    font-size: 1.7rem;
    color: ${colors.highlight};
  }

  .list-card-info {
    display: flex;

    flex-flow: column wrap;
    flex-direction: column;
    align-items: strech;
    justify-content: space-between;
    width: 50%;
    height: 277px;
    padding: 10px;
  }

  .categorie {
    opacity: 50%;
    text-transform: capitalize;
  }

  .fas.fa-star {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f005";
    color: ${colors.highlight};
    opacity: none;
  }

  .name {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    /*line-height: 28px;*/
  }

  .location {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    /*line-height: 16px;*/
    a {
      padding-right: 5px;
    }

    .features {
      padding: 5px;
    }
  }
  .map {
    cursor: pointer;
  }
  .showMapText {
    font-weight: 600;
  }

  .description {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    /*line-height: 16px;*/
  }

  .more {
    background: ${colors.highlight};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    width: 97%;
    height: 40px;
    border: none;
    color: ${colors.primary};
    cursor: pointer;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    /*line-height: 19px;*/
    text-align: center;
  }

  .see-more,
  .map {
    text-decoration: none;
    color: ${colors.highlight};
  }
  .see-more {
    cursor: pointer;
  }

  .page-navegation {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 30px 0 30px 0;
    .hidde {
      background: ${colors.backgroundPrimary};
      width: 10px;
      margin: 0 80px;
    }
    .hidde2 {
      background: #e5e5e5;
      width: 10px;
      margin: 0 80px;
    }
    i {
      font-size: 20px;
      font-weight: bold;
      color: ${colors.secondary};
      cursor: pointer;
      margin: 0 80px;
    }
    i:hover {
      color: ${colors.highlight};
    }
  }

  section .request-failed {
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  ${media.minilaptop} {
    .list-card {
      width: 635px;
      height: 283px;
    }
  }

  ${media.tablet} {
    list-style-type: none;
    margin-left: -25px;
    .list-card {
      width: 635px;
      height: 283px;
    }

    .list-img {
      width: 50%;
      height: 281px;
    }

    .more {
      width: 296px;
    }

    .fa-heart {
      padding-left: 250px;
    }

    .list-card-container {
      justify-content: center;
      padding: 0px 20px 0px 40px;
    }
  }

  ${media.mobile} {
    h2 {
      padding-left: 20px;
    }
    .list-card {
      width: 393px;
      height: 491px;
      flex-direction: column;
      .list-img {
        width: 100%;
        height: 231px;
      }

      .list-card-info {
        width: 100%;
        padding: 10px;
        height: 240px;
        .header-card {
          width: 100%;
        }
      }
    }
    .page-navegation {
      width: 100%;
      .hidde {
        margin: 0 40px;
      }
      .hidde2 {
        margin: 0 40px;
      }
      i {
        margin: 0 40px;
      }
    }

    .more {
      width: 362px;
    }

    .fa-heart {
      padding-left: 330px;
    }
  }

  .loaderContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 40vh;
    align-items: center;
  }
  .firstDescriptionContainer {
    display: flex;
    flex-direction: row;
  }
`;
