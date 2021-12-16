import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

const HeadingProductInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  color: ${colors.secondary};
  padding: 10px 30px;
  .heading_info_title {
    h4 {
      max-width: 390px;
    }
  }
  .scoreContainer {
    display: flex;
    position: absolute;
    right: 0;
    margin-top: 5vh;
    margin-right: 1vw;

    div:nth-child(1n) {
      display: flex;
      flex-direction: column;
    }
    div:nth-child(2n) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      background-color: ${colors.highlight};
      color: ${colors.primary};
      margin-left: 10px;
      border-radius: 10px;
    }
    ${media.tablet} {
      margin-right: 3vw;
    }
    ${media.mobile} {
      margin-right: 4vw;
      margin-top: 6vh;
    }
    /* ${media.tablet} {
        h2{
            font-size:2rem;
        }
      }
    ${media.mobile} {
        height:260px;
        h2{
            font-size:1.6rem;
        }
      } */
  }
`;
export default HeadingProductInfoStyled;
