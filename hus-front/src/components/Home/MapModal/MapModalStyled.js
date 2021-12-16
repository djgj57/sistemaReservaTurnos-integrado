import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "../../styles/utils/media";

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
  width: 538px;
  height: 402px;
  min-height: 100px;
  background: ${colors.primary};
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  .titleContainer {
    display: none;
  }
  .mapRedirect {
    font-weight: 600;
    font-size: 1rem;
  }
`;
