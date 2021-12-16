import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
export const DescriptionProductStyled = styled.div`
  //display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  padding: 20px 30px;

  h3 {
    height: 28px;
    color: ${colors.formText};
    padding-top: 54px;
    padding-bottom: 10px;
  }
  p {
    padding-top: 35px;
    margin-right: 49px;
    color: ${colors.formText};
  }
`;
