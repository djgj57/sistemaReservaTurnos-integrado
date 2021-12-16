import styled from "styled-components";
import { colors } from "../../components/styles/utils/colors";
import { media } from "../../components/styles/utils/media";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${colors.highlight};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  .logoContainer {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    svg.small {
      width: 50px;
      height: 50px;
    }
    svg.large {
      display: none;
    }
    h1 {
      color: ${colors.primary};
      font-weight: 300;
      font-style: italic;
      font-size: 1.25rem;
      margin-left: 5px;
      align-self: end;
    }
  }
  .btnsContainer {
    .data {
      display: flex;
      flex-direction: row;
    }
    .fa-bars {
      display: none;
    }
  }

  ${media.tablet} {
    .logoContainer {
      h1 {
        display: none;
      }
      svg.small {
        display: none;
      }
      svg.large {
        display: block;
        width: 100px;
        height: 50px;
      }
    }
  }

  ${media.mobile} {
    width: 100vw;
    align-items: start;
    .btnsContainer {
      align-self: center;
      .fa-bars {
        display: block;
        font-size: 2rem;
        color: ${colors.secondary};
      }
      .data {
        display: none;
      }
    }
    .logoContainer {
      svg.small {
        display: none;
      }
    }
  }
`;
