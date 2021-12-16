import styled from "styled-components";
import { colors } from "../../styles/utils/colors";
import { media } from "../../styles/utils/media";

export const ArrivalScheduleContainer = styled.div`
  .generalContainer {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    i {
      padding-right: 10px;
    }
    margin: 20px 0;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    p {
      font-size: 0.9rem;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    .content-select {
      width: 50%;
      padding: 0;
      box-shadow: none;
      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        height: 50px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid ${colors.back};

        option:first-child {
          font-size: 1rem;
          color: ${colors.back};
        }
      }
      select:focus {
        outline: none;
      }
      i {
        position: relative;
        left: 90%;
        bottom: 32px;
        color: ${colors.highlight};
      }
    }
  }
  ${media.mobile} {
    .generalContainer {
      .content-select {
        width: 100%;
      }
    }
  }
`;
