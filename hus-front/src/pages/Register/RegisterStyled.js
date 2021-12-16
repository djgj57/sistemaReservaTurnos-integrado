import styled from "styled-components";
import { colors } from "../../components/styles/utils/colors";
import { media } from "../../components/styles/utils/media";
export const RegisterContainer = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
  h1 {
    color: ${colors.highlight};
    font-weight: bold;
    font-size: 1.5rem;
    padding: 10px 0px;
  }
  .formContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 95%;
  }
  .formWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fullnameContainer {
    display: flex;
    ${media.tablet} {
      flex-direction: column;
    }
  }
  .textLabel {
    color: ${colors.formText};
  }
  label {
    padding: 5px 12px;
  }
  .inputFieldHalf {
    background-color: ${colors.primary};
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
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
  .inputField {
    background-color: ${colors.primary};
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    height: 40px;
    width: 460px;
    padding: 0px 10px;
    ${media.tablet} {
      width: 346px;
    }
    ${media.mobile} {
      width: 300px;
    }
  }
  .inputField-error {
    background-color: #ff000047;
    border-radius: 5px;
    padding: 0px 10px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: 1px solid grey;
    height: 40px;
    width: 460px;
    ${media.tablet} {
      width: 346px;
    }
    ${media.mobile} {
      width: 300px;
    }
  }
  .errorContainerHalf {
    text-align: right;
    margin-top: 4px;
    color: ${colors.error};
    font-weight: 500;
    font-size: 1rem;
  }
  .errorContainer {
    align-self: flex-end;
    margin-right: 20px;
    color: ${colors.error};
    font-weight: 500;
    font-size: 1rem;
  }
  .submitBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 206px;
    height: 40px;
    border: none;
    background-color: ${colors.highlight};
    border-radius: 5px;
    /* font */
    color: ${colors.primary};
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.172rem;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    margin-top: 50px;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    :hover {
      background-color: ${(props) =>
        props.theme === "primary" ? colors.highlight : colors.primary};
      color: ${(props) =>
        props.theme === "primary" ? colors.primary : colors.highlight};
      border-width: 1px;
      border-style: solid;
      border-color: ${(props) =>
        props.theme === "primary" ? colors.primary : colors.highlight};
    }
    ${media.tablet} {
      width: 346px;
    }
    ${media.mobile} {
      width: 300px;
    }
  }
  .finalText {
    font-size: 12px;
    font-weight: 500;
    padding: 10px 0px;
    .link {
      margin-left: 5px;
      color: #4285f4;
    }
  }
`;
