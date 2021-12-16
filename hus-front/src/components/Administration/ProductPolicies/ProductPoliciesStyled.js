import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

import styled from "styled-components";
export const Overlay = styled.div`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  ${media.tablet} {
    flex-direction: column;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  .labelPolicy {
    padding: 0px 0px;
    .textLabel {
      font-size: 0.75rem;
      color: ${colors.formText};
      margin-top: 10px;
    }
  }
  .descritionTitle {
    font-size: 1rem;
    line-height: 1.188rem;
    color: ${colors.policyText};
    margin-top: 10px;
    ${media.mobile} {
      font-size: 0.9rem;
    }
  }
  .textAreaField {
    background-color: ${colors.primary};
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    height: 200px;
    width: 367px;
    padding: 10px 10px;
    margin-top: 5px;
    ${media.tablet} {
      width: 675px;
    }
    ${media.mobile} {
      width: 100%;
      font-size: 0.75rem;
    }
  }
`;
