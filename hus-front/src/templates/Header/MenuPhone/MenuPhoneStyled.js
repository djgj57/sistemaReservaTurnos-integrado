import styled from "styled-components";
import { colors } from "./../../../components/styles/utils/colors";

export const MenuPhoneContainer = styled.div`
  width: 70vw;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  z-index: 10;
  margin: 0;
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 30vh;
    background-color: ${colors.highlight};
    color: ${colors.primary};
    padding: 20px;
    font-size: 1.5rem;

    .title {
      align-self: flex-end;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .buttons {
    height: 62vh;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    a {
      button {
        color: ${colors.highlight};
        border: none;
        outline: none;
        width: 100%;
        height: 70px;
        text-align: right;
        font-size: 1.1rem;
        background-color: ${colors.primary};
      }
      button:first-child {
        border-bottom: 2px solid ${colors.secondary};
      }
    }
    .buttonExit {
      color: ${colors.secondary};
      align-self: flex-end;
      font-size: 1rem;
      position: absolute;
      bottom: 8vh;
      border: none;
      outline: none;
      background-color: ${colors.primary};
      span {
        color: ${colors.highlight};
      }
    }
  }

  .iconosContainer {
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 2rem;
    height: 8vh;
    i {
      padding-right: 10px;
    }
  }
`;
