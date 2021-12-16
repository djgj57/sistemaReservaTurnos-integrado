import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 638px;
  height: 302px;
  min-height: 100px;
  background: ${colors.primary};
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  text-align: center;
  color: ${colors.highlight};
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 300px;
    height: 300px;
  }
  .logoContainer {
    width: 60px;
    height: 60px;
    ${media.mobile} {
      display: none;
    }
  }
  h1 {
    text-transform: uppercase;
    font-size: 1.65rem;
    ${media.mobile} {
      font-size: 1.2rem;
      margin-top: 25px;
    }
  }
  h2 {
    font-size: 1.15rem;
    color: ${colors.secondary};
    ${media.mobile} {
      padding: 10px 10px;
      font-size: 0.7rem;
    }
  }
  h3 {
    font-size: 0.9rem;
    color: ${colors.secondary};
    ${media.mobile} {
      font-size: 0.7rem;
    }
  }
  h4 {
    color: ${colors.formText};
    font-size: 0.7rem;
    :hover {
      text-decoration: underline;
    }
    ${media.mobile} {
      font-size: 0.6rem;
      text-decoration: underline;
    }
  }
`;
