import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";

export const ProductMapStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;

  .titleContainer .location {
    width: 100%;
    margin-left: 23px;
  }
  .map {
    padding-left: 33px;
    padding-right: 25px;
  }
  .titleContainer {
    text-align: left;
    
    padding-top: 60px;
    padding-left: 20px;
    border-bottom: 1px solid ${colors.highlight};
  }

  h3 {
    color: ${colors.formText};
    padding-bottom: 15px;
    margin-left: 18px;
  }

  p {
    padding-top: 20px;
    padding-bottom: 20px;
    color: ${colors.formText};
    margin-left: 34px;
  }
`;
