import styled from "styled-components";
import { media } from "../../components/styles/utils/media";

export const MainContainer = styled.div`
  position: absolute;
  width: 100vw;
  margin-top:90px;
  display: flex;
  flex-direction: column;
  padding-bottom: 58px; 
  ${media.mobile} {
    /*position: inherit;*/
  }
`;
