import styled from "styled-components";
import { colors } from "../../styles/utils/colors";
import { media } from "../../styles/utils/media";
export const Container = styled.div`
  .content-select {
    .react-select__control {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      min-height: 40px;
      width: 40vw;
      background-color: ${colors.primary};
      border-radius: 5px;
      margin-top: 8px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      border: none;
      option:first-child {
        font-size: 1rem;
        color: ${colors.back};
      }
      ${media.mobile} {
        width: 100%;
      }
    }
    .react-select__control:focus {
      outline: none;
      cursor: pointer;
    }
    .react-select__menu {
      /* background-color: blue; */
      ::selection {
        /* background-color: orange; */
      }
      :hover {
        /* background-color: red; */
      }
    }
    .react-select__menu-list {
      /* background-color: black; */
    }
    i {
      position: relative;
      left: 90%;
      bottom: 32px;
      color: ${colors.highlight};
    }
  }
`;
