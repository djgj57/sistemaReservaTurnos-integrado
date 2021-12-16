import styled from "styled-components";
import { colors } from "../../styles/utils/colors";
import { media } from "../../styles/utils/media";

export const ListCardContainer = styled.section`
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
  margin: 10px 20px 10px 0px;
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
    margin: 10px 20px 10px 0px;

    .header-card {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .score {
        padding-right: 8px;
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 130px;
        div {
          width: 40px;
          height: 30px;
          border-radius: 10px;
          background: ${colors.secondary};
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
    width: 48%;
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
    align-items: strech;
    justify-content: space-around;
    width: 50%;
    height: 277px;
  }

  .categorie {
    opacity: 50%;
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
    line-height: 28px;
  }

  .location {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    a {
      padding-right: 5px;
    }
  }

  .description {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
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
    line-height: 19px;
    text-align: center;
  }
  .see-more,
  .map {
    text-decoration: none;
    color: ${colors.highlight};
  }

  ${media.tablet} {
    margin-left: -25px;
    .list-card {
      width: 635px;
      height: 283px;
    }

    .list-img {
      width: 310px;
      height: 281px;
    }

    .list-card-info {
      width: 310px;
      height: 281px;
    }

    .more {
      width: 296px;
    }

    .fa-heart {
      padding-left: 250px;
    }
  }
  ${media.mobile} {
    .list-card {
      flex-flow: column wrap;
      width: 393px;
      height: 491px;
    }

    .list-img {
      width: 390px;
      height: 231px;
    }

    .list-card-info {
      width: 362px;
      height: 240px;
    }

    .more {
      width: 362px;
    }

    .fa-heart {
      padding-left: 330px;
    }
  }
`;
