import styled from "styled-components";
import { colors } from "../styles/utils/colors";


export const AlertStyled = styled.div`
.errorAlert{
    visibility:visible;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width:448px;
    height: 62px;
    margin: 26px;
    background-color: rgba(255, 0, 0, 0.1);
    border-radius: 8px;
  
  }

  h4{
    color: ${colors.alert};
    padding-left: 7px;
    margin-top: 7px;
  }

  .hidden{
    visibility:hidden;
  }
`;
