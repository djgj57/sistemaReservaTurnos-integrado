import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

import styled from "styled-components";
export const Overlay = styled.div`
  width: 95%;
`;
export const FormContainer = styled.div`
  background-color: ${colors.primary};
  border-radius: 8px;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  ${media.mobile} {
    font-size: 0.75rem;
  }
  .columnTitle {
    color: ${colors.formText};
    font-size: 1.25rem;
    ${media.mobile} {
      font-size: 0.75rem;
    }
  }
  .textLabel {
    color: ${colors.formText};
  }
  label {
    padding: 5px 12px;
  }
  .doubleContainer {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    margin-top: 10px;
    ${media.tablet} {
      flex-direction: row;
    }
    ${media.mobile} {
      flex-direction: column;
    }
  }
  .singleContainer {
    display: flex;
    padding: 10px 5px;
    margin-top: 10px;
    label {
      width: 100%;
    }
    .inputFieldTextArea {
      background-color: ${colors.primary};
      border-radius: 5px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      border: none;
      height: 120px;
      width: 100%;
      padding: 10px 10px;
      margin-top: 5px;
      ${media.mobile} {
        font-size: 0.75rem;
      }
    }
  }
  .columnContainer {
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    margin-top: 10px;
  }

  /* HIDE ARROWS IN NUMBER FIELD */
  input[type="number"].inputFieldHalf::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .inputFieldHalf {
    background-color: ${colors.primary};
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    height: 40px;
    width: 40vw;
    padding: 0px 10px;
    margin-top: 5px;
    &__price::before {
      content: "$";
    }

    ${media.mobile} {
      width: 100%;
      font-size: 0.75rem;
    }
  }
  .inputFieldHalf-error {
    background-color: #ff000047;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    height: 40px;
    width: 218px;
    padding: 0px 10px;
    ${media.tablet} {
      width: 346px;
    }
    ${media.mobile} {
      width: 300px;
    }
  }
  .inputFieldHalfSelect {
    background-color: ${colors.primary};
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    height: 40px;
    width: 570px;
    padding: 0px 10px;
    margin-top: 5px;
    ul {
      width: 100%;
      background-color: ${colors.primary};
      padding: 10px;
      -webkit-box-shadow: 2px 9px 24px 4px #707070;
      box-shadow: 2px 9px 24px 4px #707070;
      border-radius: 0 0 6px 6px;
      li {
        display: flex;
        list-style: none;
        border-top: 2px solid ${colors.highlight};
        div {
          margin: 10px;
          .cityName {
            font-weight: bold;
          }
        }
      }
      li:first-child {
        border-top: none;
      }
    }

    .inputField-error {
      background-color: #ff000047;
      border: 1px solid grey;
      border-radius: 5px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      height: 120px;
      width: 1165px;
      margin-top: 5px;
      padding: 0px 10px;
      ${media.tablet} {
        width: 346px;
      }
      ${media.mobile} {
        width: 300px;
      }
    }
  }
  .submitBtnContainer {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    .submitBtn {
      width: 365px;
      height: 50px;
      background-color: ${colors.highlight};
      border-radius: 5px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
      font-size: 1rem;
      color: ${colors.primary};
      border: none;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .errorContainer {
    color: ${colors.error};
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    margin-top: 5px;
  }
  textarea {
    resize: none;
    &:focus {
      outline-color: ${colors.highlight};
    }
  }
  input {
    &:focus {
      outline-color: ${colors.highlight};
    }
  }
`;
