import styled from "styled-components";
import { media } from "../../styles/utils/media";
import { colors } from "./../../styles/utils/colors";

export const SocialMediaProductStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  padding: 0px 30px;
  padding-bottom: 0;
  height: 50px;
  /*div {
    padding-right: 15px;
  }*/
  ${media.tablet} {
    padding-bottom: 20px;
  }
`;
