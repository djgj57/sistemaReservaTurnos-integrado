import styled from "styled-components";
import { media } from "./../../styles/utils/media";
import { colors } from "../../styles/utils/colors";

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.backgroundPrimary};
  padding: 25px;
  .reserveData {
    width: 64%;
  }
  .reserveDetails {
    width: 34%;
  }
  ${media.tablet} {
    flex-direction: column;
    .reserveData {
      width: 100%;
    }
    .reserveDetails {
      width: 100%;
    }
    ${media.tablet}{
        flex-direction:column;
        .reserveData{
            width:100%;
        }
        .reserveDetails{
            width:100%;
        }
    }
    ${media.mobile}{
        width:100vw;
        flex-direction:column;
        .reserveData{
            width:100%;
        }
        .reserveDetails{
            width:100%;
        }
    }

`;
