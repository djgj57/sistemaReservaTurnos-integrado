import styled from "styled-components";
import { media } from "../../styles/utils/media";
import { colors } from "../../styles/utils/colors";

export const DataContainer = styled.div`
  div {
    margin: 20px 0;
    background-color: ${colors.primary};
    padding: 30px;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    label {
      width: 50%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      input {
        margin-top: 10px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid ${colors.back};
        font-size: 1.1rem;
        padding: 10px;
      }
      input:focus {
        outline: none;
      }
    }
  }
  ${media.mobile} {
    div {
      label {
        width: 100%;
      }
    }
  }
`;
