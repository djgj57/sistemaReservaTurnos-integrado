import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";

export const PolicyProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  .Policy_General {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
  }
  .politics_product {
    text-align: left;
    width: 100%;
    padding-left: 15px;
    padding-top: 60px;
    border-bottom: 1px solid ${colors.highlight};
  }
  h3 {
    color: ${colors.formText};
    padding-bottom: 15px;
    margin-left: 25px;
  }

  h4 {
    color: ${colors.formText};
    margin-left: 38px;
    padding-top: 20px;
  }
  ul {
    color: ${colors.formText};
    padding: 10px 10px;
    margin-left: 10px;
    color: ${colors.formText};
    margin-left: 30px;
    list-style: none;
  }
`;
