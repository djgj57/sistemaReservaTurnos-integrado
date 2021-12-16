import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

import styled from "styled-components";
export const Overlay = styled.div`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  display: flex;
  margin-top: 15px;
  padding: 10px 10px;
  justify-content: center;
  background-color: ${colors.grey};
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mobile} {
    width: 100%;
  }
  .requirementText {
    font-size: 1rem;
    color: ${colors.policyText};
    ${media.mobile} {
      font-size: 0.75rem;
    }
  }
  .fieldContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    padding: 10px 10px;
    margin-top: 5px;
  }
  .numberImg {
    color: ${colors.secondary};
    margin-right: 15px;
    font-size: 0.9rem;
    ${media.mobile} {
      font-size: 0.7rem;
    }
  }
  .inputField {
    background-color: ${colors.primary};
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    height: 40px;
    width: 1160px;
    padding: 0px 10px;
    ${media.tablet} {
      width: 530px;
    }
    ${media.mobile} {
      width: 100%;
      font-size: 0.75rem;
    }
  }
  .btnContainer {
    border-radius: 5px;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${colors.primary};
    transition: all 0.5s;
    :hover {
      opacity: 0.7;
    }
    &__add {
      background-color: ${colors.highlight};
    }
    &__remove {
      background-color: ${colors.error};
    }
    ${media.mobile} {
      height: auto;
    }
  }
  .btnValidateImg {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${colors.highlight};
    width: 200px;
    height: 40px;
    border-radius: 8px;
    color: ${colors.primary};
    transition: all 0.4s;
    &:hover {
      opacity: 0.8;
    }
  }
`;
